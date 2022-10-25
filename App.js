import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
function App() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter(prevCount => prevCount + 1);
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello</Text>
      <Button onPress={handleClick} title={`Click ${counter}`}></Button>
      <Text>
        My First Ever React Native app after debuging for two good days , But I
        👏 for mySelf,I can do It
      </Text>
    </View>
  );
}

export default App;
