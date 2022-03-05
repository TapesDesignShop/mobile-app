import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';
import Shop from './screens/Shop';
import Services from './screens/Services';
import Contact from './screens/Contact';

import A3Wallets from './screens/shop/A3Wallets';
import A4Folder from './screens/shop/A4Folder';
import AcrylicSheets from './screens/shop/AcrylicSheets';
import ArtPens from './screens/shop/ArtPens';
import BalsaWoods from './screens/shop/BalsaWoods';
import Foamboard from './screens/shop/Foamboard';
import GreetingCards from './screens/shop/GreetingCards';
import Mountboard from './screens/shop/Mountboard';
import PaperCard from './screens/shop/PaperCard';
import Pens from './screens/shop/Pens';
import Photography from './screens/shop/Photography';
import RuledPads from './screens/shop/RuledPads';
import Sketchpads from './screens/shop/Sketchpads';
import Stationary from './screens/shop/Stationary';
import TechnicalDrawing from './screens/shop/TechnicalDrawing';
import USBFlash from './screens/shop/USBFlash';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Contact" component={Contact} />

        <Stack.Screen name="A3Wallets" component={A3Wallets} />
        <Stack.Screen name="A4Folder" component={A4Folder} />
        <Stack.Screen name="AcrylicSheets" component={AcrylicSheets} />
        <Stack.Screen name="ArtPens" component={ArtPens} />
        <Stack.Screen name="BalsaWoods" component={BalsaWoods} />
        <Stack.Screen name="Foamboard" component={Foamboard} />
        <Stack.Screen name="GreetingCards" component={GreetingCards} />
        <Stack.Screen name="Mountboard" component={Mountboard} />
        <Stack.Screen name="PaperCard" component={PaperCard} />
        <Stack.Screen name="Pens" component={Pens} />
        <Stack.Screen name="Photography" component={Photography} />
        <Stack.Screen name="RuledPads" component={RuledPads} />
        <Stack.Screen name="Sketchpads" component={Sketchpads} />
        <Stack.Screen name="Stationary" component={Stationary} />
        <Stack.Screen name="TechnicalDrawing" component={TechnicalDrawing} />
        <Stack.Screen name="USBFlash" component={USBFlash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
