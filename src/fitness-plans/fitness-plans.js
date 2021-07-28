import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, StyleSheet, Button} from 'react-native';
import {FitnessItem} from './fitness-item';
import {getExerciseTypes} from '../api/api';
import {Workouts} from '../workouts/workouts';

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
      <FitnessPlansStack.Screen name="Workouts" component={Workouts} />
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
          onPress={() => navigation.navigate('Workouts')}>
          <FitnessItem key={id} workOutName={name} id={id} />
        </Button>
      ))}
    </View>
  );
};
