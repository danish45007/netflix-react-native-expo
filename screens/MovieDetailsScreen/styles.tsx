import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  match: {
    color: "#00aa00",
    fontWeight: "bold",
    marginRight: 10,
  },
  year: {
    color: "#757575",
    marginRight: 10,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 10,
  },
  title: {
    padding: 5,
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    color: "gray",
  },
  playButton: {
    marginVertical: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
  },
  playButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  playIcon: {
    marginRight: 10,
  },
  downloadButton: {
    marginVertical: 5,
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
  },
  downloadButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  plot: {
    padding: 5,
    fontSize: 13,
  },
  cast: {
    padding: 5,
    color: "#757575",
    fontSize: 12,
  },
  creator: {
    paddingLeft: 5,
    // paddingTop: 1,
    color: "#757575",
    fontSize: 12,
  },
  plus: {
    padding: 10,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  plusText: {
    fontSize: 12,
    fontWeight: "300",
    color: "#757575",
  },
  plusRate: {
    fontSize: 12,
    fontWeight: "300",
    color: "#757575",
    paddingTop: 5,
  },
});

export default styles;
