import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SettingScreen from './SettingScreen';
import CustomDrawer from './CustomDrawer';
import Ionic from 'react-native-vector-icons/Ionicons';
import MessagesScreen from './MessagesScreen';
import AboutScreen from './AboutScreen';
import Register from './Register';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerShown: true,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}
        initialRouteName="Settings">
        <Drawer.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionic name="settings-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionic name="chatbox-ellipses-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionic name="person-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => (
              <Ionic name="person-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
