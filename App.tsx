import "react-native-gesture-handler";
import React, { useState } from "react";
import { Linking } from "react-native";
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
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";
import Shop from "./screens/Shop";
import Services from "./screens/Services";
import Contact from "./screens/Contact";

import CustomDrawer from "./components/CustomDrawer";
import { Colors } from "./constant/Colors";


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

function OpenShop() {
  Linking.openURL('https://www.stationeryshopedinburgh.co.uk/shop/')
}

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
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: { fontFamily: "roboto-bold" },
          drawerActiveBackgroundColor: "#aa18ea",
          drawerActiveTintColor: '#fff'
        }}
      >
        <Drawer.Screen
          name="AppStack"
          component={AppStack}
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="home" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About Us"
          component={AboutUs}
          options={{
            drawerIcon: ({ color }) => (
              <AntDesign name="infocirlceo" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Shop"
          component={Shop}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="shopping-outline"
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Services"
          component={Services}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons
                name="miscellaneous-services"
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="phone-call" size={22} color={color} />
            ),
          }}
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
