import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";
import Shop from "./screens/Shop";
import Services from "./screens/Services";
import Contact from "./screens/Contact";

import A3Wallets from "./screens/shop/A3Wallets";
import A4Folder from "./screens/shop/A4Folder";
import AcrylicSheets from "./screens/shop/AcrylicSheets";
import ArtPens from "./screens/shop/ArtPens";
import BalsaWoods from "./screens/shop/BalsaWoods";
import Foamboard from "./screens/shop/Foamboard";
import GreetingCards from "./screens/shop/GreetingCards";
import Mountboard from "./screens/shop/Mountboard";
import PaperCard from "./screens/shop/PaperCard";
import Pens from "./screens/shop/Pens";
import Photography from "./screens/shop/Photography";
import RuledPads from "./screens/shop/RuledPads";
import Sketchpads from "./screens/shop/Sketchpads";
import Stationary from "./screens/shop/Stationary";
import TechnicalDrawing from "./screens/shop/TechnicalDrawing";
import USBFlash from "./screens/shop/USBFlash";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// fetch fonts
const fetchFonts = () => {
  return Font.loadAsync({
    // roboto
    "roboto-regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "roboto-thin": require("./assets/fonts/Roboto/Roboto-Thin.ttf"),

    // playfair
    "playfair-regular": require("./assets/fonts/Playfair/PlayfairDisplay-Regular.ttf"),
    "playfair-bold": require("./assets/fonts/Playfair/PlayfairDisplay-Bold.ttf"),
    "playfair-extra-bold": require("./assets/fonts/Playfair/PlayfairDisplay-ExtraBold.ttf"),

    // montserrat
    "mont-regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "mont-bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    "mont-extra-bold": require("./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
    "mont-light": require("./assets/fonts/Montserrat/Montserrat-Light.ttf"),
    "mont-thin": require("./assets/fonts/Montserrat/Montserrat-Thin.ttf"),
  });
};

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerShown: false,
        }}
      />
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
  );
}

function DrawerContent(props, { navigation }) {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Home"
        onPress={() => {
          props.navigation.navigate("HomeScreen");
        }}
      />
      <DrawerItem
        label="About Us"
        onPress={() => {
          props.navigation.navigate("AboutUs");
        }}
      />
      <DrawerItem
        label="Shop"
        onPress={() => {
          props.navigation.navigate("Shop");
        }}
      />
      <DrawerItem
        label="Services"
        onPress={() => {
          props.navigation.navigate("Services");
        }}
      />
      <DrawerItem
        label="Contact"
        onPress={() => {
          props.navigation.navigate("Contact");
        }}
      />
    </DrawerContentScrollView>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="AppStack"
          component={AppStack}
          options={{ drawerItemStyle: { height: 0 } }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return <Navigation />;
}
