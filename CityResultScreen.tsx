import * as React from 'react';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';
import { CityPopResult } from './GeoTypes';

const  CityResultScreen = ({ route }) => {

  const cityPop: CityPopResult = route.params.cityPop;

  return (
    <View style={{flex: 1}}>
      <View style={styles.topView}>
        <Text style={styles.mainText}>
            {cityPop.name.toUpperCase()}
        </Text>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.popView}>
          <Text style={{textAlign: 'center', fontSize: 15}}>POPULATION</Text>
          <Text style={styles.popText}>
            {cityPop.population}
          </Text>
        </View>
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
        alignItems: 'center',
      },
      popView: {
        margin: 10,
        borderRadius: 4,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fad'
      },
      popText: {
        textAlign: 'center',
        fontSize: 28,
        margin: 10,
        borderColor: '#fad',
      }
})

export default CityResultScreen;