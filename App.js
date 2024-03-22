import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Modal } from "react-native";

export default function App() {
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir modal" onPress={() => visModal(true)} />

      <Modal transparent={true} animationType="fade" visible={visible}>
        <View style={styles.container}>
          <View
            style={{
              width: "50%",
              height: "50%",
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Button title="Fechar modal" onPress={() => visModal(false)} />
          </View>
        </View>
      </Modal>
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
