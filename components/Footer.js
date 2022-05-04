import { StyleSheet, Linking, View } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

import { Colors } from '../constant/Colors';

const Footer = () => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.socialHandler}>
        <AntDesign name="instagram" size={24} color={Colors.honeydew} onPress={() => Linking.openURL('https://www.instagram.com/tapesdesignshop/')}/>
        <AntDesign name="facebook-square" size={24} color={Colors.honeydew} onPress={() => Linking.openURL('fb://page/352209691542360')}/>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: "row",
    height: "5%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.paradisePink,
    justifyContent: "center",
    alignItems: "center",
  },
  socialHandler: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 150,
  },
});
