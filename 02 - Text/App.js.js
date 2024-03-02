// [colchetes, {chaves}, (parentes)
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>
        Seja bem-vindo <Text style={{ color: "red" }}>ao React Native!</Text>
      </Text>

      <Text style={{ textTransform: "uppercase" }}>
        Texto em maiúsculas
        <Text
          style={{
            textShadowColor: "rgba(0, 0, 0, 0.5)",
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 5,
          }}
        >
          Texto com sombra
        </Text>
      </Text>

      <Text>Seja bem-vindo ao React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
