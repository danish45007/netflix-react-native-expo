import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 3,
  },
  plot: {
    color: "#757575",
    padding: 5,
  },
  title: {
    color: "white",
  },
  duration: {
    color: "#757575",
    fontSize: 13,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    marginLeft: 5,
  },
});

export default styles;
