import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [selectedPizza, setSelectedPizza] = useState(null);

  const pizzas = [
    { key: 1, sabor: "Calabresa", valor: 59.9 },
    { key: 2, sabor: "Frango com Catupiry", valor: 65.0 },
    { key: 3, sabor: "Portuguesa", valor: 41.0 },
    { key: 4, sabor: "Marguerita", valor: 35.5 },
    { key: 5, sabor: "Nutella", valor: 80.0 },
  ];

  let pizzasItem = pizzas.map((pizza, index) => (
    <Picker.Item key={index} value={index} label={pizza.sabor} />
  ));

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedPizza}
        onValueChange={(itemValue) => setSelectedPizza(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        {pizzasItem}
      </Picker>

      {/* Exibe detalhes da pizza selecionada se houver uma selecionada */}
      {selectedPizza !== null ? (
        <Text style={styles.text}>
          Pizza Selecionada:{" "}
          <Text style={styles.textPizza}>{pizzas[selectedPizza].sabor}</Text>
          {" - "}
          <Text style={styles.textPrice}>R$ {pizzas[selectedPizza].valor}</Text>
        </Text>
      ) : (
        <Text style={styles.text}>Pizza Selecionada: {" - "}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  picker: {
    width: "80%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
  },
  pickerItem: {
    fontSize: 16,
    color: "blue",
  },
  text: {
    marginTop: 20,
    fontWeight: "bold",
  },
  textPizza: {
    fontWeight: "200",
  },
  textPrice: {
    fontWeight: "normal",
  },
});
