import React from 'react';
import {SafeAreaView} from 'react-native';

function Index({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          title="ActivityIndicator"
          onPress={() => navigation.navigate('ActivityIndicator')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Index;
