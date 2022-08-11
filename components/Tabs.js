import React from 'react';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Statistics" component={Home}/>
      <Tab.Screen name="Categories" component={Categories}/>
      <Tab.Screen name="Settings" component={Home}/>
    </Tab.Navigator>
  );
};

export default Tabs;
