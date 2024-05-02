import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/pages/Home";
import SettingsScreen from "./src/pages/SettingsScreen";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Componente fornecido pelo React Navigation para envolver a navegação da aplicação. */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#FFF",
          tabBarStyle: { backgroundColor: "#000" },
        }}
      >
        {/* Componente Navigator do navegador tab.*/}
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome size={size} color={color} name="envelope" />;
            },
          }}
          name="Screen"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
