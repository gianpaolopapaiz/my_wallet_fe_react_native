import React from 'react';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor: 'green' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="white" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Home}
        options={{
          tabBarLabel: 'Statistics',
          tabBarIcon: () => (
            <FontAwesome name="pie-chart" color="white" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: () => (
            <Entypo name="folder" color="white" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <Ionicons name="settings-sharp" color="white" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
