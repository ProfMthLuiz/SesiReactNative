import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
