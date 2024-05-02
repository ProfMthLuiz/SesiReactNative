import { View, Text, StyleSheet } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <FontAwesome size={50} color="brown" name="envelope" />
      <FontAwesome size={50} color="yellow" name="eye" />
      <AntDesign name="stepforward" size={50} color="black" />
      <Ionicons name="md-checkmark-circle" size={50} color="green" />
      <FontAwesome size={50} color="red" name="facebook" />
      <Text style={{ fontSize: 50 }}>acebook</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
