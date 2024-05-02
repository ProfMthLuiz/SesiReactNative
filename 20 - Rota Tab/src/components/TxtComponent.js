import { StyleSheet, Text, View } from "react-native";

export default function TxtComponent({ bckColor, text }) {
  return (
    <View style={[styles.box, { backgroundColor: bckColor }]}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  box: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
