import { StyleSheet, Pressable, View } from "react-native";
import { Video } from "expo-av";
import { useRef, useState } from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import MyVideoRightComponent from "./MyVideoRightComponent";

import vid1 from "../assets/vid1.mp4";

const MyVideoComponent = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        ref={video}
        source={vid1}
        useNativeControls={false}
        resizeMode={"contain"}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

      <Pressable
        onPress={() =>
          status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
        style={styles.buttons}
      >
        <View>
          {status.isPlaying ? null : ( // <FontAwesome name="pause" size={50} color="white" />
            <AntDesign
              name="caretright"
              size={50}
              color="white"
              style={{ opacity: 0.5 }}
            />
          )}
        </View>
      </Pressable>
      <MyVideoRightComponent />
    </View>
  );
};

export default MyVideoComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 0,
  },
  video: {
    flex: 1,
    width: "100%",
    padding: 0,
    backgroundColor: "black",
  },
  buttons: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
