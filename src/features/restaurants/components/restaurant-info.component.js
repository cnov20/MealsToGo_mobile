import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://foodiesfeed.com/2019/"
        ],
        address = "100 Some Random St",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;

    return (
        <View>
        <Text>Restaurant Info</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default RestaurantInfo;

