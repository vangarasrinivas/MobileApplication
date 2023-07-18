import {View, Text} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: '600',
          textAlign: 'center',
          paddingVertical: 100,
          paddingHorizontal: 0,
        }}>
        Loading....
      </Text>
    </View>
  );
};

export default Loader;
