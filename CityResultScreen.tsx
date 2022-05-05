import * as React from 'react';
import { StyleSheet, Text,  TextInput,  TouchableOpacity, View, Image } from 'react-native';

const  CityResultScreen = ({ route }) => {

  return (
    <View style={styles.topView}>
      <Text style={styles.mainText}>
          {route.params.name.toUpperCase()}
      </Text>
      <Text style={styles.mainText}>
          {route.params.population}
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