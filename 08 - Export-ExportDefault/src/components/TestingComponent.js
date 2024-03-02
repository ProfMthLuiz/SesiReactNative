import { Text, View } from "react-native";
import { textStyle } from "../styles/styles";
import styles from "../styles/styles";

export default function TestingComponent() {
  return (
    <View style={styles.containerPerson.container}>
      <Text style={styles.textPerson.textName}>Import com export default</Text>
      <Text style={textStyle.textColor}>Import com export const</Text>
    </View>
  );
}
