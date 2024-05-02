import { StyleSheet } from "react-native";

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

const btnStyles = StyleSheet.create({
  touchCalc: {
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    padding: 10,
    borderRadius: 10,
  },
});

const txtInputStyles = StyleSheet.create({
  txtInput: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFF",
    width: "80%",
    marginBottom: 15,
  },
});

const textStyles = StyleSheet.create({
  txtTitle: {
    fontSize: 40,
    color: "#FFF",
    letterSpacing: 1,
    fontWeight: 700,
    marginBottom: 15,
  },

  txt: {
    fontSize: 25,
    color: "#FFF",
    marginBottom: 15,
  },

  txtTouch: {
    fontSize: 20,
    letterSpacing: 1.5,
    fontWeight: 600,
    color: "#FFF",
  },
});

const imgStyles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "#ff0000",
    marginBottom: 15,
  },
});

const modStyles = StyleSheet.create({
  mod: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalStyle: {
    height: "90%",
    width: "90%",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  txtPrincipalModal: {
    fontSize: 40,
    color: "#7FFF00",
    letterSpacing: 0.8,
    fontWeight: "bold",
    marginBottom: 10,
  },

  txtTitleModal: {
    fontSize: 30,
    color: "#000",
    letterSpacing: 1,
    marginBottom: 10,
  },

  txtModal: {
    fontSize: 20,
    marginBottom: 10,
    color: "#000",
    fontWeight: "bold",
  },
});

export default {
  containerStyles,
  btnStyles,
  txtInputStyles,
  textStyles,
  imgStyles,
  modStyles,
};
