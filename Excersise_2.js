import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const Excersise2 = () => {
  return (
    <View style={Mystyles.container}>
      <Button title="Button 1" onPress={() => alert('hello 1')} />
      <TouchableOpacity
        style={Mystyles.button}
        onPress={() => alert('hello 2')}>
        <Text style={Mystyles.text}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Excersise2;

const Mystyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
