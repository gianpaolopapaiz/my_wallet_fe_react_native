import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./AuthStack";
import Tabs from '../components/Tabs'
import { AuthContext } from "../context/AuthContext";
import {ActivityIndicator, View} from "react-native";

const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'}/>
    </View>
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <Tabs/> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default AppNav;
