import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';

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
    marginTop: 30,
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