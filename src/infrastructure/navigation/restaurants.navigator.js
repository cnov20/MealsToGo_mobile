import react from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <View>
        <RestaurantStack.Navigator headerMode="none">
              <RestaurantStack.Screen
                  name="Restaurants"
                  component={RestaurantsScreen}
              />
              <RestaurantStack.Screen
                  name="Restaurant Detail"
                  component={() => <Text>Restaurant Detail</Text>}
              />
        </RestaurantStack.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({})

export default RestaurantsNavigator;