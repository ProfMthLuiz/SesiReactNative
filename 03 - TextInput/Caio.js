import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const largFinal = screenWidth * 0.7;

const AnimatedItem = ({ item }) => {
  const [mostrar, setMostrar] = useState(false);
  const [mostrarTouch, setMostrarTouch] = useState(false);
  const largInicial = useRef(new Animated.Value(screenWidth * 0.9)).current;

  useEffect(() => {
    Animated.timing(largInicial, {
      toValue: mostrar ? largFinal : screenWidth * 0.9,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  }, [mostrar, largInicial]);

  const dispararAnimation = () => {
    setMostrar(!mostrar);
    setMostrarTouch(true);
  };

  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={() => dispararAnimation()}>
        <Animated.View
          style={{
            width: largInicial,
            height: "100%",
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#000", textAlign: "center" }}>
            {item.title}
          </Text>
        </Animated.View>
      </TouchableOpacity>
      {mostrarTouch && (
        <>
          <View style={{ flex: 1, backgroundColor: "#CD853F" }}>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  backgroundColor: "#A0522D",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                },
              ]}
              onPress={() => console.log("HELLO")}
            >
              <AntDesign name="hearto" size={28} color="white" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.iconContainer,
              {
                backgroundColor: "#CD853F",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              },
            ]}
            onPress={() => console.log("BYE")}
          >
            <AntDesign name="shoppingcart" size={28} color="white" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default function ProjetoCaio() {
  const data = [
    { id: "1", title: "Animado TouchableOpacity 1" },
    { id: "2", title: "Animado TouchableOpacity 2" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <AnimatedItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flatListContent: {
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center",
  },

  box: {
    height: 100,
    width: screenWidth * 0.9,
    flexDirection: "row",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8.3,
    elevation: 13,
    borderRadius: 20,
    backgroundColor: "#A0522D",
  },

  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
