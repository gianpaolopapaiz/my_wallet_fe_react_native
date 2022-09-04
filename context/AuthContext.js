import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import {BASE_URL} from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  const login = (email, password) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/sign_in`, {
      user: {
        email: email,
        password: password
      },
    })
    .then( res => {
      console.log(res.headers.authorization.split(' ')[1])
      let userToken = res.headers.authorization.split(' ')[1];
      let userInfo = res.data.user;
      setUserInfo(userInfo);
      setUserToken(userToken);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      AsyncStorage.setItem('userToken', userToken);
    })
    .catch(e => {
      console.log(`Login error ${e}`);
    })
    setIsLoading(false);
  }

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    setUserInfo(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }
      setIsLoading(false);
    } catch (e) {
     console.log(`isLogged in error ${e}`);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  )
}
