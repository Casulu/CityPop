import * as React from 'react';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//https://reactnavigation.org/docs/typescript/

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'CityPop' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;