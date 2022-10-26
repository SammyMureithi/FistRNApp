import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

function ImageBackgroundComp() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={require('../Images/1.jpg')}>
        <Text style={{color: 'white', padding: 20, fontSize: 42}}>
          Hello from Foreground
        </Text>
      </ImageBackground>
    </View>
  );
}

export default ImageBackgroundComp;
