import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TitleBar from './components/TitleBar';
import HomeScreen from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TitleBar />
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen name="About Us" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
