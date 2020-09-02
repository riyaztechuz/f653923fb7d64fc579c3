import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator mode='modal' headerMode='screen' screenOptions={{ ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true, cardOverlayEnabled: true }}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}


const App = () => {
  return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
  )
}

export default App