import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Home} from './src/pages/home';
import {FitnessPlansStackScreen} from './src/pages/fitness-plans';
import {Settings} from './src/pages/settings';
import {Profile} from './src/pages/profile';

const Tab = createBottomTabNavigator();

const dependencies = {
  Ionicons,
};

export default function App({deps = dependencies}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            }
            if (route.name === 'FitnessPlans') {
              iconName = focused ? 'ios-fitness' : 'ios-fitness';
            }
            if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person';
            }
            if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }

            return <deps.Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="FitnessPlans" component={FitnessPlansStackScreen} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
