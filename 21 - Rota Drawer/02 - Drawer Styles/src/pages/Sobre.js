import { StyleSheet, Text, View } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 250,
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "#000",
  },
  footer: {
    height: 50,
    width: "100%",
    backgroundColor: "#000",
  },
});
