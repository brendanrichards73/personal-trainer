import * as React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

const handsClappingImage = require('../images/Hands-Clapping-Chaulk-Kettlebell.jpeg');

const styles = StyleSheet.create({
  text: {
    paddingLeft: 20,
    color: 'white',
    fontFamily: 'Milote',
    fontSize: 45,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // opacity: 0.5,
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
