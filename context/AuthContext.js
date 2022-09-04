import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import {BASE_URL} from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)

  const login = (email, password) => {
    setIsLoading(true)
    console.log(`${BASE_URL}/users/sign_in`)
    axios.post(`${BASE_URL}/users/sign_in`, {
      email: email,
      password: password
    })
    .then( res => {
      console.log(res.data)
    })
    .catch(e => {
      console.log(`Login error ${e}`);
    })
    // setUserToken('sadsdadsadasd');
    // AsyncStorage.setItem('userToken', 'sadsdadsadasd')
    setIsLoading(false);
  }

  const logout = () => {
    setIsLoading(true)
    setUserToken(null)
    AsyncStorage.removeItem('userToken')
    setIsLoading(false)
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken)
      setIsLoading(false)
    } catch (e) {
     console.log(`isLogged in error ${e}`)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  )
}
