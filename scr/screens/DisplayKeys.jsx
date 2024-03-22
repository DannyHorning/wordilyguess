import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useEffect} from 'react';
const DisplayKeys = ({guessedWord, value}) => {
  const [text, setText] = React.useState([]);
 
  useEffect(() => {
    setText([
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      '.',
    ]);
  }, [value]);
 
  const handleDeleteItem = index => {
    const newText = [...text];
    newText.splice(index, 1);
    setText(newText);
  };
 
  return text.map((letter, index) => {
    return (
      <Pressable
        key={index}
        style={styles.key}
        onPress={() => {
          guessedWord(letter);
          handleDeleteItem(index);
        }}>
        <Text style={styles.keyText}>{letter}</Text>
      </Pressable>
    );
  });
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
  keyText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
 
export default DisplayKeys;