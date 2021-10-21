import React, {useState} from 'react';
import {StyleSheet, Button, Alert, Text} from 'react-native';

const styles = StyleSheet.create({
  text: {
    paddingTop: 3,
    backgroundColor: 'red',
    color: 'black',
  },
});

export const WorkoutInfo = ({name, description}) => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <Button
        style={styles.text}
        title={name}
        onPress={() => {
          setShowText(!showText);
        }}
        color={'green'}
      />
      {showText && <Text>{description}</Text>}
    </>
  );
};
