import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/Home";
import SettingsScreen from "../pages/SettingsScreen";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

import RouteDrawer from "./routeDrawer";

export default function RoutesTab() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#FFF",
          tabBarStyle: { backgroundColor: "#000" },
        }}
      >
        {/* Componente Navigator do navegador tab.*/}
        <Tab.Screen
          options={{
            headerShown: false,
            
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome size={size} color={color} name="home" />;
            },
          }}
          name="Home"
          component={RouteDrawer}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome size={size} color={color} name="envelope" />;
            },
          }}
          name="Sobre"
          component={SettingsScreen}
        />
      </Tab.Navigator>
  );
}
