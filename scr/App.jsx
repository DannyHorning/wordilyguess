import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MainPage from './screens/MainPage';
import GamePage from './screens/GamePage';
import CategoryScreen from './screens/CategoryScreen';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GamePage />
    </SafeAreaView>
  );
}

export default App;
