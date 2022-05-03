import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';

const  CitySearchScreen = ({ navigation }) => {
  
  return (
    <View style={styles.topView}>
      <Text style={styles.mainText}>
        SEARCH BY 
        {'\n'}
        CITY
      </Text>
      <View style={{flex: 2, alignSelf: 'stretch'}}>
        <View style={styles.inputView}>
          <TextInput style={styles.input}/>
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={()=>{navigation.navigate('CityResult', {city: 'Paris', population: 2244000})}}>
            <Image 
              source={require('./assets/magnifying-glass.png')} 
              style={{flex: 1, width: '100%', aspectRatio: 1, margin: 10}}
            />
          </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mainText: {
    flex: 1,
    marginTop: '15%',
    fontSize: 32,
    textAlign: 'center'
  },
  inputView: {
    height: 50,
    fontSize: 25,
    margin: 10,
    borderColor: '#fad',
    borderWidth: 2,
    borderRadius: 5,
  },
  input: {
    fontSize: 25,
    margin: 10,
  },
  searchButton: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    fontSize: 25,
    margin: 10,
    backgroundColor: '#fad',
    borderRadius: 25,
  }
})

export default CitySearchScreen;