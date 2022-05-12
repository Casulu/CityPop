import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,  } from 'react-native';
import { CityPopResult } from './GeoTypes';
import { common } from './CommonStyles';

/**
 * The screen which displays a countries top 3 populated cities. Links to the city result
 * screen through each city button and uses the navigation stack to return to the search screen.
 * @param param0 Uses the navigation prop and the route prop from react navigate
 * to both link to the city result screen and for retrieving paramaters from the cuontry
 * search screen
 * @returns The coutnry result hook
 */
const  CountryResultScreen = ({ navigation, route }) => {

  const cityList: CityPopResult[] = route.params.searchResult;
  const countryName: String = route.params.searchTerm;

  return (
    <View style={{flex: 1}}>
      <View style={styles.topView}>
        <Text style={common.titleText}>
            {countryName.toUpperCase()}
        </Text>
      </View>
      <View style={styles.bottomView}>
        {/* Creates a touchable for each city which each links to the city result screen */}
        { cityList.map((city: CityPopResult) => {
          return (
            <TouchableOpacity key={city.geonameId} style={{...common.button, flex: 1}} onPress={() => {
              navigation.navigate('CityResult', {cityPop: city})
            }}>
              <Text style={common.buttonText} >{city.name.toUpperCase()}</Text>
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
      bottomView: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        paddingBottom: '40%'
      }
})

export default CountryResultScreen;