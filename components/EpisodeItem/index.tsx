import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Episode } from "../../types";
import styles from "./styles";

interface EpisodeItemProps {
  episode: Episode;
  onPress: (episode: Episode) => {};
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode, onPress }) => {
  return (
    <Pressable style={{ marginVertical: 10 }} onPress={() => onPress(episode)}>
      {/* Image & Title */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image style={styles.image} source={{ uri: episode.poster }} />
        {/* title & duration */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name="download" color="white" size={24} />
      </View>
      {/* Plot */}
      <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );
};

export default EpisodeItem;
