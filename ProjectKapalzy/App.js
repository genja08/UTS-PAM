 import React, { Component } from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import { AntDesign } from '@expo/vector-icons';

 import Home from './src/screens/Home';
 import Detail from './src/screens/Details';

 const Tab = createBottomTabNavigator();
 const Stack = createNativeStackNavigator();

 function App(){
 return(
     <NavigationContainer>
        <Tab.Navigator
         screenOptions={({ route }) => ({
           tabBarIcon: ({ focused, color, size }) => {
             let iconName;

             if (route.name === 'Home') {
               iconName = focused
                 ? 'ios-information-circle'
                 : 'ios-information-circle-outline';
             } else if (route.name === 'Detail') {
               iconName = focused ? 'ios-list-box' : 'ios-list';
              
             }

             // You can return any component that you like here!
             return <AntDesign name="home" size={24} color="black"  />;
           },
           tabBarActiveTintColor: 'tomato',
           tabBarInactiveTintColor: 'gray',
         })}
       >
         <Tab.Screen name="Home" component={Home} />
         <Tab.Screen name="Pesanan Saya" component={Home} />
         <Tab.Screen name="Pembatalan" component={Home} />
         <Tab.Screen name="Lainnya" component={Home} />
       </Tab.Navigator>

     </NavigationContainer>
 )
 }
 export default App;

import * as React from 'react';
import MainContainer from './navigation/MainContainer';

function App() {
  return (
    <MainContainer/>
  );
}

export default App;