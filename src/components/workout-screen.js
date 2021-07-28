import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {WorkoutCategory} from './workout-category';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const WorkoutScreen = (workouts) => {
  return (
    <View style={styles.container}>
      <WorkoutCategory workouts={workouts} />
    </View>
  );
};
