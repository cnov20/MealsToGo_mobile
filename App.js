import react, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';


function Restaurant({ navigation }) {
  return (
    <View>
      <Text>Restaurants</Text>
      <Button
        title="Go to Maps"
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
}

function MapScreen({ navigation }) {
  return (
    <View>
      <Text>Map</Text>
      <Button
        title="Go to Restaurants"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View>
      <Text>Settings</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

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
            {/* <RestaurantsScreen/> */}
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
            {/* </RestaurantsScreen> */}
        </ThemeProvider>
        

      </>
    );
  }
}

const styles = StyleSheet.create({
  
});
