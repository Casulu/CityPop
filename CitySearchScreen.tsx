import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';

const  CitySearchScreen = ({ navigation }) => {
  return (
    <View>
      <Text>City</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default CitySearchScreen;