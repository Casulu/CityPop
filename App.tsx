import * as React from 'react';
import HomeScreen from './HomeScreen';
import CitySearchScreen from './CitySearchScreen';
import CountrySearchScreen from './CountrySearchScreen';
import CityResultScreen from './CityResultScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//https://reactnavigation.org/docs/typescript/

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle: {backgroundColor: '#fff'},
        headerShadowVisible: false, 
        title: 'CityPop'}}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="CitySearch"
          component={CitySearchScreen}
        />
        <Stack.Screen
          name="CountrySearch"
          component={CountrySearchScreen}
        />
        <Stack.Screen
          name="CityResult"
          component={CityResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;