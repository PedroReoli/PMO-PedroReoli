// src/Routes.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@/_root/pages/Home/Home';
import { Summary } from '@/_root/pages/Summary/Resumo';
import { List } from '@/_root/pages/List/List';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home' }} 
        />
        <Tab.Screen 
          name="Summary" 
          component={Summary} 
          options={{ title: 'Resumo' }} 
          initialParams={{ totalValues: [] }} // Default params
        />
        <Tab.Screen 
          name="List" 
          component={List} 
          options={{ title: 'Listagem' }} 
          initialParams={{ users: [] }} // Default params
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
