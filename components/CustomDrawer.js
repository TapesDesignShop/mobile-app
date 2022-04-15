import { Image, StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";

import { Colors } from "../constant/Colors";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
          style={{ height: "100%", width: "100%", resizeMode: "contain" }}
        />
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{}}
      >
        <View style={styles.itemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{bottom: 10}}>
        <Text style={styles.infoText}>Tapes Design Shop</Text>
        <Text style={styles.infoText}>Room B21, 10 Colinton Road,</Text>
        <Text style={styles.infoText}>Edinburgh, Napier University, EH10 5DT</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.honeydew,
    alignItems: "center",
    height: "30%"
  },
  itemList: {
    flex: 1,
    padding: 10,
  },
  infoText: {
      textAlign: "center",
      fontFamily: "roboto-thin"
  }
});
