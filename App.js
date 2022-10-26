import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ImageComponent} from 'react-native';
import ActivityIndicatorPage from './Screens/ActivityIndicator';
import ButtonPages from './Screens/ButtonPages';
import FlatListComponet from './Screens/FlatList';
import ImageBackgroundComp from './Screens/ImageBackgroundComp';
import ImagesComponent from './Screens/ImagesComponent';
import Index from './Screens/Index';
import ModalComponent from './Screens/ModalComponent';
import PressableComponent from './Screens/PressableComponent';
import RefreshControlComp from './Screens/RefreshControlComp';
import ScrollViewCompo from './Screens/ScrollViewCompo';
import StatusBarCompo from './Screens/StatusBarCompo';
import SwitchCompo from './Screens/SwitchCompo';
import TextCompo from './Screens/TextCompo';
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
        <Stack.Screen name="Images" component={ImagesComponent} />
        <Stack.Screen name="ImageBackground" component={ImageBackgroundComp} />
        <Stack.Screen name="Modal" component={ModalComponent} />
        <Stack.Screen name="Pressable" component={PressableComponent} />
        <Stack.Screen name="RefreshControl" component={RefreshControlComp} />
        <Stack.Screen name="ScrollView" component={ScrollViewCompo} />
        <Stack.Screen
          name="StatusBar"
          component={StatusBarCompo}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Switch" component={SwitchCompo} />
        <Stack.Screen name="Text" component={TextCompo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
