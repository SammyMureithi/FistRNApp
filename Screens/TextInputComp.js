import React from 'react';
import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

function TextInputComp() {
  const [input, setInput] = useState(null);
  const [input1, setInput1] = useState(null);
  return (
    <View>
      <Text>Text Input</Text>
      <TextInput
        value={input}
        placeholder="Enter Value"
        onChangeText={e => setInput(e)}
        //onChange={e => setInput(e.target.value)}
        style={{height: 40, borderWidth: 2, padding: 10, margin: 10}}
      />
      <TextInput
        value={input1}
        autoCapitalize={'words'}
        autoComplete={'password'}
        keyboardType={'email-address'}
        placeholder="Enter Value"
        onChangeText={e => setInput1(e)}
        style={{height: 40, borderWidth: 2, padding: 10, margin: 10}}
      />
      <Text>Input: {input !== null ? input : null}</Text>
      <Text>Input2: {input1 !== null ? input1 : null}</Text>
    </View>
  );
}

export default TextInputComp;
