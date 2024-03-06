import { StyleSheet, Text, View, Button } from "react-native";

// Quando você utiliza useNavigation() em um componente, ele retorna a instância de navegação associada ao componente.
// Isso permite que você acesse métodos de navegação, como navigate, goBack, push, etc.
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>

      <Button
        title="Ir para home"
        onPress={() => navigation.navigate("Home")}
      />

      <Button title="Voltar para home" onPress={() => navigation.goBack()} />
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
