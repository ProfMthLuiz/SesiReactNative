import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: "#FFF" }]}>
      {/* ESTILIZAÇÃO POR LINHA E GRUPO */}

      <View style={styles.sectionCards}>
        {/* ESTILIZAÇÃO POR GRUPO */}

        <View style={styles.card}>
          <Text style={{ color: "gray" }}>Hello React Native</Text>
          {/* ESTILIZAÇÃO POR LINHA */}
        </View>

        <View style={styles.card}>
          <Text style={{ color: "gray" }}>Hello React Native</Text>
          {/* ESTILIZAÇÃO POR LINHA */}
        </View>

        <View style={[styles.card, styles.cardShadow]}>
          {/* MULTIPLOS ESTILOS DE GRUPO */}

          <Text style={{ color: "gray" }}>Hello React Native</Text>
          {/* ESTILIZAÇÃO POR LINHA */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionCards: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    width: 100,
    height: "80%",
    borderRadius: 8,
  },
  cardShadow: {
    elevation: 5, // Adiciona sombra ao componente, está disponível apenas no Android
    shadowColor: "black", // Cor da sombra
    shadowOffset: { width: 5, height: 5 }, // Deslocamento horizontal e vertical
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 3, // Raio da sombra
  },
});
