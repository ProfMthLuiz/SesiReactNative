import { StyleSheet, Text, View, Button } from "react-native";

// Quando você utiliza useNavigation() em um componente, ele retorna a instância de navegação associada ao componente.
// Isso permite que você acesse métodos de navegação, como navigate, goBack, push, etc.
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Ir para sobre"
        onPress={() => navigation.navigate("Sobre")}
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
  },
});
