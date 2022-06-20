import react, { useState } from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';

const isAndroid = Platform.OS === 'android';
console.log(StatusBar.currentHeight);

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  // marginTop: isAndroid;
`;

const Search = styled(View)`
  padding: 15px;
`;

const List = styled(View)`
  flex: 1;
  backgroundColor: blue;
  padding: 15px;
`;


const RestaurantsScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeContainer style={styles.container}>
          <Search>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </Search>
        <List>
            <RestaurantInfoCard />
          </List>
      </SafeContainer>
    )
}

const styles = StyleSheet.create({});

export default RestaurantsScreen