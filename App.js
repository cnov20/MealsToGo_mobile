import react, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/infrastructure/theme';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

export default function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen/>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  
});
