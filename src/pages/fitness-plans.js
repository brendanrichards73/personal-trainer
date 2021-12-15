import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getExerciseTypes} from '../api/api';
import {WorkoutScreen} from '../components/workout-screen';

const image = require('../images/dumbell-image.jpg');

const styles = StyleSheet.create({
  workoutCategory: {
    flex: 1,
  },
  workoutCategoryName: {
    margin: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.5,
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
    <View style={styles.workoutCategory}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {workouts.map(({id, name}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('WorkoutScreen', {workoutCategoryId: id})
            }>
            <Text style={styles.workoutCategoryName}>{name}</Text>
          </TouchableOpacity>
        ))}
      </ImageBackground>
    </View>
  );
};
