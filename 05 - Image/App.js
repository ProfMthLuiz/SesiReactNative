import { StyleSheet, View, Image } from "react-native";

export default function App() {
  const imagem = {
    uri: "https://i.pinimg.com/236x/47/14/4b/47144be735f48cdf694b9b0a724272e9.jpg",
  };

  return (
    <View style={styles.container}>
      <Image
        // Define o estilo da imagem (altura de 300 pixels e largura de 150 pixels)
        style={{ height: 300, width: 150 }}
        // Define como a imagem deve ser redimensionada para se ajustar ao contêiner
        resizeMode="cover"
        // Define a fonte/caminho da imagem (pode ser um objeto de imagem ou um URI)
        source={imagem}
      />

      <Image
        // Define o estilo da imagem (altura de 50 pixels, largura de 50 pixels e redimensionamento para cobrir)
        style={{ height: 50, width: 50, resizeMode: "cover" }}
        // Define a fonte/caminho da imagem (neste caso, uma imagem importada localmente)
        source={require("./assets/favicon.png")}
      />
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
  imagem: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
});
