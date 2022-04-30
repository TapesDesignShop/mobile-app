import { StyleSheet } from "react-native";
import React, { Component } from "react";
import { WebView } from "react-native-webview";

const Shop = () => {
  return (
    <WebView
      source={{ uri: "https://www.stationeryshopedinburgh.co.uk/shop/" }}
    />
  );
};

export default Shop;

const styles = StyleSheet.create({});
