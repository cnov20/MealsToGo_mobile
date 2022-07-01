import react from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { SafeArea } from '../../components/utils/safe-area.component';
import { RestaurantsNavigator } from './restaurants.navigator';


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings"
}

function Map() {
  return (
    <SafeArea>
      <Text>Map</Text>
      {/* <Button
        title="Go to Restaurants"
        onPress={() => navigation.navigate('Restaurants')}
      /> */}
    </SafeArea>
  );
}

function Settings() {
  return (
    <SafeArea>
      <Text>Settings</Text>
      {/* <Button title="Go to Restaurants" onPress={() => navigation.navigate('Restaurants')} /> */}
    </SafeArea>
  );
}



// const tabBarIcon = (iconName) => ({ size, color }) => {
//   return <Ionicons name={iconName} size={size} color={color} />;
// };


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigator = ({route}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default AppNavigator;
