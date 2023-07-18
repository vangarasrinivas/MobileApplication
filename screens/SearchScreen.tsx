import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SearchScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Search</Text>
    </View>
  );
};

export default SearchScreen;

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
