import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchOp}
        onPress={() => console.log("TouchableOpacity!")}
      >
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>

      <Pressable style={styles.press} onPress={() => console.log("Pressable!")}>
        <Text>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  touchOp: {
    width: 200,
    borderRadius: 30,
    backgroundColor: "#FF0000",
    padding: 10,
    alignItems: "center",
  },

  press: {
    width: 200,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    padding: 10,
    alignItems: "center",
    // Sombras específicas para Android
    elevation: 5,
    // Sombras específicas para iOS
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 20,
  },
});
