// import react, { useState } from 'react';
// import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, Button } from 'react-native';

// import { theme } from './src/infrastructure/theme';
// import { ThemeProvider } from 'styled-components/native';

// import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
// import { SafeArea } from './src/components/utils/safe-area.component';

// import { Navigation } from './src/infrastructure/navigation';

// import { Ionicons } from '@expo/vector-icons';

// import {
//   useFonts as useOswald,
//   Oswald_400Regular,
// } from '@expo-google-fonts/oswald';

// import {
//   useFonts as useLato,
//   Lato_400Regular,
// } from '@expo-google-fonts/lato';

// import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
// import { LocationContextProvider } from './src/services/location/location.context';
// import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

// export default function App() {

//   const [oswaldLoaded] = useOswald({
//     Oswald_400Regular,
//   });

//   const [latoLoaded] = useLato({
//     Lato_400Regular,
//   });
  
//   if (!oswaldLoaded || !latoLoaded) {
//     return null;
//   }
  
//   return (
//       <>
//         <ThemeProvider theme={theme}>
//           <LocationContextProvider>
//             <RestaurantsContextProvider>
//               <Navigation/>
//             </RestaurantsContextProvider>
//           </LocationContextProvider>
//       </ThemeProvider>
//       <ExpoStatusBar style='auto'/>
//     </>
//   );
// }

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAl84P3BuIgmFHSsQUtF_0MmUnyi374skI",
  authDomain: "mealstogo-4a34a.firebaseapp.com",
  projectId: "mealstogo-4a34a",
  storageBucket: "mealstogo-4a34a.appspot.com",
  messagingSenderId: "1051003935063",
  appId: "1:1051003935063:web:0519c72d156b8c86058612"
};

firebase.initializeApp(firebaseConfig);

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}