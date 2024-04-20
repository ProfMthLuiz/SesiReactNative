import { View, Text, FlatList } from "react-native";
import { styles } from "./src/styles/styles";

function renderItem({ item }) {
  return (
    <View
      style={{
        backgroundColor: item.bckColor,
        height: 250,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{item.txt}</Text>
    </View>
  );
}

export default function App() {
  const data = [
    {
      id: 1,
      bckColor: "red",
      txt: "Primeiro component",
    },
    {
      id: 2,
      bckColor: "blue",
      txt: "Segundo component",
    },
    {
      id: 3,
      bckColor: "yellow",
      txt: "Terceiro component",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <View style={styles.footer}></View>
    </View>
  );
}
