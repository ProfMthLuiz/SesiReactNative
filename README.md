# React Native

[:round_pushpin: - Comandos](#-comandos-utilizados-em-react-native) <br>
[:round_pushpin: - Export x Export Default](#-explicação-sobre-export-e-export-default) <br>
[:round_pushpin: - Rota Stack](#-rota-stack) <br>
[:round_pushpin: - Componentes Filhos (Childrens)](#-explicação-sobre-childrens--componentes-filhos-) <br>

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="30"/> Comandos utilizados em React Native
&ensp; &ensp; ``` npx create-expo-app nomedoseuapp ``` <br>
&ensp; &ensp; 🚀 Cria um novo projeto Expo. <br> <br>

&ensp; &ensp; ``` npx expo start ``` <br>
&ensp; &ensp; ▶️ Inicia o projeto. <br> <br>

&ensp; &ensp; ``` npx expo start --tunnel ```<br>
&ensp; &ensp; 🔗 Inicia o projeto com suporte a conexões externas. <br> <br>

&ensp; &ensp; ``` npx expo start --web ``` <br>
&ensp; &ensp; 🌐 Inicia o servidor de desenvolvimento no ambiente web. <br> <br>

&ensp; &ensp; ``` npm install @react-navigation/native ``` <br>
&ensp; &ensp; 🔖 Instala o pacote em seu projeto, que fornece as funcionalidades básicas para navegação. <br> <br>

&ensp; &ensp; ``` npx expo install react-native-screens react-native-safe-area-context ``` <br>
&ensp; &ensp; 📱 Instala dependências necessárias para o correto funcionamento do React Navigation em projetos Expo. <br> <br>

&ensp; &ensp; ``` npm install @react-navigation/native-stack ``` <br>
&ensp; &ensp; ↔️ Instala o pacote Stack que gerencia a navegação entre diferentes telas. <br> <br>

&ensp; &ensp; ``` npx expo install react-native-web react-dom @expo/metro-runtime ``` <br>
&ensp; &ensp; 🔧 Instala as dependências necessárias para executar o aplicativo no navegador. <br> <br> <br>


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



## <img src="https://cdn-icons-png.flaticon.com/128/8146/8146725.png" width="40" height="40" /> Rota Stack

A Rota Stack se refere a uma forma de navegação entre diferentes telas ou componentes em um aplicativo móvel. É uma abordagem comumente usada para criar uma estrutura de navegação hierárquica, onde as telas são empilhadas uma sobre a outra, permitindo que o usuário navegue para frente e para trás entre elas, como em uma pilha de cartas.

Quando você utiliza a Rota Stack, cada tela ou componente é considerado uma "rota" dentro do aplicativo. Quando o usuário navega para uma nova tela, ela é empilhada sobre a tela atual. Isso permite que o usuário volte à tela anterior, desempilhando-a, ou avance para uma nova tela, empilhando-a sobre a tela atual.

<strong>Para iniciar um projeto e instalar os pacotes para utilizar a Rota Stack, você deve utilizar os seguintes comandos:</strong>

``` 
1º - npm install @react-navigation/native
2º - npx expo install react-native-screens react-native-safe-area-context
3º - npm install @react-navigation/native-stack
4º - npx expo install react-native-web react-dom @expo/metro-runtime
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


