import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ActivityIndicatorPage from './Screens/ActivityIndicator';
import Index from './Screens/Index';
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Index}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ActivityIndicator"
          component={ActivityIndicatorPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
