import * as React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, TextInput,  TouchableOpacity, View, Image, Modal } from 'react-native';
import { useState } from 'react';
import { CityPopResult, CountryLookupResult } from './GeoTypes';

const countryCodeBaseUrl = "http://api.geonames.org/search?username=weknowit&type=json&maxRows=3&featureCode=PCLI&q=";
const biasedCitySearchBaseUrl= "http://api.geonames.org/search?username=weknowit&type=json&featureClass=P&maxRows=5&orderby=population&countryBias=";
const titleText = 'SEARCH BY\nCOUNTRY';

async function fetchCountryCode(searchTerm: String) : Promise<CountryLookupResult>{
  return axios(countryCodeBaseUrl + searchTerm).then(response => {
    if(response.data.geonames.length === 0){
      throw new Error("No country was found");
    }
    return response.data.geonames[0];
  });
}

async function fetchCityList(countryCode: String) : Promise<CityPopResult[]>{
  return axios(biasedCitySearchBaseUrl + countryCode).then(response => {
    if(response.data.geonames.length === 0){
      throw new Error("No cities were found for the given country");
    }
    return response.data.geonames;
  });
}

const  CountrySearchScreen = ({ navigation }) => {
  const [mainText, setMainText] = useState(titleText);
  const [searchInput, setSearchInput] = useState('');
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [error, setError] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        {mainText}
      </Text>
      {error !== null && <Text>
        {error}
      </Text>}
      <View style={{flex: 2, alignSelf: 'stretch'}}>
        <View style={styles.inputView}>
          <TextInput style={styles.input} onChangeText={text => {
            if(text.length > 0) setSearchEnabled(true);
            else setSearchEnabled(false);
            setSearchInput(text);
          }}/>
        </View>
        <TouchableOpacity style={{...styles.searchButton, backgroundColor: searchEnabled ? '#fad' : '#ccc'}} disabled={!searchEnabled} onPress={async () => {
          setMainText("LOADING");
          fetchCountryCode(searchInput).then(codeRes => {
            fetchCityList(codeRes.countryCode).then(cities => {
              setMainText(titleText);
              setError(null);
              navigation.navigate('CountryResult', {searchTerm: codeRes.name, searchResult: cities})
            }).catch(citiesError => {
              setError(citiesError.message);
              setMainText(titleText);
            })
          }).catch(codeError => {
            setError(codeError.message);
            setMainText(titleText);
          });
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
  container: {
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
    borderRadius: 25,
  }
})

export default CountrySearchScreen;