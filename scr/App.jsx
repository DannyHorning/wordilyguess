// Importing necessary modules from React Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing the components for the main and instructions pages
import MainPage from './screens/MainPage';
import InstructionsPage from './screens/InstructionsPage';
=======
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './screens/MainPage';
import InstructionsPage from './screens/InstructionsPage';

const Stack = createStackNavigator();
>>>>>>> Stashed changes

// Creating a stack navigator
const Stack = createStackNavigator();

// Defining the main App component
const App = () => {
  return (
<<<<<<< Updated upstream
    // Wrapping the app inside NavigationContainer from React Navigation
    <NavigationContainer>
      {/* Setting up stack navigator */}
      <Stack.Navigator>
        {/* Defining the "Main" screen with MainPage component */}
        <Stack.Screen name="Main" component={MainPage} />
        {/* Defining the "Instructions" screen with InstructionsPage component */}
        <Stack.Screen name="Instructions" component={InstructionsPage} />
=======
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="InstructionsPage" component={InstructionsPage} options={{ title: 'Instructions' }} />
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exporting the App component as the default export
export default App;
