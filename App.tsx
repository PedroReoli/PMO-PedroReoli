// App.tsx
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from '@/Routes';
import { DataProvider } from '@/context/DataContext';

export default function App() {
  return (
    <DataProvider>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Routes />
    </DataProvider>
  );
}
