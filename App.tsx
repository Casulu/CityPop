import * as React from 'react';
import HomeScreen from './HomeScreen';
import CitySearchScreen from './CitySearchScreen';
import CountrySearchScreen from './CountrySearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//https://reactnavigation.org/docs/typescript/

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#fff'} ,headerShadowVisible: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="CitySearch"
          component={CitySearchScreen}
          options={{title: 'CityPop'}}
        />
        <Stack.Screen
          name="CountrySearch"
          component={CountrySearchScreen}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;