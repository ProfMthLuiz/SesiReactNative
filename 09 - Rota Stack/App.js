import React from "react";

// Stack Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Paginas
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

// Cria uma instância de um navegador de pilha usando createNativeStackNavigator e a armazena na constante Stack.
// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



















