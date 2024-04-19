import { View, Text, FlatList } from "react-native";
import { styles } from "./src/styles/Style";
import TxtComponent from "./src/componentes/TxtComponent";

// Função principal do aplicativo.
export default function App() {
  // Definindo os dados a serem exibidos na FlatList.
  const dados = [{ id: "1", component: <TxtComponent /> }];

  // Função para renderizar cada item da FlatList.
  const rdItem = ({ item }) => {
    // Retorna o componente específico do item.
    return item.component;
  };

  // Renderização do componente App.
  return (
    <View style={styles.container}>
      {/* Componente View para o cabeçalho. */}
      <View style={styles.header}></View>
      
      <FlatList
        horizontal={true}
        data={dados} // Recebe os dados a serem exibidos na lista.
        renderItem={rdItem} // Função para renderizar cada item da lista.
        keyExtractor={(dados) => dados.id} // Extrai a chave única de identificação de cada item.
      />
      
      {/* Componente View para o rodapé. */}
      <View style={styles.footer}></View>
    </View>
  );
}
