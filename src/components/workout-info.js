import React, {useState} from 'react';
import {StyleSheet, Button, Alert, Text} from 'react-native';
import {removeHTML} from '../api/utils';

const styles = StyleSheet.create({
  text: {
    paddingTop: 3,
    backgroundColor: 'red',
    color: 'black',
  },
});

export const WorkoutInfo = ({name, description, showText, onPress}) => {
  return (
    <>
      <Button
        style={styles.text}
        title={name}
        onPress={onPress}
        color={'green'}
      />
      {showText && <Text>{removeHTML(description)}</Text>}
    </>
  );
};
