import { StyleSheet, View, Button } from "react-native";

export default function App() {
  const buttonFunction = () => {
    alert("Você pressionou o botão!");
  };

  return (
    <View style={styles.container}>
      <Button
        // Define o texto exibido no botão
        title="Click"
        // Define a cor do botão (nesse caso, um tom de rosa)
        color="#f194ff"
        // Define a função a ser executada quando o botão é pressionado
        onPress={() => alert("Você pressionou o botão!")}
      />

      <Button
        // Define o texto exibido no botão
        title="Click"
        // Define a cor do botão (nesse caso, um tom de rosa)
        color="#f194ff"
        // Define a função a ser executada quando o botão é pressionado
        onPress={buttonFunction}
        // Define estilos adicionais para o botão (margem de 5 pixels)
        style={{ margin: 5 }}
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
});
