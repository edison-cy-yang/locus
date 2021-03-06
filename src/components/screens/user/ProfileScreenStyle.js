import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileInfoContainer: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  userPhotosContainer: {
    justifyContent: "space-evenly",
    flex: 3,
    backgroundColor: "#fff"
  },
  userName: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold"
  }
});

export default styles;
