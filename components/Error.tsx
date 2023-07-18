import {View, Text} from 'react-native';
import React from 'react';

const Error = ({message}: any) => {
  return (
    <View style={{backgroundColor: 'red', marginTop: 5}}>
      <Text style={{textAlign: 'center', fontSize: 20}}>Warning</Text>
      <Text style={{textAlign: 'center', fontSize: 15}}>{message}</Text>
    </View>
  );
};

export default Error;
