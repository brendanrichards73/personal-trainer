import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {removeHTML} from '../api/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    width: 300,
    backgroundColor: '#d3d3d3',
  },
  text: {
    paddingTop: 3,
    justifyContent: 'center',
  },
  descriptionText: {
    padding: 10,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#808080',
  },
});

export const WorkoutInfo = ({name, description, showText, onPress}) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.text}
        title={name}
        color="#808080"
        onPress={onPress}
      />
      {showText && (
        <Text style={styles.descriptionText}>{removeHTML(description)}</Text>
      )}
    </View>
  );
};
