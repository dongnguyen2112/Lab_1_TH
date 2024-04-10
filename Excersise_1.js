import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableHighlight,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const Excersise1 = () => {
  return (
    <View style={Mystyle.ViewStyle}>
      <Text style={Mystyle.TextStyle}>Hello World</Text>
    </View>
  );
};

export default Excersise1;

var Mystyle = StyleSheet.create({
  ViewStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
  },
  TextStyle: {
    color: 'black',
  },
});
