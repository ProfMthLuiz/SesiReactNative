import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { lightMode, darkMode } from "./src/styles/Style";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={isDarkMode ? darkMode.container : lightMode.container}>
      <Text style={isDarkMode ? darkMode.text : lightMode.text}>
        Modo {isDarkMode ? "Escuro" : "Claro"}
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={(value) => setIsDarkMode(value)}
      />
    </View>
  );
};

export default App;
