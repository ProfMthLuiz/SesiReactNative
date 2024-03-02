import { View, Text } from "react-native";
import { containerPerson, textPerson } from "../styles/StylesText";

function SecondComponent() {
  return (
    <View>
      <View style={containerPerson.container}>
        <Text style={textPerson.text}>
          Olá, me chamo <Text style={textPerson.textName}>Matheus!</Text>
        </Text>
      </View>
    </View>
  );
}

export default SecondComponent;
