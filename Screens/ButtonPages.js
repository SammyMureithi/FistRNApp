import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';

function ButtonPages() {
  const [number, setNumber] = useState(0);
  function handleAddNumber() {
    setNumber(prevNumber => prevNumber + 1);
  }
  return (
    <View>
      <Text>{number}</Text>
      <Button
        title="Add 1"
        onPress={handleAddNumber}
        color={'#841584'}
        accessibilityLabel="Learn more about this purple Button"
      />
      <Button
        title="Disabled"
        disabled={true}
        onPress={handleAddNumber}
        color={'#841584'}
        accessibilityLabel="Learn more about this purple Button"
      />
    </View>
  );
}

export default ButtonPages;
