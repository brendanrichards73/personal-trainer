import axios from 'axios';
import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, ImageBackground} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {MessageContainer} from '../components/message-container';

const kettleBellImage = require('../images/kettlebell-image.jpeg');

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
    borderColor: 'white',
    marginVertical: 20,
    backgroundColor: 'grey',
    opacity: 0.8,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});

export const Profile = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const apiCallPost = async () => {
    try {
      const response = await axios.post(
        'https://ymwtnm8t5f.execute-api.us-east-1.amazonaws.com/prod/register',
        {text, password},
      );
      // TODO: display user message showing the status of their register.
      if (response.status === 201) {
        // console.log('created user');
        setMessage('Sign up successful!');
      }
      console.log('Status Code', response.status);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response.status === 400) {
        // console.log('user name already taken');
        setMessage('The user name is already in use.');
      }
      if (error.response.status === 503) {
        // console.log('something went wrong');
        setMessage('Something went wrong!');
      }
    }
  };

  const register = async () => {
    console.log('Entered text', text);
    console.log('Entered password', password);
    const result = await apiCallPost();
    console.log('Response =', result);
  };

  return (
    <ImageBackground
      source={kettleBellImage}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.text}>Register</Text>
        <View style={styles.loginContainer}>
          <TextInput
            placeholder="Name..."
            placeholderTextColor="white"
            style={styles.textInput}
            onChangeText={(newText) => setText(newText)}
          />
          <TextInput
            placeholder="Password..."
            placeholderTextColor="white"
            style={styles.textInput}
            secureTextEntry
            onChangeText={(newPassword) => setPassword(newPassword)}
          />
        </View>
        <Button title="Enter" onPress={register} />
        <MessageContainer message={message} />
      </View>
    </ImageBackground>
  );
};
