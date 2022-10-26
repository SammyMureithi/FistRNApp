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
        <Button
          title="ImagesBackground"
          onPress={() => navigation.navigate('ImageBackground')}
        />
        <Button title="Modal" onPress={() => navigation.navigate('Modal')} />
        <Button
          title="Pressable"
          onPress={() => navigation.navigate('Pressable')}
        />
        <Button
          title="RefreshControl"
          onPress={() => navigation.navigate('RefreshControl')}
        />
        <Button
          title="ScrollView"
          onPress={() => navigation.navigate('ScrollView')}
        />
        <Button
          title="StatusBar"
          onPress={() => navigation.navigate('StatusBar')}
        />
        <Button title="Switch" onPress={() => navigation.navigate('Switch')} />
        <Button title="Text" onPress={() => navigation.navigate('Text')} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Index;
