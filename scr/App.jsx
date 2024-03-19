

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './screens/MainPage';
import InstructionsPage from './screens/InstructionsPage';
import GamePage from './screens/GamePage';




// Creating a stack navigator
const Stack = createStackNavigator();

// Defining the main App component
const App = () => {
  return (
    // Wrapping the app inside NavigationContainer from React Navigation
    <NavigationContainer>

      {/* Setting up stack navigator */}
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Instructions" component={InstructionsPage} />
        <Stack.Screen name="Game" component={GamePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exporting the App component as the default export
export default App;
