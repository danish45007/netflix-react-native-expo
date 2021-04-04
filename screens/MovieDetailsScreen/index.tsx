import React, { useState } from "react";
import { Image, Pressable, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import movies from "../../assets/data/movie";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
const firstSeason = movies.seasons.items[0];
import { Picker } from "@react-native-picker/picker";
import VideoPlayer from "../../components/VideoPlayer";
const seasonNames = movies.seasons.items.map((season) => season.name);

const index = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(
    firstSeason.episodes.items[0]
  );
  return (
    <View>
      {/* <Image style={styles.image} source={{ uri: firstEpisode.poster }} /> */}
      <VideoPlayer episode={currentEpisode} />
      <Text style={styles.title}>{movies.title}</Text>

      {/* Episode List */}
      <>
        <FlatList
          data={currentSeason.episodes.items}
          renderItem={({ item }) => (
            <EpisodeItem episode={item} onPress={setCurrentEpisode} />
          )}
          style={{ marginBottom: 250, padding: 10 }}
          ListHeaderComponent={
            <>
              <View style={{ padding: 12, flexDirection: "row" }}>
                <Text style={styles.match}>98% match</Text>
                <Text style={styles.year}>{movies.year}</Text>
                <View style={styles.ageContainer}>
                  <Text style={styles.age}>12+</Text>
                </View>
                <Text style={styles.year}>
                  {movies.numberOfSeasons} Seasons
                </Text>
                <MaterialIcons
                  style={styles.icon}
                  name="hd"
                  size={24}
                  color="white"
                />
              </View>
              {/* Play button */}
              <View style={{ paddingTop: 5 }}>
                <Pressable
                  onPress={() => console.warn("Play")}
                  style={styles.playButton}
                >
                  <Text style={styles.playButtonText}>
                    <FontAwesome
                      style={styles.playIcon}
                      name="play"
                      size={15}
                      color="black"
                    />{" "}
                    Play
                  </Text>
                </Pressable>
                {/* Download button */}
                <Pressable
                  onPress={() => console.warn("download")}
                  style={styles.downloadButton}
                >
                  <Text style={styles.downloadButtonText}>
                    <AntDesign name="download" size={15} color="white" />{" "}
                    Download
                  </Text>
                </Pressable>
              </View>
              {/* Plot */}
              <Text style={styles.plot}>{movies.plot}</Text>
              <Text style={styles.cast}>Cast: {movies.cast}</Text>
              <Text style={styles.creator}>Creator: {movies.creator}</Text>
              {/* Row Icons */}
              <View style={{ flexDirection: "row" }}>
                {/* Plus-Icon */}
                <View style={styles.plus}>
                  <Entypo name="plus" size={30} color="white" />
                  <Text style={styles.plusText}>My List</Text>
                </View>
                {/* rate-Icon */}
                <View style={styles.plus}>
                  <Fontisto name="like" size={20} color="white" />
                  <Text style={styles.plusRate}>Rate</Text>
                </View>
                {/* Share-Icon */}
                <View style={styles.plus}>
                  <Entypo name="paper-plane" size={24} color="white" />
                  <Text style={styles.plusRate}>Share</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={styles.episodeText}>EPISODE</Text>
                <Text style={styles.extraText}>MORE LIKE THIS</Text>
              </View>

              <View style={{}}>
                <Picker
                  selectedValue={currentSeason.name}
                  onValueChange={(_, itemIndex) => {
                    setCurrentSeason(movies.seasons.items[itemIndex]);
                  }}
                  style={{ color: "white", width: 130 }}
                  dropdownIconColor={"white"}
                >
                  {seasonNames.map((seasonName) => (
                    <Picker.Item
                      key={seasonName}
                      label={seasonName}
                      value={seasonName}
                    />
                  ))}
                  {/* <AntDesign name="down" size={18} color="white" /> */}
                </Picker>
              </View>
            </>
          }
        />
      </>
    </View>
  );
};

export default index;
