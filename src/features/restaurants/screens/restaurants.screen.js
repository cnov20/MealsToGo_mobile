import react, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/restaurant-info.component';

const isAndroid = Platform.OS === 'android';
console.log(StatusBar.currentHeight);

const RestaurantsScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.search}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
          <View style={styles.list}>
            <RestaurantInfo/>
          </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: isAndroid ? StatusBar.currentHeight : null
  },
  search: {
    // flex: 0,
    padding: 15
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10
  }
})

export default RestaurantsScreen