import { StyleSheet, Linking, View, Dimensions } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../constant/Colors";

const NavigationBar = (props) => {
  const navigation = useNavigation();

  const openMaps = (latitude, longitude) => {
    const daddr = `${latitude},${longitude}`;
    const company = Platform.OS === "ios" ? "apple" : "google";
    Linking.openURL(`http://maps.${company}.com/maps?daddr=${daddr}`);
  };

  return (
    <View style={styles.iconContainer}>
      <View style={styles.icon}>
        <Ionicons
          name="menu"
          size={Dimensions.get("window").height > 700 ? 35 : 30}
          color={Colors.honeydew}
          onPress={props.toggle}
        />
        <MaterialIcons
          name="email"
          size={Dimensions.get("window").height > 700 ? 35 : 30}
          color={Colors.honeydew}
          onPress={() => {
            navigation.navigate("Contact");
          }}
        />
        <FontAwesome
          name="map-marker"
          size={Dimensions.get("window").height > 700 ? 35 : 30}
          color={Colors.honeydew}
          onPress={() => {openMaps(55.933046,-3.214593)}}
        />
        <FontAwesome
          name="phone"
          size={Dimensions.get("window").height > 700 ? 35 : 30}
          color={Colors.honeydew}
          onPress={() => {
            Linking.openURL(`tel:0131 455 2202`);
          }}
        />
      </View>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    height: "7.5%",
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
    width: 375,
  },
});
