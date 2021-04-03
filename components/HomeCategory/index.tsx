import * as React from "react";
import styles from "./styles";
import { Text } from "../../components/Themed";
import { Image, FlatList } from "react-native";

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
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal
      />
    </>
  );
};

export default HomeCategory;
