/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookList from './src/screens/BookList';
import SetSchedule from './src/screens/SetSchedule';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookList">
        <Stack.Screen name="BookList" component={BookList} options={{title: 'Book List'}} />
        <Stack.Screen name="SetSchedule" component={SetSchedule} options={{title: 'Set Pick Up Schedule'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
