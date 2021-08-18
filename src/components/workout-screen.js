import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getWorkouts} from '../api/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const WorkoutScreen = ({route}) => {
  const {workoutCategoryId} = route.params;
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    getWorkouts(workoutCategoryId).then((response) => {
      setExercises(response);
    });
  }, [workoutCategoryId]);

  console.log(workoutCategoryId);
  return (
    <View style={styles.container}>
      {exercises.map(({name}) => (
        <Text>{name}</Text>
      ))}
    </View>
  );
};
