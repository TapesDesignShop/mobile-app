import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";
import React, { useState, useEffect, useRef } from "react";


import Header from "../components/Header";
import { Colors } from "../constant/Colors";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Contact = ({ navigation }) => {
  const { width: screenWidth } = Dimensions.get("window");

  const ITEMS = [
    {
      title: "Address",
      text: "Edinburgh Napier University Room B21, \n10 Colinton Road, EH10 5DT",
      img: require("../assets/map1.jpg")
    },
    {
      title: "Contact",
      text: "0131 455 2202 \n07879 417319 \ndesignshopnapier@gmail.com",
      img: require("../assets/contact.jpg")
    },
    {
      title: "Opening hours",
      text: "Mon - Thu 10:00 am - 3:00 pm \nFri - Sun - Closed",
      img: require("../assets/hours.jpg")
    },
  ];

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ITEMS);
  }, []);

  

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.serviceContainer}>
        <View style={styles.serviceImg}>
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "cover", borderRadius: 20}}
            source={item.img}
          />
        </View>
        <View style={styles.serviceItem}>
          <Text
            style={{
              fontFamily: "mont-extra-bold",
              fontSize: 16,
              color: Colors.honeydew,
              textAlign: "center",
              opacity: 100,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: "roboto-regular",
              textAlign: "center",
              color: "white",
            }}
          >
            {item.text}
          </Text>
        </View>
      </View>
    );
  };
  
  

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
          Stationery shop in Edinburgh
        </Text>
        <Text
          style={{
            color: "grey",
            textAlign: "center",
            fontFamily: "roboto-regular",
          }}
        >
          For a stationery shop offering a great selection at competitive prices in Edinburgh, visit Tapes Design Shop at Edinburgh Napier University, Merchiston Campus and browse our range. Staff,  students and the general public can benefit from our excellent range at great value for money. We also offer high-quality printing and binding services for your dissertation or thesis. Drop in today and see our selection, place an order online for collection, or ask our team if you have any questions about our stock or printing services.
        </Text>
      </View>
      <LinearGradient
        colors={["white", Colors.paradisePink]}
        style={styles.bottomContainer}
      >
        <Carousel
          layout={"default"}
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
        />
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

export default Contact;
