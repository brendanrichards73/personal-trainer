import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4F5F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center',
    color: '#62ABAC',
    alignItems: 'center',
    fontFamily: 'Milote',
    fontSize: 35,
  },
});

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Fitness</Text>
    </View>
  );
};
