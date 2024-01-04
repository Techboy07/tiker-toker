import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyVideoComponent from "../components/MyVideoComponent";

const HomeFeed = () => {
  return (
    <View style={{ flex: 1 }}>
      <MyVideoComponent />
    </View>
  );
};

export default HomeFeed;

const styles = StyleSheet.create({});
