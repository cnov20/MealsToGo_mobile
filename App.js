import react from 'react';
import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
      <ExpoStatusBar style='auto'/>
    </SafeAreaView>
  );
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
    backgroundColor: 'green',
    padding: 10
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10
  }
});
