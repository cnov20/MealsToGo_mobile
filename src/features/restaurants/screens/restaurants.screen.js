// import react, { useState, useContext } from 'react';
// import styled from 'styled-components/native';
// import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, FlatList, Pressable } from 'react-native';
// import { Card, ActivityIndicator, Colors } from 'react-native-paper';

// import RestaurantInfoCard from '../components/restaurant-info-card.component';
// import { Spacer } from '../../../components/spacer/spacer.component';
// import { SafeArea } from '../../../components/utils/safe-area.component';

// import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
// import { Search } from '../components/search.component';
// import { TouchableOpacity } from 'react-native-web';

// const isAndroid = Platform.OS === 'android';
// console.log(StatusBar.currentHeight);

// const RestaurantList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 16,
//   },
// })``;

// const Loading = styled(ActivityIndicator)`
//   margin-left: -25px;
// `

// const LoadingContainer = styled(View)`
//   position: absolute; 
//   top: 50%;
//   left: 50%;
// `

// export const RestaurantsScreen = ({ navigation }) => {

//   const { isLoading, error, restaurants } = useContext(RestaurantsContext);
//   // console.log(error);
  
//   return (
//     <SafeArea>
//       {isLoading && (
//         <LoadingContainer>
//           <Loading size={50} animating={true} color={Colors.blue300} />
//         </LoadingContainer>
//       )}
//       <Search />
//       <RestaurantList
//         data={restaurants}
//         renderItem={({ item }) => {
//           return (
//             // <TouchableOpacity
//             //   onPress={() =>
//             //     navigation.navigate('Restaurant Detail', {
//             //     restaurant: item,
//             //   })
//             // }
//             // >
//               <Spacer position="bottom" size="large">
//                 <RestaurantInfoCard restaurant={item} />
//               </Spacer>
//             // </TouchableOpacity>
//           );
//         }}
//         keyExtractor={(item) => item.name}
//       />    
//     </SafeArea>
//   );
// };

// export default RestaurantsScreen

import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { RestaurantList } from "../components/restaurant-list.styles";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
        favourites={favourites}
        onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};