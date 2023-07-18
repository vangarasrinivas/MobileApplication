import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {store} from '../App';

const AboutScreen = () => {
  const [contextData, setContextData]: any = useContext(store);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>About User</Text>
      <View style={{padding: 15}}>
        <Text style={styles.textStyl1}>
          Username : {contextData?.userInfo?.username}
        </Text>
        <Text style={styles.textStyl1}>
          E-Mail : {contextData?.userInfo?.email}
        </Text>
        <Text style={styles.textStyl1}>
          Phone : {contextData?.userInfo?.phone}
        </Text>
        <Text style={styles.textStyl1}>
          token : {contextData?.userInfo?.token}
        </Text>
      </View>
    </View>
  );
};

export default AboutScreen;

export const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 5,
  },
  textStyl1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
});
