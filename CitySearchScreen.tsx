import * as React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';
import { useState } from 'react';
import { CityPopResult } from './GeoTypes';

//The url used for the api request. Searches by name and returns 1 result in JSON format
//Only searches for cities orders by population to avoid some cities appearing multiple times
//  but without population counts on some results
const cityPopBaseUrl = "http://api.geonames.org/search?username=weknowit&type=json&featureClass=P&orderby=population&maxRows=1&name=";
const titleText = 'SEARCH BY\nCITY';

/**
 * Makes a request to the geonames api for information about a city wuth the given
 * search term as a name. Only fetches the result considered most appropriate by
 * geonames.
 * @param searchTerm THe term to use in the search
 * @returns A promise containing a CityPopResult
 */
async function fetchCityInfo(searchTerm: String) : Promise<CityPopResult>{
  return axios(cityPopBaseUrl + searchTerm).then(response => {
    if(response.data.geonames.length === 0){ //If no results are returned
      throw new Error("No city was found using the given search term");
    }
    return response.data.geonames[0]; //Return first and only result
  });
}

/**
 * The screen for searching a city's poylation. Links to the city result screen and
 * uses the navigation stack to return to the home screen.
 * @param param0 Uses the navigation prop from react navigation to navigate
 * to the result screen
 * @returns The city search screen hook
 */
const  CitySearchScreen = ({ navigation }) => {
  const [mainText, setMainText] = useState(titleText);
  const [searchInput, setSearchInput] = useState('');
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [error, setError] = useState(null);

  return (
    <View style={styles.topView}>
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
        <TouchableOpacity style={{...styles.searchButton, backgroundColor: searchEnabled ? '#fad' : '#ccc'}} 
        disabled={!searchEnabled} 
        onPress={async () => {
          //On press: fetch population of entered city and navigate to the next screen
          //and send information along
          setMainText("LOADING");
          fetchCityInfo(searchInput).then(result => {
            setMainText(titleText); //Remove "LOADING" text on fetch completion
            setError(null);
            //Navigate to the result screen using the fetch results
            navigation.navigate('CityResult', {cityPop: result});
          }).catch(error => {
            setError(error.message);
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
  topView: {
    flex: 1,
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