import * as React from 'react';
import HomeScreen from './HomeScreen';
import CitySearchScreen from './CitySearchScreen';
import CountrySearchScreen from './CountrySearchScreen';
import CityResultScreen from './CityResultScreen';
import CountryResultScreen from './CountryResultScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


/**
 * Entry point for the react app. Defines all screens in the app along with each
 * screens displayed title for the navigation bar.
 * @returns Top component for the app
 */
const App = () => {

  return (
    <NavigationContainer>
      {/*Changes background color and shadow style to match the wireframe design*/}
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
        <Stack.Screen
          name="CountryResult"
          component={CountryResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;