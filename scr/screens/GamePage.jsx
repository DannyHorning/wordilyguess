import React from 'react';
import {Pressable, StyleSheet, Text, View, TextInput} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import hangmanWords from '../layouts/assets/hangmanWords.json';
import MainLayout from '../layouts/Layout';
import DisplayKeys from './DisplayKeys';
 
const GamePage = () => {
  const [value, setValue] = useState(''); // store the string of the word
  const [chars, setChars] = useState([]); // store the characters of the word
  const [gussedChar, setGussedChar] = useState([]); // store the guessed characters of the word
  const [life, setLife] = useState(6);
 
    useEffect(() => {
      setValue(getRandomWord({category: 'Animals'}));
    }, []);
 
  useEffect(() => {
    setChars(value.split(''));
  }, [value]);
 
  useEffect(() => {
    setGussedChar(Array.from({length: chars.length}, () => ' '));
  }, [chars]);
 
  const guessedWord = word => {
    if (chars.includes(word)) {
      const updatedChars = [...gussedChar];
 
      const indices = [];
      for (let i = 0; i < chars.length; i++) {
        if (chars[i] === word) {
          indices.push(i);
        }
      }
 
      indices.forEach(index => {
        updatedChars[index] = word;
      });
 
      setGussedChar(updatedChars);
    } else {
      setLife(prev => prev - 1);
    }
  };
  return (
    // for testing purpose adds life count and answer at the top
    <MainLayout>
      <View>
        <Text style={{fontSize: 20}}>{value}</Text>
        <Text style={{fontSize: 20}}>{life}</Text>
      </View>
 
      <View style={[styles.outer, { marginTop: '60%' }]}>
        <View style={styles.inner}>
          {gussedChar.map((guessChar, index) => (
            <Text key={index} style={styles.innerText}>
              {guessChar}
            </Text>
          ))}
        </View>
      </View>
 
      <View>
        <TextInput />
      </View>
      <View style={styles.outer}>
        <View style={styles.inner}>
          <DisplayKeys guessedWord={guessedWord} value={value} />
        </View>
      </View>
    </MainLayout>
  );
};
 
const getRandomWord = ({category}) => {
  const words = hangmanWords.filter(word => word.category === category);
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].word.toLowerCase();
};
 
const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  innerText: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'cyan',
    borderRadius: 2,
    borderBottomWidth: 10,
    borderColor: 'blue',
    margin:6,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
export {getRandomWord};
export default GamePage;
 