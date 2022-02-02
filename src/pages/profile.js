import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

// create profile input to store in cloud.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: 200,
    height: 100,
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 20,
  },
});

export const Profile = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const register = () => {
    console.log('Entered text', text);
    console.log('Entered password', password);
  };

  return (
    <View style={styles.container}>
      <Text fontFamily="Cochin">Register</Text>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="Name"
          fontFamily="Cochin"
          onChangeText={(newText) => setText(newText)}
        />
        <TextInput
          placeholder="Password"
          fontFamily="Cochin"
          secureTextEntry
          onChangeText={(newPassword) => setPassword(newPassword)}
        />
      </View>
      <Button title="Enter" onPress={register} />
    </View>
  );
};
