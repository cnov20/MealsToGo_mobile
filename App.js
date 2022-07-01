import react, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, Button } from 'react-native';

import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { SafeArea } from './src/components/utils/safe-area.component';

import { Navigation } from './src/infrastructure/navigation';

import { Ionicons } from '@expo/vector-icons';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from './src/services/location/location.context';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';


// function Restaurant({ navigation }) {
//   return (
//     <View>
//       <Text>Restaurants</Text>
//       <Button
//         title="Go to Maps"
//         onPress={() => navigation.navigate('Map')}
//       />
//     </View>
//   );
// }

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
  return (
      <>
        <ThemeProvider theme={theme}>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation/>
            </RestaurantsContextProvider>
          </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({
  
});
