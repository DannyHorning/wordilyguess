import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/Layout';

const MainPage = () => {
  const handleStartGame = () => {
    // Logic for starting the game
    console.log('Start Game clicked');
  };

  const handleInstructions = () => {
    // Logic for displaying instructions
    console.log('Instructions clicked');
  };

  return (
    <MainLayout onStartGame={handleStartGame} onInstructions={handleInstructions}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main Content Here</Text>
      </View>
    </MainLayout>
  );
};

export default MainPage;
