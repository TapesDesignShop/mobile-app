import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

import { Colors } from "../constant/Colors";

const Header = () => {
  return (
    <View style={styles.topContainer}>
      <ImageBackground
        source={require("../assets/banner.png")}
        resizeMode="cover"
        style={styles.banner}
      >
        <View style={styles.headerBackdrop}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topContainer: {
    height: "20%",
    width: "100%",
  },
  headerBackdrop: {
    backgroundColor: Colors.honeydew,
    width: "100%",
    height: "45%",
    opacity: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 80,
    width: 200,
    opacity: 1,
  },
});
