import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  const imagem = {
    uri: "https://i.pinimg.com/236x/47/14/4b/47144be735f48cdf694b9b0a724272e9.jpg",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imagem} resizeMode="cover" style={styles.imagem}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
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
    opacity: 0.5,
  },
});
