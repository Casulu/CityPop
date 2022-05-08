import * as React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';
import { useState } from 'react';
import { CountryListResult } from './GeoTypes';

const countryCodeBaseUrl = "http://api.geonames.org/search?username=weknowit&type=json&maxRows=5&featureCode=PCLI&q=";
const biasedCitySearchBaseUrl= "api.geonames.org/search?username=weknowit&type=json&featureClass=P&maxRows=5&orderby=population&countryBias=";
const titleText = 'SEARCH BY\nCOUNTRY';

async function fetchCountryCode(searchTerm: String) : Promise<String>{
  return axios(countryCodeBaseUrl + searchTerm).then(response => response.data.geonames[0]);
}

async function fetchCityList(countryCode: String) : Promise<CountryListResult>{
  return axios(biasedCitySearchBaseUrl + countryCode).then(response => response.data.geonames[0]);
}

const  CountrySearchScreen = ({ navigation }) => {
  const [mainText, setMainText] = useState(titleText);
  const [searchInput, setSearchInput] = useState('');

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
          setMainText("LOADING");
          var countryCode: String = await fetchCountryCode(searchInput);
          var cities: CountryListResult = await fetchCityList(countryCode);
          setMainText(titleText);
          navigation.navigate('CountryResult', cities);
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