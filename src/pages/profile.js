import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {getUser} from '../api/api';

// create profile input to store in cloud.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Profile = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    getUser().then((response) => {
      setName(response.first_name);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};
