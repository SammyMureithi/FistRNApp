import React from 'react';
import {SafeAreaView, View, ActivityIndicator} from 'react-native';

function ActivityIndicatorPage() {
  return (
    <SafeAreaView>
      <View>
        <ActivityIndicator />
        <ActivityIndicator size={'large'} />
        <ActivityIndicator size={'large'} color="#00ff00" />
        <ActivityIndicator size={'large'} color="#0000ff" animating="false">
          <Text>5/10</Text>
        </ActivityIndicator>
      </View>
    </SafeAreaView>
  );
}

export default ActivityIndicatorPage;
