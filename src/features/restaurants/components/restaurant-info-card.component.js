import react from 'react'
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import star from "../../../../assets/star";
import open from "../../../../assets/open";

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

const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

const OpenIcon = styled(SvgXml)`
    flex-direction: row;
`;

const Section = styled(View)`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
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

const Closed = styled(Text)`
    color: ${(props) => props.theme.colors.text.error};
`;

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
                    <Title>{name}</Title>
                    <Section>
                        <Rating>
                            {ratingArray.map(() => (
                                <SvgXml xml={star} width={20} height={20} />
                            ))}   
                        </Rating>
                        <SectionEnd>
                            {isClosedTemporarily && <Closed variant="label">CLOSED TEMPORARILY</Closed>}
                            <View style={{ paddingLeft: 16 }} />
                            {isOpenNow && <OpenIcon xml={open} width={20} height={20} />}
                            <View style={{ paddingLeft: 16 }} />
                            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }}></Image>
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

