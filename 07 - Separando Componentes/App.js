import SecondComponent from "./src/components/SecondComponent";
import { StyleSheet, View, Text } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <FirstComponent />
      <SecondComponent />
    </View>
  );
}

const FirstComponent = () => (
  <View>
    <Text>Primeiro componente</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
