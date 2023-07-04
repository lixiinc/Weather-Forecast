import React, { Component } from 'react'

import CityWiseScreen from './Screens/CityWise';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: '#57abff' }} activeColor="black" >
      <Tab.Screen name="CityWise" component={CityWiseScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="city" color={color} size={26}/>
        ),
    }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}