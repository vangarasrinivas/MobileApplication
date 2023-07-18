import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SettingScreen from './SettingScreen';
import PrivacyScreen from './AboutScreen';
import CustomDrawer from './CustomDrawer';

export const ActivityScreen = () => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 40, fontWeight: 'bold', letterSpacing: 5}}>
        Activity
      </Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
        }}
        initialRouteName="Activity">
        <Drawer.Screen name="Activity" component={ActivityScreen} />
        <Drawer.Screen name="Privacy" component={PrivacyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
