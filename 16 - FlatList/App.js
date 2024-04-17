import { View, Text, FlatList } from "react-native";
import { styles } from "./src/styles/Style";

export default function App() {
  const data = [
    { id: "1", backgroundColor: "red" },
    { id: "2", backgroundColor: "pink" },
    { id: "3", backgroundColor: "blue" },
    { id: "4", backgroundColor: "yellow" },
    { id: "5", backgroundColor: "green" },
  ];

  // Renderiza os Componentes Views(box) com seu respectivo Texto.
  // Recebe nosso array de objeto, nomeado como data!
  const renderItem = ({ item }) => (
    <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.txt}>React Native!</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        data={data} // Ele está recebendo todos os objetos do nosso array data
        renderItem={renderItem} // Chama a função para renderizar as Views box
        keyExtractor={(data) => data.id} // Extrair o id do objeto
      />
      <View style={styles.footer}></View>
    </View>
  );
}
