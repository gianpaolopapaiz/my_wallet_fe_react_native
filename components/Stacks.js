import React from 'react';
import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
};

export default Stacks;
