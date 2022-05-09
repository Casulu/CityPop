import * as React from 'react';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';
import { CityPopResult } from './GeoTypes';

const  CountryResultScreen = ({ navigation, route }) => {

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
            <TouchableOpacity key={city.geonameId} style={styles.cityView} onPress={() => {
              navigation.navigate('CityResult', {cityPop: city})
            }}>
              <Text style={styles.cityText} >{city.name.toUpperCase()}</Text>
            </TouchableOpacity>
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
        flex: 2,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        paddingBottom: 20
      },
      cityView: {
        flex: 1, 
        backgroundColor: '#fad', 
        borderRadius: 4,
        margin: 10, 
        height: 1, 
        alignContent: 'center', 
        justifyContent: 'center'
      },
      cityText: {
        fontSize: 15,
        textAlign: 'center'
      }
})

export default CountryResultScreen;