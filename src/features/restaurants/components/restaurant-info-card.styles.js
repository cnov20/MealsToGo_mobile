import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Text, Image } from "react-native";

export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled(View)`
    flex-direction: row;
    align-items: center;
`;

export const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Closed = styled(Text)`
    color: ${(props) => props.theme.colors.text.error};
`;

export const Icon = styled(Image)`
    height: 15px;
    width: 15px;
`;

// const Title = styled(Text)`
//     font-family: ${(props) => props.theme.fonts.heading};
//     font-size: ${(props) => props.theme.fontSizes.body};
//     color: ${(props) => props.theme.colors.ui.primary};
// `;

// export const OpenIcon = styled(SvgXml)`
//     flex-direction: row;
// `;