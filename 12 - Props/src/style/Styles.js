import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  touchBtn: {
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 80,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",

    // Sombras específicas para Android
    elevation: 5, // Elevação da sombra
    // Sombras específicas para iOS
    shadowColor: "#FF4500", // Cor da sombra
    shadowOffset: {
      width: -1, // Deslocamento horizontal da sombra
      height: 1, // Deslocamento vertical da sombra
    },
    shadowOpacity: 0.75, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
  },

  textBtn: {
    letterSpacing: 1,
    color: "#FF4500",
    fontSize: 25,
    fontWeight: 500,
  },
});
