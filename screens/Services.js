import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import Header from "../components/Header";
import { Colors } from "../constant/Colors";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Services = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <NavigationBar toggle={() => navigation.toggleDrawer()} />
      <View style={styles.contentContainer}>
        <Text
          style={{
            fontFamily: "mont-extra-bold",
            fontSize: 20,
            color: Colors.sunglow,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          PRINTING & BINDING SERVICES IN EDINBURGH
        </Text>
        <Text
          style={{
            color: "grey",
            textAlign: "center",
            fontFamily: "roboto-regular",
          }}
        >
          At Tapes Design Shop within Edinburgh Napier University, Merchiston
          Campus, we offer printing and paper binding services for staff and
          students. Contact us today to find out more and get a free quote on
          your print job.
        </Text>
      </View>
      <LinearGradient
        colors={["white", Colors.paradisePink]}
        style={styles.bottomContainer}
      >
        <View style={{...styles.serviceContainer, backgroundColor: Colors.blueViolet}}>
          <View
            style={styles.serviceItem}></View>
        </View>
      </LinearGradient>
      <Footer />
    </View>
  );
};

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
    height: "20%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height > 700 ? "52.5%" : "55%",
  },
  serviceContainer: {
    flexDirection: "row",
    height: "60%",
    width: "95%",
    borderRadius: 10,
    opacity: 0.5,
    bottom: Dimensions.get("window").height > 700 ? 10 : 40
  },
  serviceItem: {},
});

export default Services;
