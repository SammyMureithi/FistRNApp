import React from 'react';
import {SafeAreaView, View, ActivityIndicator, Text} from 'react-native';

function ActivityIndicatorPage() {
  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="#00ff00" />
      <ActivityIndicator size="large" color="#0000ff" />
      <ActivityIndicator
        size={'large'}
        animating={true}
        color="black"></ActivityIndicator>
    </View>
  );
}

export default ActivityIndicatorPage;
