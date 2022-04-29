import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>CityPop</Text>
      <View style={styles.homeButtonContainer}>
        <Button 
          onPress={() => console.log("Hej")} 
          title="SEARCH BY CITY"/>
        <Button 
          onPress={() => console.log("Hej")} 
          title="SEARCH BY COUNTRY"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  appTitle: {
    padding: 100,
    fontSize: 32
  },
  homeButtonContainer: {

  },
});
