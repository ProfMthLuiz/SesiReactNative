import { StyleSheet, Text, View } from "react-native";

import { useFonts } from "expo-font";

import { useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
    "Jacquard24-Regular": require("./src/assets/fonts/Jacquard24-Regular.ttf"),
  });

  const [notLoadedFont, setNotLoadedFont] = useState(false);

  if (!fontsLoaded) {
    setNotLoadedFont(true);
  }

  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: notLoadedFont ? "" : "Roboto-Bold", fontSize: 30 }}
      >
        Roboto Bold
      </Text>
      <Text
        style={{
          fontFamily: notLoadedFont ? "" : "Roboto-Light",
          fontSize: 30,
        }}
      >
        Roboto-Light
      </Text>
      <Text
        style={{
          fontFamily: notLoadedFont ? "" : "Jacquard24-Regular",
          fontSize: 30,
        }}
      >
        Jacquard24-Regular
      </Text>
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
