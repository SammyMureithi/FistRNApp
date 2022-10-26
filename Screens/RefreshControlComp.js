import React from 'react';
import {useState} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
function RefreshControlComp() {
  const [refresh, setRefresh] = useState(false);
  function handleRefresh() {
    setRefresh(true);
    wait(2000).then(() => setRefresh(false));
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={handleRefresh}
            colors={['red']}
            progressBackgroundColor={'yellow'}
            size={'large'}
          />
        }>
        <Text>Refresh Control</Text>
      </ScrollView>
    </View>
  );
}

export default RefreshControlComp;
