import { View, Text, Image } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function App(props) {
  return (
    <DrawerContentScrollView >
      <View
        style={{
          width: "100%",
          height: 85,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Image
          source={require("../assets/images/lgPerfil.png")}
          style={{ width: 65, height: 65 }}
        />
        <Text style={{ color: "black" }}> Bem vindo!</Text>
      </View>

     
    </DrawerContentScrollView>
  );
}
