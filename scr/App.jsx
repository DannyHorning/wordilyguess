
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing the components for the main and instructions pages
import MainPage from './screens/MainPage';
import InstructionsPage from './screens/InstructionsPage';

// Creating a stack navigator
const Stack = createStackNavigator();

// Defining the main App component
const App = () => {
  return (
    // Wrapping the app inside NavigationContainer from React Navigation
    <NavigationContainer>
      {/* Setting up stack navigator */}
      <Stack.Navigator>
        {/* Defining the "Main" screen with MainPage component */}
        <Stack.Screen name="Main" component={MainPage} />
        {/* Defining the "Instructions" screen with InstructionsPage component */}
        <Stack.Screen name="Instructions" component={InstructionsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exporting the App component as the default export
export default App;
