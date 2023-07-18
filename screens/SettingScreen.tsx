import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {store} from '../App';

const SettingScreen = () => {
  const [contextData, setContextData]: any = useContext(store);

  return (
    <View style={styles.mainView}>
      {/* <TouchableOpacity style={styles.settingsIcon}>
        <Ionic name="settings" size={30} />
      </TouchableOpacity> */}
      <View style={styles.viewStyle}>
        <Button
          onPress={() =>
            setContextData({
              ...contextData,
              login: !contextData?.login,
            })
          }
          title="Logout"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

export default SettingScreen;

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'lightgray',
  },

  viewStyle: {
    height: '100%',
    // backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 5,
  },
  settingsIcon: {
    margin: '2%',
  },
});
