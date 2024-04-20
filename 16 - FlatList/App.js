import { View, Text, FlatList } from "react-native";
import { styles } from "./src/styles/styles";
import TxtComponent from "./src/components/TxtComponent";

function renderItem({ item }) {
  return item.component;
}

export default function App() {
  const data = [
    {
      id: 1,
      component: <TxtComponent txt="Primeiro Component" bckColor="red" />,
    },
    {
      id: 2,
      component: <TxtComponent txt="Segundo Component" bckColor="yellow" />,
    },
    {
      id: 3,
      component: <TxtComponent txt="Segundo Component" bckColor="blue" />,
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
