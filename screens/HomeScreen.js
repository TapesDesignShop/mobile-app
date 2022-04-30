import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../constant/Colors";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent"/>
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
          STATIONARY AND ARTS IN EDINBURGH
        </Text>
        <Text
          style={{
            color: "grey",
            textAlign: "center",
            fontFamily: "roboto-regular",
          }}
        >
          Tapes Design Shop, Room B21 in Edinburgh is the top source for
          high-quality stationery supplies for Edinburgh Napier University,
          Merchiston Campus, students, staff & the general public. Our shop
          carries a huge array of Stationery and Art & Design. Additionally, we
          provide students quick access to printing and binding services.
        </Text>
      </View>
      <LinearGradient
        colors={["white", Colors.paradisePink]}
        style={styles.navContainer}
      >
        <View style={styles.navigation}>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="information-circle-outline"
            size={Dimensions.get("window").height > 700 ? 60 : 40}
            color={Colors.honeydew}
            onPress={() => navigation.navigate("AboutUs")}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <AntDesign
            name="shoppingcart"
            size={Dimensions.get("window").height > 700 ? 60 : 40}
            color={Colors.honeydew}
            onPress={() => navigation.navigate("Shop")}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.navigation}>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons
              name="design-services"
              size={Dimensions.get("window").height > 700 ? 60 : 40}
              color={Colors.honeydew}
              onPress={() => navigation.navigate("Services")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AntDesign
              name="contacts"
              size={Dimensions.get("window").height > 700 ? 60 : 40}
              color={Colors.honeydew}
              onPress={() => navigation.navigate("Contact")}
            />
          </TouchableOpacity>
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
  headerBackdrop: {
    backgroundColor: Colors.honeydew,
    width: "100%",
    height: "30%",
    opacity: 0.75,
    justifyContent: "center",
    alignItems: "center",
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
    height: 100,
    width: 200,
    opacity: 1,
  },
  contentContainer: {
    padding: 10,
    width: "100%",
    height: "30%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    margin: 10,
  },
  navContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "23%",
    bottom: Dimensions.get("window").height > 700 ? 20 : 18,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: Colors.blueViolet,
    width: Dimensions.get("window").height > 700 ? 80 : 60,
    height: Dimensions.get("window").height > 700 ? 80 : 60,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
});

export default HomeScreen;
