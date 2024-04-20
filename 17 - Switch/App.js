import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const App = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtros</Text>

      <View style={styles.filter}>
        <Text style={styles.text}>Mostrar Favoritos</Text>
        <Switch value={showFavorites} onValueChange={(value) => setShowFavorites(value)} />
      </View>

      <View style={styles.filter}>
        <Text style={styles.text}>Mostrar Concluídos</Text>
        <Switch value={showCompleted} onValueChange={(value) => setShowCompleted(value)} />
      </View>

      <Text style={styles.result}>Filtros Ativos:</Text>
      {showFavorites && <Text>- Favoritos</Text>}
      {showCompleted && <Text>- Concluídos</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    marginRight: 10,
  },
});

export default App;
