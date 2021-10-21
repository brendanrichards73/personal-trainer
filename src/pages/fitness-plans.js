import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, StyleSheet, Button} from 'react-native';
import {getExerciseTypes} from '../api/api';
import {WorkoutScreen} from '../components/workout-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: 50,
    marginVertical: 50,
  },
  button: {
    width: 300,
  },
});

const FitnessPlansStack = createStackNavigator();

export const FitnessPlansStackScreen = () => {
  return (
    <FitnessPlansStack.Navigator>
      <FitnessPlansStack.Screen name="FitnessPlans" component={FitnessPlans} />
      <FitnessPlansStack.Screen
        name="WorkoutScreen"
        component={WorkoutScreen}
      />
    </FitnessPlansStack.Navigator>
  );
};

export const FitnessPlans = ({navigation}) => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    getExerciseTypes().then((response) => {
      setWorkouts(response);
    });
  }, []);
  return (
    <View style={styles.container}>
      {workouts.map(({id, name}) => (
        <Button
          title={name}
          style={styles.button}
          onPress={() =>
            navigation.navigate('WorkoutScreen', {workoutCategoryId: id})
          }
        />
      ))}
    </View>
  );
};
