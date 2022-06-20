import react from 'react'
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: 15px;
    background-color: white;
`;

const Title = styled(Text)`
    padding: 15px;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
            'https://picsum.photos/700'
        ],
        address = "100 Some Random St",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;

    return (
        <View>
            <RestaurantCard elevation={5}>
                <RestaurantCardCover source={{ uri: photos[0] }} />
                <Title>{name}</Title>
                {/* <Text style={styles.title}>{address}</Text> */}
            </RestaurantCard>
        </View>
    )
}

const styles = StyleSheet.create({})

export default RestaurantInfoCard;

