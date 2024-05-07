import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home";
import Settings from "./src/pages/SettingsScreen";
import Sobre from "./src/pages/Sobre";
import Contato from "./src/pages/Contato";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 50,
            position: "absolute",
            bottom: 20,
            right: 20,
            left: 20,
            borderTopEndRadius: 15,
            borderTopColor: "transparent",
            padding: 10,
            shadowColor: "purple",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            
            elevation: 8,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <FontAwesome size={size} color={color} name="home" />;
            },
            headerShown: false,
            title: '',
          }}
        />
        <Tab.Screen
          name="Screen"
          component={Settings}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <FontAwesome size={size} color={color} name="search" />;
            },
            headerShown: false,
            title: ''
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <FontAwesome size={size} color={color} name="newspaper-o" />;
            },
            headerShown: false,
            title: ''
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <FontAwesome size={size} color={color} name="envelope" />;
            },
            headerShown: false,
            title: ''
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
