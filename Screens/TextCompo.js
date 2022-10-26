import React from 'react';
import {Text, View} from 'react-native';

function TextCompo() {
  return (
    <View>
      <Text>Hello am a text</Text>
      <Text selectable={true} selectionColor={'green'}>
        Here we can have{' '}
        <Text style={{color: 'red', fontStyle: 'italic'}}>nested Text</Text>
      </Text>
      <Text dataDetectorType={'phoneNumber'}>0768397675</Text>
    </View>
  );
}

export default TextCompo;
