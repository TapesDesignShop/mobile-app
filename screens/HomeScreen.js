import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Colors } from '../constant/Colors';

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
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <MaterialIcons name="email" size={35} color={Colors.honeydew} />
          <FontAwesome name="map-marker" size={35} color={Colors.honeydew} />
          <FontAwesome name="phone" size={35} color={Colors.honeydew} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: Colors.sunglow, marginBottom: 20}}>Stationary and Arts in Edinburgh</Text>
        <Text style={{color: '#1f271b'}}>Tapes Design Shop, Room B21 in Edinburgh is the top source for high-quality stationery supplies for Edinburgh Napier University, Merchiston Campus, students, staff.& the general public.  Our shop carries a huge array of Stationery and Art & Design. Additionally, we provide students quick access to printing and binding services.</Text>
      </View>
      <View style={styles.navContainer}>
        <View style={styles.navigation}>
        <Ionicons name="information-circle-outline" size={60} color={Colors.blueViolet} onPress={() => navigation.navigate('AboutUs')} />
        <AntDesign name="shoppingcart" size={60} color={Colors.blueViolet} onPress={() => navigation.navigate('Shop')} />
        </View>
        <View style={styles.navigation}>
        <MaterialIcons name="design-services" size={60} color={Colors.blueViolet} onPress={() => navigation.navigate('Services')} />
        <AntDesign name="contacts" size={60} color={Colors.blueViolet} onPress={() => navigation.navigate('Contact')} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.socialHandler}>
      <AntDesign name="instagram" size={24} color={Colors.honeydew} />
      <AntDesign name="facebook-square" size={24} color={Colors.honeydew} />
      </View>
      </View>
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
    backgroundColor: Colors.paradisePink,
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
    flexDirection: 'row',
    height: "5%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.paradisePink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 10,
    width: '100%',
    height: '30%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navContainer: {
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: 200,
    height: 60,
    margin: 10,
  },
  socialHandler:{
    flexDirection: 'row',
    justifyContent: "space-around",
    width: 150,
  },
});

export default HomeScreen;
