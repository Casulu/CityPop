import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>CityPop</Text>
      <View style={styles.homeButtonContainer}>
        <TouchableOpacity 
          onPress={() => console.log("Hej")}
          style={styles.touchables}
        >
            <Text>SEARCH BY CITY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Hej")}
          style={styles.touchables}
        >
          <Text>SEARCH BY COUNTRY</Text>
        </TouchableOpacity>
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
    flex: 1,
    paddingTop: 120,
    fontSize: 32
    
  },
  homeButtonContainer: {
    flex: 2,
    alignSelf: 'stretch',
  },
  touchables: {
    backgroundColor: '#fad',
    borderRadius: 3,
    padding: 20,
    margin: 2,
    marginBottom: 5,
    marginTop: 5,
  }
});