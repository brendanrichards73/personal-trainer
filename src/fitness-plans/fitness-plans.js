import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const FitnessPlans = () => {
  return (
    <View style={styles.container}>
      <Text>Fitness Plans</Text>
    </View>
  );
};
