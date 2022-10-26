import React from 'react';
import {useState} from 'react';
import {View, Text, Switch} from 'react-native';

function SwitchCompo() {
  const [isEnable, setIsEnabled] = useState(false);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Switch
        onValueChange={() => setIsEnabled(prevState => !prevState)}
        value={isEnable}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnable ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
}

export default SwitchCompo;
