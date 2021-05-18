import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {getWorkouts} from '../api/api';

export const FitnessItem = ({workOutName, id}) => {
  const [exercises, setExercises] = useState([]);
  const clickHandler = () => {
    getWorkouts(id).then((response) => {
      setExercises(response);
      console.log('I am workout', response);
    });
    console.log('I have been clicked with id', id);
  };
  return (
    <>
      <TouchableOpacity onPress={clickHandler}>
        <Text>{workOutName}</Text>
      </TouchableOpacity>
      {exercises.map(({name}) => (
        <Text>{name}</Text>
      ))}
    </>
  );
};
