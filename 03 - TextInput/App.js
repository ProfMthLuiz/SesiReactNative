import { StyleSheet, View, TextInput } from "react-native";

export default function App() {
  changeText = () => {
    alert("HELLO!");
  };
  return (
    <View style={styles.container}>
      <TextInput placeholder="Digite seu nome" value="" />

      <TextInput
        style={[styles.textInput1, { borderWidth: 1 }]}
        placeholder="Digite seu nome"
        value=""
      />

      <TextInput
        style={[styles.textInput2, { borderWidth: 2 }]}
        placeholder="Digite seu nome"
      />

      <TextInput
        style={[styles.textInput3, { borderWidth: 0 }]}
        placeholder="Digite seu nome"
      />

      <TextInput
        style={[
          styles.textInput4,
          { borderBottomWidth: 1, borderRightWidth: 1 },
        ]}
        // Define o texto de espaço reservado (placeholder) que será exibido quando o campo estiver vazio
        placeholder="Digite sua senha"
        // Define que o texto digitado será oculto (útil para senhas)
        secureTextEntry={true}
        // Define a cor do texto de espaço reservado
        placeholderTextColor="red"
        // Define o modo de entrada do teclado (apenas números)
        inputMode={numeric}
        // Define se a primeira letra de cada palavra deve ser automaticamente capitalizada
        autoCapitalize="characters"
        // Permite entrada de múltiplas linhas de texto (não muito comum em campos de senha)
        multiline={true}
        // Função de retorno de chamada que será chamada quando o texto dentro do componente mudar
        onChangeText={changeText}
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
  textInput1: {
    marginTop: 15,
    borderRadius: 20,
    padding: 10,
    borderColor: "gray",
  },
  textInput2: {
    textAlign: "center",
    marginTop: 15,
    width: "100%",
    borderRadius: 20,
    padding: 10,
    borderColor: "red",
  },
  textInput3: {
    textAlign: "center",
    marginTop: 15,
    width: "100%",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  textInput4: {
    textAlign: "center",
    marginTop: 15,
    width: "100%",
    padding: 10,
  },
});
