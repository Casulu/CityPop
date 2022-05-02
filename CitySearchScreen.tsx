import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';

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
          fontSize: 32,
          textAlign: 'center'
        }}
      >
        SEARCH BY 
        {'\n'}
        CITY
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
        }}/
        >
      </View>
      <View onTouchEnd={()=>{}} 
          style={{
            backgroundColor: '#fad',
            width: 50,
            height: 50,
            borderRadius: 25,
            alignContent: 'center',
            justifyContent: 'center'
        }}>
          <Image source={require('./assets/magnifying-glass.png')} style={{flex: 1, width: 20, height: 20}}/>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default CitySearchScreen;