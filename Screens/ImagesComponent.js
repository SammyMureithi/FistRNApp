import React from 'react';
import {View, Text, Image} from 'react-native';

function ImagesComponent() {
  return (
    <View>
      <Image
        //require anly works for static images or images saved locally in our code
        source={require('../Images/1.jpg')}
        style={{height: 70, width: 100}}
        blurRadius={5}
        fadeDuration={3000}
      />
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{height: 70, width: 100, resizeMode: 'stretch'}}
        loadingIndicatorSource={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
}

export default ImagesComponent;
