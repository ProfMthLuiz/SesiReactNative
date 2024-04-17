import { View, Text, FlatList } from "react-native";
import { styles } from "./src/styles/Style";
import TxtComponent from "./src/componentes/TxtComponent";

export default function App() {
  const dados = [{ id: "1", component: <TxtComponent /> }];

  const rdItem = ({ item }) => {
    return item.component;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        horizontal={true}
        data={dados} // Ele está recebendo todos os objetos do nosso array data
        renderItem={rdItem} // Chama a função para renderizar as Views box
        keyExtractor={(dados) => dados.id} // Extrair o id do objeto
      />
      <View style={styles.footer}></View>
    </View>
  );
}
