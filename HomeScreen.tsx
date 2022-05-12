import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';

/**
 * Defines the home screen of the app. HAs two buttons which lead to the two
 * different functionalities of the app.
 * @param param0 Uses the navigation prop from react navigation for navigating
 * to other screens.
 * @returns The home screen hook
 */
const  HomeScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
      <Text style={styles.appTitle}>CityPop</Text>
      <View style={styles.homeButtonContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('CitySearch')}
          style={styles.touchables}
        >
            <Text>SEARCH BY CITY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CountrySearch')}
          style={styles.touchables}
        >
          <Text>SEARCH BY COUNTRY</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  appTitle: {
    flex: 1,
    marginTop: 55,
    fontSize: 32
  },
  homeButtonContainer: {
    flex: 2,
    alignSelf: 'stretch',
  },
  touchables: {
    backgroundColor: '#fad',
    borderRadius: 3,
    padding: 20,
    margin: 2,
    marginBottom: 5,
    marginTop: 5,
  }
});

export default HomeScreen;