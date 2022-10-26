import React from 'react';
import {useState} from 'react';
import {Button, StatusBar, Text, View} from 'react-native';

function StatusBarCompo() {
  const [status, setStatus] = useState(false);
  function handleChangeStatus() {
    setStatus(prevState => !prevState);
  }
  return (
    <View>
      <StatusBar
        hidden={status}
        backgroundColor="#61dafb"
        animated={true}
        translucent={true}
      />
      <Text>Status Bar</Text>
      <Button title={status ? 'Show' : 'Hide'} onPress={handleChangeStatus} />
    </View>
  );
}

export default StatusBarCompo;
