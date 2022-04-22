import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";
import React, { useState, useEffect, useRef } from "react";

import Header from "../components/Header";
import { Colors } from "../constant/Colors";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(false);

  const [nameBorder, setNameBorder] = useState("grey");
  const [emailBorder, setEmailBorder] = useState("grey");
  const [phoneBorder, setPhoneBorder] = useState("grey");
  const [messageBorder, setMessageBorder] = useState("grey");
  const [error, setError] = useState(false);

  function onClick() {
    setError(false);

    setNameBorder("green");
    setEmailBorder("green");
    setPhoneBorder("green");
    setMessageBorder("green");

    if (!name || name.trim().length === 0) {
      setError(true);
      setNameBorder("red");
    }

    if (!email.includes("@") && !email.includes(".")) {
      setError(true);
      setEmailBorder("red");
    }

    if (!phone || phone.trim().length === 0) {
      setError(true);
      setPhoneBorder("red");
    }

    if (!message || message.trim().length === 0) {
      setError(true);
      setMessageBorder("red");
    }

    if(!error){
      const description = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
      const subject = `Tapes Design Shop App Enquiry from ${name}`
      Linking.openURL(`mailto:suparnodeb@hotmail.co.uk?subject=${subject}&body=${description}`);
    }
  }

  const { width: screenWidth } = Dimensions.get("window");

  const ITEMS = [
    {
      title: "Address",
      text: "Edinburgh Napier University Room B21, \n10 Colinton Road, EH10 5DT",
      img: require("../assets/map1.jpg"),
    },
    {
      title: "Contact",
      text: "0131 455 2202 \n07879 417319 \ndesignshopnapier@gmail.com",
      img: require("../assets/contact.jpg"),
    },
    {
      title: "Opening hours",
      text: "Mon - Thu 10:00 am - 3:00 pm \nFri - Sun - Closed",
      img: require("../assets/hours.jpg"),
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
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
              borderRadius: 20,
            }}
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
      <ScrollView style={styles.contentContainer}>
        <Text
          style={{
            fontFamily: "mont-extra-bold",
            fontSize: 18,
            paddingTop: 15,
            color: Colors.sunglow,
            textAlign: "center",
          }}
        >
          STATIONARY SHOP IN EDINBURGH
        </Text>
        <Text
          style={{
            color: "grey",
            textAlign: "center",
            paddingHorizontal: 10,
            padding: 10,
            fontFamily: "roboto-regular",
          }}
        >
          For a stationery shop offering a great selection at competitive prices
          in Edinburgh, visit Tapes Design Shop at Edinburgh Napier University,
          Merchiston Campus and browse our range. Staff, students and the
          general public can benefit from our excellent range at great value for
          money. We also offer high-quality printing and binding services for
          your dissertation or thesis. Drop in today and see our selection,
          place an order online for collection, or ask our team if you have any
          questions about our stock or printing services.
        </Text>
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

          <View style={{bottom: 10}}>
            <Text
              style={{
                fontFamily: "mont-extra-bold",
                fontSize: 18,
                color: Colors.blueViolet,
                marginBottom: 5,
                textAlign: "center",
              }}
            >
              SEND US A MESSAGE
            </Text>
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Name</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{ ...styles.inputContainer, borderColor: nameBorder }}
            >
              <View style={{ flexDirection: "row", width: "75%" }}>
                <TextInput
                  //value={name}
                  style={styles.input}
                  onChangeText={(newText) => setName(newText)}
                />
                <View style={{ marginRight: 5, top: 15, }}>
                  <Ionicons name="person-outline" size={24} color="grey" />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Email</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{ ...styles.inputContainer, borderColor: emailBorder }}
            >
              <View style={{ flexDirection: "row", width: "75%" }}>
                <TextInput
                  //value={email}
                  style={styles.input}
                  onChangeText={(newText) => setEmail(newText)}
                />
                <View style={{ marginRight: 5, top: 15 }}>
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={24}
                    color="grey"
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Phone</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{ ...styles.inputContainer, borderColor: phoneBorder }}
            >
              <View style={{ flexDirection: "row", width: "75%" }}>
                <TextInput
                  //value={phone}
                  style={styles.input}
                  onChangeText={(newText) => setPhone(newText)}
                />
                <View style={{ marginRight: 5, top: 15 }}>
                  <AntDesign name="phone" size={24} color="grey" />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Message</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                ...styles.inputContainer,
                borderColor: messageBorder,
                height: 200,
                width: "75%",
              }}
            >
              <View
                style={{ flexDirection: "row", width: "90%", height: "90%" }}
              >
                <TextInput
                  //value={message}
                  style={{
                    height: "100%",
                    width: "95%",
                    textAlignVertical: "top",
                  }}
                  onChangeText={(newText) => setMessage(newText)}
                  multiline
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              color={Colors.primary}
              onPress={() => onClick()}
            >
              <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
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
    marginTop: Dimensions.get("window").height > 600 ? 0 : 15,
    width: "100%",
    height: "20%",
    backgroundColor: "white",
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height > 700 ? "100%" : "100%",
    paddingBottom: "70%",
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
  labelContainer: {
    alignSelf: "flex-start",
    left: 50,
  },
  labelText: {
    fontSize: 15,
    fontFamily: "roboto-bold",
    color: Colors.blueViolet
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "grey",
    height: 40,
    borderRadius: 15,
    margin: 10,
  },
  input: {
    right: 35,
    height: 40,
    margin: 10,
    width: "90%",
  },
  submitText: {
    fontSize: 20,
    color: "white",
    fontFamily: "roboto-bold",
  },
  buttonContainer: {
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: "auto",
    right: "12.5%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: Colors.blueViolet,
    width: 150,
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
});

export default Contact;
