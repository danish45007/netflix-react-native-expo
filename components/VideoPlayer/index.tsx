import { Video } from "expo-av";
import { Playback } from "expo-av/build/AV";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Episode } from "../../types";
import styles from "./styles";

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ episode }) => {
  const video = React.useRef<Playback>(null);
  const [_, setStatus] = React.useState({});
  useEffect(() => {
    if (!video) return;
    (async () => {
      await video.current?.unloadAsync();
      await video.current?.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, [episode]);
  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        posterSource={{
          uri: episode.poster,
        }}
        posterStyle={{
          resizeMode: "cover",
        }}
        usePoster={true}
      />
    </View>
  );
};

export default VideoPlayer;
