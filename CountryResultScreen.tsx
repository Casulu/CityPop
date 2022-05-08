import * as React from 'react';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';
import { CityPopResult } from './GeoTypes';

const  CountryResultScreen = ({ route }) => {

  const cityList: CityPopResult[] = route.params.searchResult;
  const countryName: String = route.params.searchTerm;

  return (
    <View style={{flex: 1}}>
      <View style={styles.topView}>
        <Text style={styles.mainText}>
            {countryName.toUpperCase()}
        </Text>
      </View>
      <View style={styles.bottomView}>
        { cityList.map((city: CityPopResult) => {
          return (
            <Text key={city.geonameId} style={styles.popText} >{city.name.toUpperCase()}</Text>
          )
        })}
      </View>
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
      bottomView: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      popText: {
        fontSize: 28,
        margin: 10,
        borderColor: '#fad',
      }
})

export default CountryResultScreen;