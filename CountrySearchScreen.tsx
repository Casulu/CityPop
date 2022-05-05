import * as React from 'react';
import axios from 'axios';
import { geoResult } from './GeoTypes';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';
import { useState } from 'react';

const countryChildrenBaseUrl = "http://api.geonames.org/search?username=weknowit&type=json&featureClass=P&orderby=population&maxRows=1&name=";
const titleText = 'SEARCH BY\nCOUNTRY';
async function fetchCountryChildren(searchTerm: String) : Promise<geoResult>{
  return axios(countryChildrenBaseUrl + searchTerm).then(response => response.data.geonames[0]);
}

const  CountrySearchScreen = ({ navigation }) => {
  const [mainText, setMainText] = useState(titleText);
  const [searchInput, setSearchInput] = useState('');

  const searchClick = async () => {
    setMainText("LOADING");
    var fetchResult = await fetchCountryChildren(searchInput);
    setMainText(titleText);
    return fetchResult;
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.mainText}>
        {mainText}
      </Text>
      <View style={{flex: 2, alignSelf: 'stretch'}}>
        <View style={styles.inputView}>
          <TextInput style={styles.input} onChangeText={setSearchInput}/>
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={async () => {
          var fetchResult = await searchClick();
          navigation.navigate('CountryResult', {name: fetchResult.name, population: fetchResult.population});
        }}>
            <Image 
              source={require('./assets/magnifying-glass.png')} 
              style={{flex: 1, width: '100%', aspectRatio: 1, margin: 10}}
            />
          </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
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

export default CountrySearchScreen;