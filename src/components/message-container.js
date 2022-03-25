import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// TODO: style the messageContainer and clear messages

const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: 20,
    backgroundColor: 'white',
  },
});

export const MessageContainer = ({message}) => {
  if (message === '') {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};
