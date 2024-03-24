import React from "react"; // Importa a biblioteca React
import {
  StyleSheet, // Importa a função StyleSheet para criar estilos
  Text, // Importa o componente Text do React Native
  View, // Importa o componente View do React Native
  Pressable, // Importa o componente Pressable do React Native
  TouchableOpacity, // Importa o componente TouchableOpacity do React Native
} from "react-native"; // Importa os componentes básicos do React Native

export default function App() { // Define o componente principal do aplicativo
  return (
    <View style={styles.container}> // Renderiza uma View com estilos definidos pelo objeto 'styles.container'
      <TouchableOpacity // Renderiza um TouchableOpacity, que é um botão de toque que muda de opacidade quando pressionado
        style={styles.touchOp} // Aplica estilos específicos definidos pelo objeto 'styles.touchOp' ao TouchableOpacity
        onPress={() => console.log("TouchableOpacity!")} // Define a função de callback a ser executada quando o TouchableOpacity for pressionado
      >
        <Text>TouchableOpacity</Text> // Renderiza um Text dentro do TouchableOpacity
      </TouchableOpacity>

      <Pressable // Renderiza um Pressable, que é um componente de toque com capacidade de detecção de pressão
        style={styles.press} // Aplica estilos específicos definidos pelo objeto 'styles.press' ao Pressable
        onPress={() => console.log("Pressable!")} // Define a função de callback a ser executada quando o Pressable for pressionado
      >
        <Text>Pressable</Text> // Renderiza um Text dentro do Pressable
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({ // Define os estilos do aplicativo usando o StyleSheet
  container: { // Estilos para a View que envolve os componentes
    flex: 1, // Define que a View deve ocupar todo o espaço disponível
    alignItems: "center", // Alinha os itens filhos ao centro no eixo transversal (horizontal)
    justifyContent: "center", // Alinha os itens filhos ao centro no eixo principal (vertical)
  },

  touchOp: { // Estilos específicos para o TouchableOpacity
    width: 200, // Largura do botão
    borderRadius: 30, // Borda arredondada
    backgroundColor: "#FF0000", // Cor de fundo
    padding: 10, // Espaçamento interno
    alignItems: "center", // Alinhamento dos itens ao centro
  },

  press: { // Estilos específicos para o Pressable
    width: 200, // Largura do botão
    borderRadius: 30, // Borda arredondada
    backgroundColor: "#FFFFFF", // Cor de fundo
    padding: 10, // Espaçamento interno
    alignItems: "center", // Alinhamento dos itens ao centro
    // Sombras específicas para Android
    elevation: 5, // Elevação da sombra
    // Sombras específicas para iOS
    shadowColor: "#000000", // Cor da sombra
    shadowOffset: {
      width: 0, // Deslocamento horizontal da sombra
      height: 2, // Deslocamento vertical da sombra
    },
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    marginTop: 20, // Margem superior
  },
});
