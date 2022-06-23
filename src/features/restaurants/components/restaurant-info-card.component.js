import react from 'react'
import styled from 'styled-components/native';
import { StyleSheet, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from '../../../components/spacer/spacer.components';
import { Text } from "../../../components/typography/text.component";

import {
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Rating,
    OpenIcon,
    Section,
    SectionEnd,
    Address,
    Closed,
    Icon
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
            'https://picsum.photos/700'
        ],
        address = "100 Some Random St",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    console.log(ratingArray);

    return (
        <View>
            <RestaurantCard elevation={5}>
                <RestaurantCardCover source={{ uri: photos[0] }} />
                <Info>
                    <Text variant="label">{name}</Text>
                    <Section>
                        <Rating>
                            {ratingArray.map(() => (
                                <SvgXml xml={star} width={20} height={20} />
                            ))}   
                        </Rating>
                        <SectionEnd>
                            {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
                            <Spacer position="left" size="large">
                                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                            </Spacer>
                            <Spacer position="left" size="large">
                                <Icon source={{ uri: icon }} />
                             </Spacer>
                        </SectionEnd>     
                    </Section>
                    <Address>{address}</Address>
                    
                </Info>
            </RestaurantCard>
        </View>
    )
}

const styles = StyleSheet.create({})

export default RestaurantInfoCard;

