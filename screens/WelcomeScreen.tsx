import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {store} from '../App';
import {TouchableOpacity} from 'react-native-gesture-handler';

const WelcomeScreen = ({navigation}: any) => {
  const [contextData, setContextData]: any = useContext(store);
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text
          style={{
            ...styles.textStyle,
            marginTop: 50,
            fontSize: 30,
          }}>
          Hey {contextData?.userInfo?.username}
        </Text>
        <Text
          style={{
            ...styles.textStyle,
            fontSize: 22,
          }}>
          Welcome to Your Applicationsss
        </Text>
        <View style={{marginTop: 30, padding: 15}}>
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
            tokennn : {contextData?.userInfo?.token}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              // width: '15%',
              marginRight: 5,
            }}
            onPress={() => {
              console.log('Helloo Navigate');
              navigation.navigate('brandslist');
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                padding: 3,
                textAlign: 'center',
              }}>
              Branditems
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

export const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    backgroundColor: 'pink',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 5,
    textAlign: 'center',
  },
  textStyl1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
});
