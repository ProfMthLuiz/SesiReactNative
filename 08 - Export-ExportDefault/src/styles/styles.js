import { StyleSheet } from "react-native";

export const textStyle = StyleSheet.create({
  textColor: {
    color: "red",
    fontSize: 50,
  },
});

const containerPerson = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

const textPerson = StyleSheet.create({
  text: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    color: "purple",
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});

export default {
  containerPerson,
  textPerson,
};
