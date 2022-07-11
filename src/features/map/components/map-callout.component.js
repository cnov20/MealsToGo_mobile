import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const MyText = styled.Text``;

export const MapCallout = ( {restaurant }) => {
  return (
    <CompactRestaurantInfo
        isMap
        restaurant={restaurant}
      />
    
  )
}

const styles = StyleSheet.create({});

// export default MapCallout;
