
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';

const  CountrySearchScreen = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'center',
    }}>
      <Text>City</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default CountrySearchScreen;