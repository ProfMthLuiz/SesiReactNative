import { Button, StyleSheet, Text, View } from "react-native";

export default function TxtComponent({ texto, tituloBtn, clickBtn }) {
  return (
    <View style={styles.container}>
      <Text>{texto}</Text>
      <Button title={tituloBtn} onPress={clickBtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
