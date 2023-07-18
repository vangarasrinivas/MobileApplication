import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Warning from '../components/Warning';
import Error from '../components/Error';
import Loader from '../components/Loader';

const ForgotPassword = ({navigation}: any) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });
  const [loader, setLoader] = useState(false);
  const [warning, setWarning] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onRegisterFun = () => {
    setLoader(true);
    try {
      const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      };
      fetch('http://10.0.2.2:3005/forgotpassword', requestOptions)
        .then(res => res.json())
        .then(data => {
          if (data?.status == 'warning') {
            setWarning(data?.message);
          } else if (data?.status == 'error') {
            setError(data?.message);
          } else {
            // navigation.navigate('login');
            setSuccess(data?.message);
          }
          setLoader(false);
          // setData({
          //   username: '',
          //   email: '',
          //   phone: '',
          //   password: '',
          //   confirmpassword: '',
          // });
        });
    } catch (err) {
      setLoader(false);
      setError('Error');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              backgroundColor: 'orange',
              paddingVertical: 5,
              color: 'white',
              marginTop: 2,
            }}>
            Change your Password
          </Text>

          {loader && loader ? (
            <Loader />
          ) : warning && warning ? (
            // <Warning message={warning} />
            <>
              <View
                style={{
                  backgroundColor: 'pink',
                  marginTop: 5,
                  paddingVertical: 7,
                }}>
                <Text style={{textAlign: 'center', fontSize: 20}}>Warning</Text>
                <Text style={{textAlign: 'center', fontSize: 15}}>
                  {warning}
                </Text>
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
                  onPress={() => setWarning('')}>
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
          ) : error && error ? (
            // <Error message={error} />
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
          ) : success && success ? (
            <>
              <View
                style={{
                  backgroundColor: 'blue',
                  marginTop: 5,
                  paddingVertical: 7,
                }}>
                <Text
                  style={{textAlign: 'center', fontSize: 25, color: 'white'}}>
                  Success
                </Text>
                <Text
                  style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
                  {success}
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'green',
                    width: '15%',
                    marginTop: 3,
                  }}
                  onPress={() => navigation.navigate('login')}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      padding: 3,
                      textAlign: 'center',
                    }}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={{padding: 10}}>
              <Text style={styles.inputTitle}>E-Mail</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={e => {
                  setData({
                    ...data,
                    email: e,
                  });
                }}
                value={data?.email}
              />

              <Text style={styles.inputTitle}>New Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={e => {
                  setData({
                    ...data,
                    password: e,
                  });
                }}
                secureTextEntry={true}
                value={data?.password}
              />
              <Text style={styles.inputTitle}>Confirm New Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm password"
                onChangeText={e => {
                  setData({
                    ...data,
                    confirmpassword: e,
                  });
                }}
                secureTextEntry={true}
                value={data?.confirmpassword}
              />
              <TouchableOpacity
                onPress={() => onRegisterFun()}
                style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

export const styles = StyleSheet.create({
  // viewStyle: {
  //   height: '100%',
  //   backgroundColor: 'green',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 5,
    backgroundColor: 'green',
    textAlign: 'center',
    paddingVertical: 5,
  },
  input: {
    height: 45,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: 'silver',
  },
  inputTitle: {fontSize: 18, color: 'black'},
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#1d86ff',
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
