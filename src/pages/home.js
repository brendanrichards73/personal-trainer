import * as React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

const handsClappingImage = require('../images/Hands-Clapping-Chaulk-Kettlebell.jpeg');

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontFamily: 'Milote',
    fontSize: 45,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.4,
  },
});

export const Home = () => {
  return (
    <>
      <ImageBackground
        source={handsClappingImage}
        resizeMode="cover"
        style={styles.image}>
        <View>
          <Text style={styles.text}>MiFitness</Text>
        </View>
      </ImageBackground>
    </>
  );
};
