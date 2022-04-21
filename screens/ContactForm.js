import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";
import React, { useState, useEffect, useRef } from "react";


import Header from "../components/Header";
import { Colors } from "../constant/Colors";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const ContactForm = ({ navigation }) => {
  const { width: screenWidth } = Dimensions.get("window");

 
  
  

  return (
    <View style={styles.container}>
      <Header />
      <NavigationBar toggle={() => navigation.toggleDrawer()} />
      <View style={styles.contentContainer}>
        <Text
          style={{
            fontFamily: "mont-extra-bold",
            fontSize: 18,
            color: Colors.sunglow,
            marginBottom: 5,
            textAlign: "center",
          }}
        >
          Contact Form
        </Text>
        <Text
          style={{
            color: "grey",
            textAlign: "center",
            fontFamily: "roboto-regular",
          }}
        >
         
        </Text>
      </View>
      <LinearGradient
        colors={["white", Colors.paradisePink]}
        style={styles.bottomContainer}
      >
        
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
    marginTop: Dimensions.get("window").height > 600 ? 0 : 15,
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: Dimensions.get("window").height > 700 ? "80%" : "79%",
    width: "95%",
    borderRadius: 10,
    backgroundColor: "rgba(84,13,110,0.3)",
    top: 10,
  },
  serviceItem: {
    marginTop: "auto",
    padding: 6,
    bottom: Dimensions.get("window").height > 700 ? 10 : 0,
  },
  serviceImg: {
    backgroundColor: "transparent",
    height: Dimensions.get("window").height > 700 ? "60%" : "65%",
    width: Dimensions.get("window").height > 700 ? "95%" : "95%",
    bottom: Dimensions.get("window").height > 700 ? 50 : 60,
    position: "absolute",
    top: Dimensions.get("window").height > 700 ? 5 : 5,
  },
});

export default ContactForm;
