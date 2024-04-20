import { StyleSheet } from "react-native";

export const lightMode = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: "#000",
  },
});

export const darkMode = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: "#fff",
  },
});

export const image = StyleSheet.create({
  switchImage: {
    height: 80,
    width: 80,
  },
});
