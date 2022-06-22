import react from 'react'
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
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
                <Info>
                    <Title>{name}</Title>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>
        </View>
    )
}

const styles = StyleSheet.create({})

export default RestaurantInfoCard;

