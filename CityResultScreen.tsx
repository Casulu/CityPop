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
        <Text style={styles.popText}>
            {cityPop.population}
        </Text>
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

export default CityResultScreen;