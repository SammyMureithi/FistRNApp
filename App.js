import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ActivityIndicatorPage from './Screens/ActivityIndicator';
import ButtonPages from './Screens/ButtonPages';
import FlatListComponet from './Screens/FlatList';
import Index from './Screens/Index';
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Index}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ActivityIndicator"
          component={ActivityIndicatorPage}
        />
        <Stack.Screen name="BtnPage" component={ButtonPages} />
        <Stack.Screen name="FlatList" component={FlatListComponet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
