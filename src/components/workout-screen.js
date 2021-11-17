import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {getWorkouts} from '../api/api';
import {WorkoutInfo} from './workout-info';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: 20,
    paddingVertical: 10,
  },
});

export const WorkoutScreen = ({route}) => {
  const {workoutCategoryId} = route.params;
  const [exercises, setExercises] = useState([]);
  const [currentlySelectedWorkout, setCurrentlySelectedWorkout] = useState('');
  useEffect(() => {
    getWorkouts(workoutCategoryId).then((response) => {
      setExercises(response);
    });
  }, [workoutCategoryId]);

  const showDescription = (name) => {
    currentlySelectedWorkout === name
      ? setCurrentlySelectedWorkout('')
      : setCurrentlySelectedWorkout(name);
  };

  console.log(currentlySelectedWorkout);
  return (
    <View style={styles.container}>
      <ScrollView>
        {exercises.map(({name, description}) => (
          <WorkoutInfo
            name={name}
            description={description}
            showText={currentlySelectedWorkout === name}
            onPress={() => showDescription(name)}
          />
        ))}
      </ScrollView>
    </View>
  );
};
