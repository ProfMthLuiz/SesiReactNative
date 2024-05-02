import React from "react";

// Stack Navigation
import { NavigationContainer } from "@react-navigation/native"; // Importa o componente NavigationContainer de "@react-navigation/native" para envolver a navegação da aplicação.
import { createDrawerNavigator } from "@react-navigation/drawer";

// Páginas
import Home from "../pages/Home";
import Sobre from "../pages/SettingsScreen";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const Drawer = createDrawerNavigator();

export default function RouteDrawer() {
  return (
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: { backgroundColor: "white" },
          drawerActiveBackgroundColor: "black",
          drawerActiveTintColor: "white",

          drawerInactiveBackgroundColor: "white",
          drawerInactiveTintColor: "black",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => {
              return (
                <FontAwesome name="newspaper-o" size={size} color={color} />
              );
            },
          }}
        />
      </Drawer.Navigator>
  );
}
