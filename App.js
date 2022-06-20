import react, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

export default function App() {

  return (
    <>
    <RestaurantsScreen/>
    {/* <ExpoStatusBar style='auto' /> */}
    </>
  );
}

const styles = StyleSheet.create({
  
});
