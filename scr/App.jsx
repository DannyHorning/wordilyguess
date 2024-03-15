/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  
  StyleSheet
} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainPage';
import InstructionsScreen from './screens/InstructionsPage';
import GamePage from './screens/GamePage';

function App() {
  // const Stack = createNativeStackNavigator();

  

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Instructions" component={InstructionsScreen} />
            <Stack.Screen name="GamePage" component={GamePage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({});


export default App;
