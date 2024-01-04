import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MyVideoLeftComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Component</Text>
    </View>
  );
};

export default MyVideoLeftComponent;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    right: 0,
    backgroundColor: "red",
    height: "85%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
