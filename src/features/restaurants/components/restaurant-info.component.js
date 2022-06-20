import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
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

