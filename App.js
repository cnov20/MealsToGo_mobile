import react, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  
  if (!oswaldLoaded || !latoLoaded) {
    return null;
    // return <AppLoading />;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
        </ThemeProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  
});
