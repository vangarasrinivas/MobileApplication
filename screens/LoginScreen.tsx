import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {store} from '../App';
import Loader from '../components/Loader';
const LoginScreen = ({navigation}: any) => {
  const [contextData, setContextData]: any = useContext(store);

  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const onLogin = () => {
    if (data.email && data.password) {
      try {
        setLoader(true);
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        };

        fetch('http://10.0.2.2:3005/login', requestOptions)
          .then(res => res.json())
          .then(data => {
            setLoader(false);
            if (data?.status == 'error') {
              setError(data?.message);
            } else {
              setContextData({
                ...contextData,
                userInfo: data,
                login: true,
              });
              setData({
                email: '',
                password: '',
              });
            }
          });
      } catch {
        setLoader(false);
        setError('Something wrong');
      }
    } else {
      setErrorData({
        password: 'Required Field *',
        email: 'Required Field *',
      });
    }
  };
  return (
    <>
      {loader && loader ? (
        <Loader />
      ) : error && error ? (
        <>
          <View
            style={{
              backgroundColor: 'pink',
              marginTop: 5,
              paddingVertical: 7,
            }}>
            <Text style={{textAlign: 'center', fontSize: 20}}>Error</Text>
            <Text style={{textAlign: 'center', fontSize: 15}}>{error}</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                width: '35%',
                marginTop: 3,
              }}
              onPress={() => setError('')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 3,
                  textAlign: 'center',
                }}>
                Check Once
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.viewStyle}>
          <View style={styles.btnsView}>
            <Text style={styles.titleText}>Welcome</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                placeholder="Enter your E-Mail"
                onChangeText={e => {
                  setData({
                    ...data,
                    email: e,
                  });

                  if (e) {
                    setErrorData({
                      ...errorData,
                      email: '',
                    });
                  } else {
                    setErrorData({
                      ...errorData,
                      email: 'Required Field *',
                    });
                  }
                }}
                value={data.email}
              />
              <View>
                <Text style={styles.errorMsg}>
                  {errorData?.email ? errorData.email : ''}
                </Text>
              </View>
              <TextInput
                style={styles.input}
                // keyboardType="phone-pad"
                secureTextEntry={true}
                onChangeText={e => {
                  setData({
                    ...data,
                    password: e,
                  });
                  if (e) {
                    setErrorData({
                      ...errorData,
                      password: '',
                    });
                  } else {
                    setErrorData({
                      ...errorData,
                      password: 'Required Field *',
                    });
                  }
                }}
                placeholder="Enter your Password"
                value={data.password}
              />
              <View>
                <Text style={styles.errorMsg}>
                  {errorData?.password ? errorData.password : ''}
                </Text>
              </View>
            </SafeAreaView>
            {/* <View style={styles.btnStyle}>
            <Button
              onPress={() => setLogin(!login)}
              title="Login"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            </View> */}
            <TouchableOpacity
              onPress={() => onLogin()}
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}> LET'S GET STARTED </Text>
            </TouchableOpacity>

            <View style={styles.bottomView}>
              <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text>Sign-Up ?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('forgotpassword')}>
                <Text>Forgot Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default LoginScreen;

export const styles = StyleSheet.create({
  viewStyle: {
    height: '100%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    // alignItems: 'center',
    fontFamily: 'sand-serif',
  },
  titleText: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: '500',
    marginBottom: 5,
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#1d86ff',
    paddingVertical: 8,

    // backgroundColor: '#0A6ABB',
    // width: 300,
    // height: 45,
    // borderColor: '#FFFFFF',
    // borderWidth: 2,
    borderRadius: 5,
    // marginTop: 50,
  },
  buttonText: {
    color: 'white',
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    // borderWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    // borderRadius: 10,
  },
  btnsView: {
    paddingHorizontal: 10,
  },
  bottomView: {
    paddingHorizontal: 5,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorMsg: {
    color: 'red',
    marginLeft: 4,
  },
});
