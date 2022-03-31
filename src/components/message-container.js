import React from 'react';
import {Text, View} from 'react-native';

// TODO: style the messageContainer and clear messages

const styles = (backgroundColor) => ({
  container: {
    marginTop: 5,
    justifyContent: 'center',
    padding: 10,
    width: '75%',
    height: '15%',
    backgroundColor: `${backgroundColor}`,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export const MessageContainer = ({message, backgroundColor}) => {
  console.log('backgroundColor', backgroundColor);
  if (message === '') {
    return null;
  }
  return (
    <View style={[styles(backgroundColor).container]}>
      <Text style={[styles().text]}>{message}</Text>
    </View>
  );
};
