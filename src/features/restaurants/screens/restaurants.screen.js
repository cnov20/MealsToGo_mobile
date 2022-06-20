import react, { useState } from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';

const isAndroid = Platform.OS === 'android';
console.log(StatusBar.currentHeight);

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: 15px;
`;

const RestaurantList = styled(View)`
  flex: 1;
  backgroundColor: blue;
  padding: 15px;
`;


const RestaurantsScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeArea>
          <SearchContainer>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </SearchContainer>
        <RestaurantList>
            <RestaurantInfoCard />
        </RestaurantList>
      </SafeArea>
    )
}

const styles = StyleSheet.create({});

export default RestaurantsScreen