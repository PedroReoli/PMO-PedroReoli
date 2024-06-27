import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@/_root/pages/Home/Home';
import { Summary } from '@/_root/pages/Resumo/Resumo';
import { List } from '@/_root/pages/Listagem/List';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Summary" 
          component={Summary} 
          options={{ title: 'Resumo' }} 
        />
        <Stack.Screen 
          name="List" 
          component={List} 
          options={{ title: 'Listagem' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
