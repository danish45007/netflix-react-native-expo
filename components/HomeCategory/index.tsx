import * as React from "react";
import styles from "./styles";
import { Text } from "../../components/Themed";
import { Image, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}

const HomeCategory: React.FC<HomeCategoryProps> = ({ category }) => {
  const Navigation = useNavigation();
  const onPressMovie = (movie: any) => {
    Navigation.navigate("MovieDetailScreen", {
      id: movie.id,
    });
  };
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => onPressMovie(item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
