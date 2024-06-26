import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import hangmanWords from '../layouts/assets/hangmanWords.json';
import MainLayout from '../layouts/Layout';
import DisplayKeys from './DisplayKeys';


const GamePage = ({route}) => {
  const {category} = route.params;
  const maxLives = 6;

  const [selectedCategory, setSelectedCategory] = useState(category); // store the selected category
  const [value, setValue] = useState(''); // store the string of the word
  const [chars, setChars] = useState([]); // store the characters of the word
  const [guessedChar, setGuessedChar] = useState([]); // store the guessed characters of the word
  const [life, setLife] = useState(maxLives); // store the life count

  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  useEffect(() => {
    setValue(getRandomWord(category));
  }, [category]);

  useEffect(() => {
    setChars(value.split(''));
  }, [value]);

  useEffect(() => {
    const initialGuessedChars = value.split('').map(char => {
      return char === ' ' ? ' ' : null; 
    });
    setGuessedChar(initialGuessedChars);
  }, [value]);

  const hangmanImages = [
    require('../layouts/assets/cowboy-head.png'),
    require('../layouts/assets/cowboy-body.png'),
    require('../layouts/assets/cowboy-arm1.png'),
    require('../layouts/assets/cowboy-arm2.png'),
    require('../layouts/assets/cowboy-leg2.png'),
    require('../layouts/assets/cowboy-leg.png'),
  ];

  const handleGameEnd = () => {
    if (life <= 0) {
      return (
        <View>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              opacity: 1,
              color: 'white',
              textShadowColor: 'black',
              textShadowOffset: {width: 3, height: 3},
              textShadowRadius: 2,
            }}>
            You Lost
          </Text>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'cornflowerblue' : 'darkblue',
                padding: 10,
                borderRadius: 8,
              },
              styles.button,
            ]}
            onPress={() => {
              setValue(getRandomWord(selectedCategory));
              setLife(6);
            }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              Play Again
            </Text>
          </Pressable>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Math.min(25, 500 / value.length),
              fontWeight: 'bold',
              opacity: 1,
              color: 'white',
              textShadowColor: 'black',
              textShadowOffset: {width: 3, height: 3},
              textShadowRadius: 2,
            }}>
            {value}
          </Text>
        </View>
      );
    } else if (guessedChar.join('') === value) {
      return (
        <View>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              opacity: 1,
              color: 'white',
              textShadowColor: 'black',
              textShadowOffset: {width: 3, height: 3},
              textShadowRadius: 2,
            }}>
            You Won
          </Text>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'cornflowerblue' : 'darkblue',
                padding: 10,
                borderRadius: 8,
              },
              styles.button,
            ]}
            onPress={() => {
              setValue(getRandomWord(selectedCategory));
              setLife(6);
            }}>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              Play Again
            </Text>
          </Pressable>
        </View>
      );
    }
  };

  const guessedWord = word => {
    if (chars.includes(word)) {
      const updatedChars = [...guessedChar];

      const indices = [];
      for (let i = 0; i < chars.length; i++) {
        if (chars[i] === word) {
          indices.push(i);
        }
      }

      indices.forEach(index => {
        updatedChars[index] = word;
      });

      setGuessedChar(updatedChars);
    } else {
      setLife(prev => prev - 1);
    }
  };


  const renderGuessedCharacters = () => {
    const guessedCharacters = guessedChar.map((guessChar, index) => {
      if (guessChar === ' ') {
        return <Text key={index} style={styles.space}>{guessChar}</Text>; // Render space
      } else if (guessChar === '') {
        return null; // Skip rendering for null values
      } else {
        return <Text key={index} style={styles.innerText}>{guessChar}</Text>; // Render character
      }
    });
  
    const lines = [];
    let line = [];
    guessedCharacters.forEach((char, index) => {
      if (char === null || char.props.children === ' ') {
        lines.push(<View key={index} style={{ flexDirection: 'row' }}>{line}</View>);
        line = [];
      } else {
        line.push(char);
      }
    });
  
    if (line.length > 0) {
      lines.push(<View key={guessedCharacters.length} style={{ flexDirection: 'row' }}>{line}</View>);
    }
  
    // Add space between words
    const spacedLines = lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <Text style={styles.space}> </Text>
      </React.Fragment>
    ));
  
    return spacedLines;
  };
  
  
  
  return (
    <MainLayout>
      <View style={{position: 'relative', flex: 1}}>
        <View>
          <Text style={{fontSize: 20}}>{value}</Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '20%',
            left: '38%',
            transform: [{translateX: -50}, {translateY: -50}],
            zIndex: 1,
          }}>
          {handleGameEnd()}
        </View>

        <View style={{ position: 'absolute', top: '3%', right: '-11%', zIndex: 0 }}>
          <Image source = {require('../layouts/assets/Gallows-shadow.png')} style={{ width: 600, height: 600 }} />
        </View>
        <View style={{ position: 'absolute', top: '1%', right: '-11%', zIndex: 0 }}>
          <Image source = {require('../layouts/assets/Gallows-shadow2.png')} style={{ width: 600, height: 600 }} />
        </View>
        
        <View 
        style= {{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: '-26%',
          top: '17%',
          transform: [{translateX: -50}, {translateY: -50}],
          position: 'absolute',
        
        }}>
          <Image
            source={require('../layouts/assets/Gallows.png')}
            style={{
              width: 600, height: 600
            }}
          />
        </View>
        

        {Array.from({length: maxLives - life}, (_, index) => (
          <View
            key={index}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: '-5%',
              left: '25%',
              transform: [{translateX: -50}, {translateY: -50}],
            }}>
            <Image
              source={hangmanImages[index]}
              style={{width: 600, height: 600}}
            />
          </View>
        ))}

        <View style={[styles.outer, {marginTop: '40%'}]}>
          <View style={[styles.container, {flexDirection: 'column'}]}>
            <View style={styles.inner}>{renderGuessedCharacters()}</View>
          </View>
        </View>

        {life > 0 && guessedChar.join('') !== value && (
          <View style={styles.outer}>
            <View style={styles.inner}>
              <DisplayKeys guessedWord={guessedWord} value={value} />
            </View>
          </View>
        )}
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
    color: 'white',
    borderRadius: 2,
    borderBottomWidth: 10,
    borderColor: 'white',
    margin: 6,
    paddingLeft: 5,
    paddingRight: 5,
    minWidth: 25,
  },
  space: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    margin: 6,
  },
});
export {getRandomWord};
export default GamePage;
