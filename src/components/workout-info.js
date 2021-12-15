import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {removeHTML} from '../api/utils';

const styles = StyleSheet.create({
  comntainer: {
    justifyContent: 'space-around',
  },
  text: {
    paddingTop: 3,
    backgroundColor: 'red',
    color: 'black',
  },
});

export const WorkoutInfo = ({name, description, showText, onPress}) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.text}
        title={name}
        onPress={onPress}
        // color={'green'}
      />
      {showText && <Text>{removeHTML(description)}</Text>}
    </View>
  );
};
