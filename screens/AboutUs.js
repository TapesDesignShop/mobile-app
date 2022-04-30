import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import Header from "../components/Header";
import { Colors } from "../constant/Colors";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const AboutUs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent"/>
      <Header />
      <NavigationBar toggle={() => navigation.toggleDrawer()} />
      <View style={styles.contentContainer}>
        <Text
          style={{
            fontFamily: "mont-extra-bold",
            fontSize: 20,
            color: Colors.sunglow,
            marginBottom: 20,
          }}
        >
          OUR STORY
        </Text>
        <Text
          style={{
            color: "grey",
            textAlign: "center",
            fontFamily: "roboto-regular",
          }}
        >
          The shop started out as an Art shop but has evolved into Art &
          Stationery supplies.. We set up within the Design Department of
          Edinburgh Napier University, Merchiston Campus in 2006 and the shop
          was created for the Art and Design Students, but now serves all
          students from every department,. We have definitely had to change and
          evolve rapidly to keep up with all the changes in technology and
          student's requirements, and this makes us one of the only shops that
          can offer something different or unobtainable in other stores. The
          shop is also open to the general public including Brunstfield,
          Morningside and surrounding areas.
        </Text>
      </View>
      <LinearGradient
        colors={["white", Colors.paradisePink]}
        style={styles.bottomContainer}
      >
        <View style={styles.vidContainer}>
          <Text>video</Text>
        </View>
      </LinearGradient>
      <Footer />
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  contentContainer: {
    padding: 10,
    marginTop: Dimensions.get("window").height > 700 ? 0 : 15,
    width: "100%",
    height: "35%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "32.5%",
  },
  vidContainer: {
    backgroundColor: Colors.honeydew,
    height: "75%",
    width: "85%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8
  },
});
