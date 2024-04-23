# React Native

:round_pushpin: - [Comandos](#-comandos-utilizados-em-react-native) <br>
:round_pushpin: - [Export x Export Default](#-explicação-sobre-export-e-export-default) <br>
:round_pushpin: - [Rota Stack](#-explicação-sobre-rota-stack) <br>
:round_pushpin: - [Componentes Filhos (Childrens)](#-explicação-sobre-childrens--componentes-filhos-) <br>
:round_pushpin: - [Props (Propriedades)](#-explicação-sobre-props--propriedades-) <br>
:round_pushpin: - [Hooks](#-explicação-sobre-hooks) <br>
:round_pushpin: - [Modal](#-explicação-sobre-modal) <br>
:round_pushpin: - [FlatList](#-explicação-sobre-flatlist) <br>
:round_pushpin: - [Map](#-explicação-sobre-map) <br>
:round_pushpin: - [Find](#-explicação-sobre-find) <br>
<br><br><br>



## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="30"/> Comandos utilizados em React Native
&ensp; &ensp; ``` npx create-expo-app nomedoseuapp ``` <br>
&ensp; &ensp; 🚀 Cria um novo projeto Expo. <br> <br>

&ensp; &ensp; ``` npx expo start ``` <br>
&ensp; &ensp; ▶️ Inicia o projeto. <br> <br>

&ensp; &ensp; ``` npx expo start --tunnel ```<br>
&ensp; &ensp; 🔗 Inicia o projeto com suporte a conexões externas. <br> <br>

&ensp; &ensp; ``` npx expo install react-native-web react-dom @expo/metro-runtime ``` <br>
&ensp; &ensp; 🔧 Instala as dependências necessárias para executar o aplicativo no navegador. <br> <br> 

&ensp; &ensp; ``` npx expo start --web ``` <br>
&ensp; &ensp; 🌐 Inicia o servidor de desenvolvimento no ambiente web. <br> <br>

&ensp; &ensp; ``` npm install @react-navigation/native ``` <br>
&ensp; &ensp; 🔖 Instala o pacote em seu projeto, que fornece as funcionalidades básicas para navegação. <br> <br>

&ensp; &ensp; ``` npx expo install react-native-screens react-native-safe-area-context ``` <br>
&ensp; &ensp; 📱 Instala dependências necessárias para o correto funcionamento do React Navigation em projetos Expo. <br> <br>

&ensp; &ensp; ``` npm install @react-navigation/native-stack ``` <br>
&ensp; &ensp; ↔️ Instala o pacote Stack que gerencia a navegação entre diferentes telas. <br> <br> <br>


## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitbook/gitbook-original.svg" width="40" height="40" /> Explicação sobre export e export default<br>

No JavaScript, há duas formas de exportar funcionalidades de um arquivo, você pode utilizar <strong>export</strong> ou <strong>export default</strong>.  <br><br>
- <strong>export</strong>: <br>
Quando você exporta uma constante, função ou classe usando apenas <strong>export</strong>, você precisa importá-la exatamente pelo nome que foi exportado, e, para importar múltiplas coisas, você precisa envolvê-las entre chaves {}, exemplo:
```
// Arquivo1.js
export const minhaFuncao = () => {
    // código da função
};

// Arquivo2.js
import { minhaFuncao } from './Arquivo1';
```
- <strong>export default:</strong> <br>
Quando você usa <strong>export default</strong>, você está exportando uma única coisa que será considerada como o valor padrão do arquivo. Isso significa que quando você importa, você pode dar a esse valor o nome que desejar, não precisando envolvê-lo entre chaves, exemplo:

```
// Arquivo1.js
const meuValorPadrao = 10;
export default meuValorPadrao;

// Arquivo2.js
import qualquerNome from './Arquivo1';
```       
<br> <br> <br>



## <img src="https://cdn-icons-png.flaticon.com/128/8146/8146725.png" width="40" height="40" /> Explicação sobre Rota Stack

A Rota Stack se refere a uma forma de navegação entre diferentes telas ou componentes em um aplicativo móvel. É uma abordagem comumente usada para criar uma estrutura de navegação hierárquica, onde as telas são empilhadas uma sobre a outra, permitindo que o usuário navegue para frente e para trás entre elas, como em uma pilha de cartas.

Quando você utiliza a Rota Stack, cada tela ou componente é considerado uma "rota" dentro do aplicativo. Quando o usuário navega para uma nova tela, ela é empilhada sobre a tela atual. Isso permite que o usuário volte à tela anterior, desempilhando-a, ou avance para uma nova tela, empilhando-a sobre a tela atual.

<strong>Para iniciar um projeto e instalar os pacotes para utilizar a Rota Stack, você deve utilizar os seguintes comandos:</strong>

```
1º - npx create-expo-app nameYourApp
2º - npm install @react-navigation/native
3º - npx expo install react-native-screens react-native-safe-area-context
4º - npm install @react-navigation/native-stack
5º - npx expo install react-native-web react-dom @expo/metro-runtime
```
<br> <br> <br>



## <img src="https://cdn-icons-png.flaticon.com/128/135/135031.png" width="40" height="40" /> Explicação sobre childrens ( Componentes Filhos )<br>

O uso de {} no React é para interpolar expressões JavaScript dentro do JSX (JavaScript XML). Quando você passa {} em JSX, está basicamente dizendo ao React que avalie a expressão dentro desses {} e insira o resultado no lugar. No caso específico do {children}, você está passando o conteúdo que foi inserido dentro do componente <HeaderComponent> no componente pai <App>.

Por exemplo, quando você faz:

```
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonComponent from "./src/components/ButtonComponent";

export default function App() {
  return (
    <HeaderComponent>
      <Text>Eu sou um componente filho do HeaderComponent</Text>
      <ButtonComponent />
    </HeaderComponent>
  );
}

function HeaderComponent({ children }) {
  return (
    <View style={styles.container}>
      <Text>Header Component</Text>
      {children}
    </View>
  );
}

```

Todo o conteúdo dentro das tags <HeaderComponent> é passado para a função HeaderComponent como children. E dentro da função, {children} é onde esse conteúdo é renderizado. Isso permite que você crie componentes reutilizáveis e flexíveis no React, onde o conteúdo pode variar de uma instância para outra.

<br> <br> <br>



## <img src="https://cdn-icons-png.flaticon.com/512/1804/1804046.png" width="40" height="40" /> Explicação sobre props ( Propriedades )<br>

Em React Native, "props" (abreviação de propriedades) são maneiras de passar dados de um componente para outro. Eles são usados para configurar e personalizar componentes, permitindo que você transmita informações de um lugar para outro dentro da sua aplicação. As props são passadas para os componentes como parâmetros e podem conter qualquer tipo de dado, desde strings e números até funções e objetos complexos. As props ajudam a tornar os componentes mais reutilizáveis e flexíveis, facilitando a personalização e a manutenção do código. <br><br>
<strong>Exemplo:</strong>
```
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const greetUser = (name) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <GreetingMessage name="John" onPress={greetUser} />
      <GreetingMessage name="Jane" onPress={greetUser} />
    </View>
  );
};

const GreetingMessage = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Hello, {name}!</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  messageContainer: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;

```
<br> <br> <br>



## <img src="https://cdn-icons-png.flaticon.com/512/3111/3111305.png" width="40" height="40" /> Explicação sobre Hooks<br>
Em React Native, um hook é uma característica introduzida no React na versão 16.8 que permite adicionar estado e comportamento de ciclo de vida a componentes funcionais. Antes dos hooks, os componentes funcionais eram limitados em funcionalidades, não podendo gerenciar estado interno ou utilizar métodos de ciclo de vida.

Com os hooks, como useState, useEffect, useContext e outros, os desenvolvedores podem agora utilizar funcionalidades anteriormente reservadas para componentes de classe diretamente em componentes funcionais. Por exemplo, o hook useState permite que um componente funcional tenha seu próprio estado interno, enquanto useEffect permite executar efeitos secundários, como chamadas de API, manipulação de DOM, inscrições de eventos, etc.

Os hooks proporcionam uma maneira mais simples e intuitiva de escrever componentes em React Native, reduzindo a necessidade de classes e tornando o código mais limpo e legível. Além disso, eles promovem a reutilização de lógica de estado e efeitos entre componentes, facilitando a manutenção e o desenvolvimento de aplicativos React Native.

```
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  // Definindo um estado inicial para a variável count
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contador: {count}</Text>
      <Button
        title="Incrementar"
        onPress={() => setCount(count + 1)} // Atualizando o estado de count ao pressionar o botão
      />
    </View>
  );
}

```

<br> <br> <br>



## <img src="https://pluginicons.craft-cdn.com/modal-component.svg?1655234971" width="40" height="40" /> Explicação sobre Modal<br>


Um modal em React Native é uma janela sobreposta que aparece na parte superior da tela atual, geralmente para exibir conteúdo secundário ou solicitar interação do usuário. Ele é útil para exibir informações temporárias, como mensagens de confirmação, formulários de entrada de dados ou detalhes adicionais sobre um item.

Os modais são úteis porque interrompem temporariamente a interação do usuário com o restante da interface, direcionando toda a atenção para o conteúdo exibido no modal. Eles são implementados usando o componente Modal fornecido pelo React Native, que oferece controle sobre quando o modal é exibido ou oculto.

```
import React, { useState } from 'react';
import { View, Text, Modal, Button } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Abrir Modal"
        onPress={() => setModalVisible(true)} // Exibir o modal ao pressionar o botão
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Fechar o modal ao pressionar o botão "Voltar" no Android
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Este é um modal simples.</Text>
            <Button
              title="Fechar Modal"
              onPress={() => setModalVisible(false)} // Fechar o modal ao pressionar o botão
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

```

<br> <br> <br>

## <img src="https://pluginicons.craft-cdn.com/modal-component.svg?1655234971" width="40" height="40" /> Explicação sobre FlatList<br>

<br> <br> <br>

## <img src="https://pluginicons.craft-cdn.com/modal-component.svg?1655234971" width="40" height="40" /> Explicação sobre Map<br>

<br> <br> <br>

## <img src="https://pluginicons.craft-cdn.com/modal-component.svg?1655234971" width="40" height="40" /> Explicação sobre Find<br>

<br> <br> <br>
