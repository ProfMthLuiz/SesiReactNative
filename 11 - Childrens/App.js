import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./src/components/ButtonComponent";

// Esta é a função principal do componente App
export default function App() {
  // Retorna um componente HeaderComponent que envolve outros componentes e conteúdo
  return (
    <HeaderComponent>
      <Text>Eu sou um componente filho do HeaderComponent</Text>
      <ButtonComponent />
    </HeaderComponent>
  );
}

// Esta é uma função que define um componente chamado HeaderComponent
// Ela recebe um parâmetro chamado 'children', que é um padrão do React
// para representar o conteúdo dentro do componente
function HeaderComponent({ children }) {
  // Retorna um componente View que contém um texto "Header Component" e o conteúdo que foi passado para ele
  return (
    <View style={styles.container}>
      <Text>Header Component</Text>
      {children}
      {/* Aqui, {children} representa o conteúdo que foi passado para o componente HeaderComponent */}
    </View>
  );
}

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
