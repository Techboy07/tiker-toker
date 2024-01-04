import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import userImg from "../assets/user.jpg";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";

const MyVideoRightComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={userImg} style={styles.image} />
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="heart" size={24} color="white" />
        <Text style={styles.iconText}>200</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="chatbubble-ellipses-sharp" size={24} color="white" />
        <Text style={styles.iconText}>200</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcons name="bookmark" size={24} color="white" />
        <Text style={styles.iconText}>200</Text>
      </View>

      <View style={styles.iconContainer}>
        <Fontisto name="share-a" size={24} color="white" />
        <Text style={styles.iconText}>100</Text>
      </View>

      <View style={{ ...styles.imageContainer, backgroundColor: "black" }}>
        <Image
          source={userImg}
          style={{ ...styles.image, width: 25, height: 25 }}
        />
      </View>
    </View>
  );
};

export default MyVideoRightComponent;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    right: 0,
    height: "85%",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    paddingRight: 15,
    paddingBottom: 20,
  },
  imageContainer: {
    width: 42,
    height: 42,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  icon: {},
  iconContainer: {},
  iconText: {
    color: "white",
    fontSize: 15,
  },
});
