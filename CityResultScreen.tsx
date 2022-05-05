import * as React from 'react';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';

const  CityResultScreen = ({ route }) => {

  return (
    <View style={{flex: 1}}>
      <View style={styles.topView}>
        <Text style={styles.mainText}>
            {route.params.name.toUpperCase()}
        </Text>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.popText}>
            {route.params.population}
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
        borderColor: '#fad',
      },
      popText: {
        fontSize: 28,
        margin: 10
      }
})

export default CityResultScreen;