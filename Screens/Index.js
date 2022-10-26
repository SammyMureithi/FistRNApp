import React from 'react';
import {SafeAreaView, ScrollView, Button} from 'react-native';

function Index({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          title="ActivityIndicator"
          onPress={() => navigation.navigate('ActivityIndicator')}
        />
        <Button
          title="Buttons "
          onPress={() => navigation.navigate('BtnPage')}
        />
        <Button
          title="FlatList "
          onPress={() => navigation.navigate('FlatList')}
        />
        <Button title="Images" onPress={() => navigation.navigate('Images')} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Index;
