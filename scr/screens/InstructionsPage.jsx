<<<<<<< Updated upstream
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/Layout';

const InstructionsPage = () => {
  return (
    <MainLayout titleStyle={styles.titleText}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Enter a Letter to guess the word. You have 6 guesses to try and free the cowboy
        </Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 36, // Adjust as needed
    fontFamily: 'Western', // Assuming Western font is used in MainPage
    fontWeight: 'bold',
    color: '#8B4513' // Rustic brown color
  }
});

=======
// InstructionsPage

import React from 'react';
import { View, Text } from 'react-native';


const InstructionsPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Instructions Page</Text>
    </View>
  );
};

>>>>>>> Stashed changes
export default InstructionsPage;
