import axios from 'axios';
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

  const apiCallPost = async () => {
    const response = await axios.post(
      'https://ymwtnm8t5f.execute-api.us-east-1.amazonaws.com/prod/register',
    );
    return response.data;
  };

  const register = async () => {
    console.log('Entered text', text);
    console.log('Entered password', password);
    const result = await apiCallPost();
    console.log('Response =', result);
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
