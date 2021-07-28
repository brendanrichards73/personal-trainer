import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {FitnessItem} from '../fitness-plans/fitness-item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Workouts = (workouts) => {
  return (
    <View style={styles.container}>
      <FitnessItem workouts={workouts} />
    </View>
  );
};
