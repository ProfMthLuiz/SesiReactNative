import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput, Modal } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();

  incrementCount = () => {
    setCount(count + 1);
  };

  decrementCount = () => {
    setCount(count - 1);
  };

  changeTxt = (name) => {
    setName(`Olá ${name}, bom dia. Tudo bom?`);
  };

  return (
    <View style={styles.container}>
      <Text>Contador: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button title="Decrement" onPress={decrementCount} />
      <TextInput
        placeholder="Digite seu nome"
        style={{
          width: 300,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
        }}
        onChangeText={changeTxt}
      />
      <Text>{name}</Text>
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
