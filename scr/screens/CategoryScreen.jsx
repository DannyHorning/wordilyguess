import React from 'react';
import {Pressable, StyleSheet, Text, View, TextInput} from 'react-native';
import MainLayout from '../layouts/Layout';
import {getRandomWord} from './GamePage';
 
const CategoryScreen = () => {
  const value = [
    'Famous People',
    'Animals',
    'Common Phrases',
    'Household Items',
  ];
  return (
    <MainLayout>
      {value.map((value, key) => (
        <Pressable
          key={key}
          style={styles.outer}
          onPress={() => {
            getRandomWord({category: value});
          }}>
          <Text style={styles.inner}>{value}</Text>
        </Pressable>
      ))}
    </MainLayout>
  );
};
 
const styles = StyleSheet.create({
  inner: {
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    textDecorationLine: 'underline',
    textShadowColor: 'green',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 5,
  },
  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 
export default CategoryScreen;