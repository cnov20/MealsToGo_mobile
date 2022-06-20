import react from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


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
            <Card elevation={5} style={styles.card}>
                <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
                <Text style={styles.title}>{name}</Text>
                {/* <Text style={styles.title}>{address}</Text> */}
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white"
    },
    cover: {
        padding: 15,
        backgroundColor: "white"
    },
    title: {
        padding: 15
    }
})

export default RestaurantInfoCard;

