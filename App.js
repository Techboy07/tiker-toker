import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeFeed from "./screens/HomeFeed.js";
import Profile from "./screens/Profile.js";
import Discover from "./screens/Discover.js";
import Inbox from "./Inbox.js";

import {
  Fontisto,
  Octicons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="dark" />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "rgba(0,0,0,1)",
            position: "absolute",
            borderTopColor: "rgba(0,0,0,1)",
            borderTopWidth: 1,
            elevation: 0,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={HomeFeed}
          options={{
            tabBarIcon: () => <Fontisto name="home" size={24} color="white" />,
          }}
        />
        <Tab.Screen
          name="Friends"
          component={Discover}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="user-friends" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="create"
          component={Discover}
          options={{
            tabBarIcon: () => (
              <Feather name="plus-square" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="message-minus-outline"
                size={24}
                color="white"
              />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Octicons name="person" size={24} color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(0,0,0)",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
