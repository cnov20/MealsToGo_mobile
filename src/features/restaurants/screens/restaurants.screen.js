import react, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, FlatList } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';

import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.components';
import { SafeArea } from '../../../components/utils/safe-area.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const isAndroid = Platform.OS === 'android';
console.log(StatusBar.currentHeight);

// export const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// `;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

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


const RestaurantsScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  const restaurantContext = useContext(RestaurantsContext);

    return (
        <SafeArea>
          <SearchContainer>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </SearchContainer>
          <RestaurantList
            data={restaurantContext.restaurants}
            renderItem={() =>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard />
              </Spacer>
          }
            keyExtractor={(item) => item.name}
            // contentContainerStyle={{ padding: 16 }}
          />
         
      </SafeArea>
    )
}

const styles = StyleSheet.create({});

export default RestaurantsScreen