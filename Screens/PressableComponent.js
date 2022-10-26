import React from 'react';
import {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

function PressableComponent() {
  const [count, setCount] = useState(0);
  function handlePress() {
    setCount(prevCount => prevCount + 1);
  }
  return (
    <View>
      <Text>Pressable Page</Text>
      <Pressable onPress={handlePress}>
        <Text>Am a Pressable Text</Text>
      </Pressable>
      <Text>{count}</Text>
    </View>
  );
}

export default PressableComponent;
