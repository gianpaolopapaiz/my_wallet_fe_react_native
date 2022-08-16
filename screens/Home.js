import React from 'react';
import { StyleSheet } from 'react-native';
import Accounts from './Accounts';
import Transactions from "./Transactions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Accounts" component={Accounts}/>
      <Stack.Screen name="Transactions" component={Transactions}/>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
});

export default Home
