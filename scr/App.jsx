import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MainPage from './screens/MainPage';
import GamePage from './screens/GamePage';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GamePage />
    </SafeAreaView>
  );
}

export default App;
