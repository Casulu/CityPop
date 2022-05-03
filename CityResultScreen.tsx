import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';

const  CityResultScreen = ({ navigation }) => {
  
  return (
    <View style={styles.topView}>
      <Text style={styles.mainText}>
        SEARCH BY 
        {'\n'}
        CITY
      </Text>
      
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
})

export default CityResultScreen;