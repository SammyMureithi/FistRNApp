import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function TouchableOpacityCompo() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setCounter(prevCount => prevCount + 1)}
        // activeOpacity={0.5}
        style={{alignItems: 'center', backgroundColor: '#DDDDDD', padding: 10}}>
        <Text>Press</Text>
      </TouchableOpacity>
      <Text>Count {counter}</Text>
    </View>
  );
}

export default TouchableOpacityCompo;
