import * as React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,  TouchableOpacity, View, Image} from 'react-native';
import { useState } from 'react';
import { CityPopResult, CountryLookupResult } from './GeoTypes';

//Base api url for checking if a search term can be interpreted as a valid country. Only fetches
//the best result
const countryCodeBaseUrl = "http://api.geonames.org/search?username=weknowit&type=json&maxRows=1&featureCode=PCLI&q=";
//Base api url for finding a given country's most ppulated cities. Sorts results by population and 
//displays given country codes cities first
const biasedCitySearchBaseUrl= "http://api.geonames.org/search?username=weknowit&type=json&featureClass=P&maxRows=3&orderby=population&countryBias=";
const titleText = 'SEARCH BY\nCOUNTRY';

/**
 * Fetches the name and country code which best matches the search term given.
 * @param searchTerm The term to search using
 * @returns A promise containing a CoutnryLookupResult
 */
async function fetchCountryCode(searchTerm: String) : Promise<CountryLookupResult>{
  return axios(countryCodeBaseUrl + searchTerm).then(response => {
    if(response.data.geonames.length === 0){
      throw new Error("No country was found using the given search term");
    }
    return response.data.geonames[0];
  });
}

/**
 * Fetches the top 3 most populated cities in the country with the given
 * country code.
 * @param countryCode The country code of the country to search in
 * @returns A promise containing a list of up to 3 CityPopResults
 */
async function fetchCityList(countryCode: String) : Promise<CityPopResult[]>{
  return axios(biasedCitySearchBaseUrl + countryCode).then(response => {
    if(response.data.geonames.length === 0){ //If no results are returned
      throw new Error("No cities were found for the given country");
    }
    return response.data.geonames;
  });
}

/**
 * The screen for searching for a countries most populated cities. Links to the country 
 * result screen and uses the navigation stack to return to the home screen.
 * @param param0 Uses the navigation prop from react navigation to navigate
 * to the result screen
 * @returns The country search screen hook
 */
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
      {/* Displays error text if an error is present */}
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
          //First fetches the country code
          fetchCountryCode(searchInput).then(codeRes => {
            //If a country code is found then it is used to fetch a list of cities
            fetchCityList(codeRes.countryCode).then(cities => {
              setMainText(titleText);
              setError(null);
              //Navigate to the result screen using the fetch results
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
    borderRadius: 4,
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