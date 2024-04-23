import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("Java");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="JavaScript" value="JavaScript" />
        <Picker.Item label="PHP" value="PHP" />
        <Picker.Item label="React Native" value="React Native" />
      </Picker>
      <Text style={styles.text}>
        Linguagem: <Text style={styles.textLanguage}>{selectedLanguage}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    width: 200,
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
  textLanguage: {
    fontWeight: "200",
  },
});
