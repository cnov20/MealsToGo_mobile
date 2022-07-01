import react from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="Restaurant Detail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

const styles = StyleSheet.create({})

// export default RestaurantsNavigator;