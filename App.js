import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './components/pages/splash';
import Home from './components/pages/home';
import Hundred from './components/pages/hundred';
import Twohundred from './components/pages/twohundred';
import Threehundred from './components/pages/threehundred';
import Fourhundred from './components/pages/fourhundred';
import Betweb from './components/pages/web';
import Betweb2 from './components/pages/web2';
import BetWeb3 from './components/pages/web3';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="hundred"
          component={Hundred}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="twohundred"
          component={Twohundred}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="threehundred"
          component={Threehundred}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="fourhundred"
          component={Fourhundred}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="web"
          component={Betweb}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="web2"
          component={Betweb2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="web3"
          component={BetWeb3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
