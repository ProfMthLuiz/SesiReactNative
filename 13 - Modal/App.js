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
      {/* true or false*/}
      <Modal transparent={true} animationType="fade" visible={visible}>
        <Text>SEVIRA!</Text>
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
