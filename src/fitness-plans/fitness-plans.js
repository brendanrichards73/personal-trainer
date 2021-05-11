import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {FitnessItem} from './fitness-item';
import {getExerciseTypes} from '../api/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const FitnessPlans = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    getExerciseTypes().then((response) => {
      setWorkouts(response);
    });
  }, []);
  return (
    <View style={styles.container}>
      {workouts.map(({id, name}) => (
        <FitnessItem key={id} workOutName={name} id={id} />
      ))}
    </View>
  );
};
