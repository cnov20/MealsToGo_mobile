import react, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { SafeArea } from './src/components/utils/safe-area.component';

import { Ionicons } from '@expo/vector-icons';

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
    <SafeArea>
      <Text>Map</Text>
      <Button
        title="Go to Restaurants"
        onPress={() => navigation.navigate('Settings')}
      />
    </SafeArea>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </SafeArea>
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
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
    
                  if (route.name === 'Restaurants') {
                    iconName = focused
                      ? 'md-restaurant'
                      : 'ios-information-circle-outline';
                  } else if (route.name === 'Map') {
                    iconName = focused ? 'md-map' : 'ios-list';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'md-settings' : 'ios-list';
                  }
    
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
        

      </>
    );
  }
}

const styles = StyleSheet.create({
  
});
