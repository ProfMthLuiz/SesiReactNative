import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { lightMode, darkMode, image } from "./src/styles/Style";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <View style={isDarkMode ? darkMode.container : lightMode.container}>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Image
          source={
            isDarkMode
              ? require("./src/assets/images/lampAcessa.png")
              : require("./src/assets/images/lampApagada.png")
          }
          style={image.switchImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
