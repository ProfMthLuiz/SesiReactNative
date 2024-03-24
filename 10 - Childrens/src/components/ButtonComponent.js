import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default function ButtonComponent() {
  return (
    <TouchableOpacity
      style={styles.touchOp}
      onPress={() => alert("Botão pressionado!")}
    >
      <Text>TouchableOpacity</Text>
    </TouchableOpacity>
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
});
