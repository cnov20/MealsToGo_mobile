import { StyleSheet, Text, View } from 'react-native'
import react from 'react'

import RestaurantInfoCard from '../components/restaurant-info-card.component'
import { SafeArea } from '../../../components/utils/safe-area.component'

const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
        </SafeArea>
    );
};

const styles = StyleSheet.create({})

export default RestaurantDetailScreen

