import { View, Text, FlatList } from "react-native";
import { styles } from "./src/styles/Style";
import TxtComponent from "./src/componentes/TxtComponent";

export default function App() {
  const dados = [
    { id: "1", backgroundColor: "red", text: "TEXTO" },
    { id: "2", backgroundColor: "pink", text: "TEXTO" },
    { id: "3", backgroundColor: "blue", text: "TEXTO" },
    { id: "4", backgroundColor: "yellow", text: "TEXTO" },
    { id: "5", backgroundColor: "green", text: "TEXTO" },
  ];

  // Função que renderiza os componentes Views (caixas) com seus respectivos Textos.
  // Recebe o objeto atual como argumento { item }.
  // O argumento está entre chaves {} devido à desestruturação, permitindo o acesso direto às propriedades do objeto.
  const rdItem = ({ item }) => (
    // Renderiza uma View com estilo combinado com o estilo da caixa (box) e o backgroundColor do item atual.
    <View style={[styles.box, { backgroundColor: item.backgroundColor }]}>
      {/* Renderiza um Texto com estilo definido por styles.txt e o texto do item atual. */}
      <Text style={styles.txt}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        data={dados} // Ele está recebendo todos os objetos do nosso array data
        renderItem={rdItem} // Chama a função para renderizar as Views box
        keyExtractor={(dados) => dados.id} // Extrair o id do objeto
      />
      <View style={styles.footer}></View>
    </View>
  );
}
