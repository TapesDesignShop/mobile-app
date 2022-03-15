import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ImageBackground
          source={require("../assets/banner.png")}
          resizeMode="cover"
          style={styles.banner}
        >
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </ImageBackground>
      </View>
      {/* <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title='About us' onPress={() => navigation.navigate('AboutUs')} /></View>
                <View style={styles.button}><Button title='Shop' onPress={() => navigation.navigate('Shop')} /></View>
                <View style={styles.button}><Button title='Services' onPress={() => navigation.navigate('Services')} /></View>
                <View style={styles.button}><Button title='Contact' onPress={() => navigation.navigate('Contact')} /></View>
            </View> */}
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <MaterialIcons name="email" size={35} color="white" />
          <FontAwesome name="map-marker" size={35} color="white" />
          <FontAwesome name="phone" size={35} color="white" />
        </View>
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#e8e7e6",
  },
  topContainer: {
    height: "37.5%",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 25,
  },
  banner: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "center",
  },
  iconContainer: {
    flexDirection: "row",
    height: "6.5%",
    width: "100%",
    backgroundColor: "#cab1cc",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
  },
  icon: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 400,
  },
  bottomContainer: {
    height: "5%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#cab1cc",
  },
});

export default HomeScreen;
