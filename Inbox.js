import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,225,232,0.2)",
  },
});
