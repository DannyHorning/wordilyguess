
// MainPage.jsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainLayout from '../layouts/Layout';

const MainPage = () => {
  const navigation = useNavigation();

  const handleStartGame = () => {
    // Logic for starting the game
    navigation.navigate('Category');
  };

  const handleInstructions = () => {
    // Navigate to InstructionsPage
    navigation.navigate('Instructions');
  };

  return (
    <MainLayout onStartGame={handleStartGame} onInstructions={handleInstructions}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%', alignItems: 'center', marginBottom: '33%' }}>
        <TouchableOpacity onPress={handleStartGame}>
          <Text style={{ color: 'white', fontSize: 40, fontFamily: 'Western', fontWeight: 'bold' }}>Start Game</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstructions} style={{ marginTop: 10 }}>
          <Text style={{ color: 'white', fontSize: 40, fontFamily: 'Western', fontWeight: 'bold' }}>Instructions</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default MainPage;
