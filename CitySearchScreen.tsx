import * as React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';
import { useState } from 'react';
import { CityPopResult } from './GeoTypes';

const cityPopBaseUrl = "http://api.geonames.org/search?username=weknowit&type=json&featureClass=P&orderby=population&maxRows=1&name=";
const titleText = 'SEARCH BY\nCITY';

async function fetchCityInfo(searchTerm: String) : Promise<CityPopResult | null>{
  return axios(cityPopBaseUrl + searchTerm).then(response => {
    if(response.data.geonames.length === 0){
      throw new Error("No city was found using the given search term");
    }
    return response.data.geonames[0];
  });
}

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
          fetchCityInfo(searchInput).then(result => {
            setMainText(titleText);
            setError(null);
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