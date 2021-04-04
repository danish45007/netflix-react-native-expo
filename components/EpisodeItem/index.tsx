import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

interface EpisodeItemProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode }) => {
  return (
    <View style={{ marginVertical: 10 }}>
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
    </View>
  );
};

export default EpisodeItem;
