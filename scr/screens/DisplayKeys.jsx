import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const DisplayKeys = ({ guessedWord, value }) => {
  const [text, setText] = useState([]);

  useEffect(() => {
    setText([
      'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
      'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
      'z', 'x', 'c', 'v', 'b', 'n', 'm', '.'
    ]);
  }, [value]);

  const handleDeleteItem = index => {
    setText(prevText => {
      const newText = [...prevText];
      newText[index] = ''; // Replace deleted key with empty space
      return newText;
    });
    guessedWord(text[index]); // Pass the deleted letter to guessedWord
  };

  return text.map((letter, index) => (
    <Pressable
      key={index}
      style={letter ? styles.key : styles.emptyKey}
      onPress={() => letter && handleDeleteItem(index)}
    >
      {letter.split('').map((char, idx) => ( // Split letter into characters and map over them
        <Text key={idx} style={styles.keyText}>{char}</Text> // Render each character within a Text component
      ))}
    </Pressable>
  ));
};

const styles = StyleSheet.create({
  key: {
    padding: 10,
    margin: 3.5,
    backgroundColor: '#6A5ACD',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  emptyKey: {
    width: 30, // Width for the gap
    margin: 3.5,
  },
  keyText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default DisplayKeys;
