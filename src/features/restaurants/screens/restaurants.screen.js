import react, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, FlatList, Pressable } from 'react-native';
import { Card, ActivityIndicator, Colors } from 'react-native-paper';

import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.components';
import { SafeArea } from '../../../components/utils/safe-area.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';

const isAndroid = Platform.OS === 'android';
console.log(StatusBar.currentHeight);

// export const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// `;


// const RestaurantListContainer = styled(View)`
//   flex: 1;
//   backgroundColor: ${(props) => props.theme.colors.brand.primary};
//   padding: ${(props) => props.theme.space[3]};
// `;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled(View)`
  position: absolute; 
  top: 50%;
  left: 50%;
`

const RestaurantsScreen = ( { navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  //  const restaurantContext = useContext(RestaurantsContext);
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  
  return (
    <SafeArea>
      {isLoading && (
      <LoadingContainer>
        <Loading size={50} animating={true} color={Colors.blue300} />
      </LoadingContainer>
  )}
      <Search/>
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) =>
              <Pressable onPress={() => navigation.navigate('Restaurant Detail')}>
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </Pressable>
          }
            keyExtractor={(item) => item.name}
            // contentContainerStyle={{ padding: 16 }}
          />
         
      </SafeArea>
    )
}

const styles = StyleSheet.create({});

export default RestaurantsScreen