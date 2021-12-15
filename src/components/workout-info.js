import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {removeHTML} from '../api/utils';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 300,
  },
  text: {
    paddingTop: 3,
    justifyContent: 'center',
  },
  descriptionText: {
    fontWeight: 'bold',
  },
});

export const WorkoutInfo = ({name, description, showText, onPress}) => {
  return (
    <View style={styles.container}>
      <Button style={styles.text} title={name} onPress={onPress} />
      {showText && (
        <Text style={styles.descriptionText}>{removeHTML(description)}</Text>
      )}
    </View>
  );
};
