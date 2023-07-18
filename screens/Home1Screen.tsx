import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BrandsList from './BrandsList';
import WelcomeScreen from './WelcomeScreen';
const Stack = createNativeStackNavigator();

const Home1Screen = () => {
  return (
    <Stack.Navigator initialRouteName="brandslist">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="brandslist"
        component={BrandsList}
      />
    </Stack.Navigator>
  );
};

export default Home1Screen;

export const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 5,
  },
});
