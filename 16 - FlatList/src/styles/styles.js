import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Preencha todo o espaço que esta vazio/sobrando
  },

  header: {
    height: 80, // Define a altura do HEADER
    backgroundColor: "black", // Define a cor de fundo
  },

  box: {
    height: 250, // Define a altura dos componentes box
    padding: 20, // Espaçamento interno
    alignItems: "center", // Centraliza o que estiver dentro da BOX
    justifyContent: "center", // Centraliza o que estiver dentro da BOX
  },

  txt: {
    fontSize: 30, // Define o tamanho da fonte
    fontWeight: 700, // Define a " largura " da fonte
  },

  footer: {
    height: 100, // Define a altura do componente Footer
    backgroundColor: "black", // Define a cor de fundo
  },
});
