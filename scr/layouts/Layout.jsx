import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Font } from 'react-native';


const MainLayout = ({ children }) => {
  // React.useEffect(() => {
  //   // Load the custom font
  //   (async () => {
  //     await Font.loadAsync({
  //       'Western': require('./fonts/Western.ttf'),
  //     });
  //   })();
  // }, []);
  

  return (
    <ImageBackground source={require('./assets/hangman-background.png')} style={styles.backgroundImage}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Wordily Guess</Text>
      </View>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  titleContainer: {
    paddingTop: 20, // Adjust as needed
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    fontFamily: 'Western', // Using Western font
    fontWeight: 'bold',
    color: '#8B4513', // Rustic brown color
  },
});

export default MainLayout;
