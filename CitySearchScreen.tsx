import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View } from 'react-native';

const  CitySearchScreen = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'center',
    }}>
      <Text
        style={{
          flex: 1,
          marginTop: '15%',
          fontSize: 32
        }}
      >
        SEARCH BY CITY
      </Text>
      <View
        style={{
          flex: 2,
          alignSelf: 'stretch'
        }} 
      >
        <TextInput style={{
          height: 50,
          fontSize: 25,
          margin: 10,
          borderColor: '#fad',
          borderWidth: 2,
          borderRadius: 5,
          
        }}/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

export default CitySearchScreen;