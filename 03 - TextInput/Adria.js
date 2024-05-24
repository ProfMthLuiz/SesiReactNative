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

import { Entypo } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const largFinal = screenWidth * 0.6;

const AnimatedItem = ({ item }) => {
  const [mostrar, setMostrar] = useState(false);
  const [mostrarTouch, setMostrarTouch] = useState(false);
  const [viewStyle, setViewStyle] = useState({});
  const largInicial = useRef(new Animated.Value(screenWidth * 0.9)).current;
  const opacidadeAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(largInicial, {
      toValue: mostrar ? largFinal : screenWidth * 0.9,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    Animated.timing(opacidadeAnimated, {
      toValue: mostrar ? 1 : 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Atualiza o estilo da view com base no estado mostrarTouch

    setTimeout(() => {
      setViewStyle(mostrar ? { width: "20%" } : { flex: 1 });
    }, 800);
  }, [mostrar, largInicial, mostrarTouch]);

  const dispararAnimation = () => {
    setMostrar(!mostrar);
    setMostrarTouch(true);
  };

  const alertView = () => {
    alert("TOUCH VIEW");
  };

  return (
    <View style={styles.box}>
      <Animated.View
        style={{
          width: largInicial,
          height: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.7,
          shadowRadius: 8.3,
          elevation: 13,
          justifyContent: "center",
          alignItems: "center",
        }}
        onTouchStart={dispararAnimation}
      >
        <Text>{item.title}</Text>
      </Animated.View>
      {mostrarTouch && (
        <Animated.View
          onTouchStart={alertView}
          style={{
            ...viewStyle,
            height: "100%",
            borderColor: "red",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            opacity: opacidadeAnimated,
            borderRadius: 20,
            backgroundColor: "red",
            shadowColor: "red",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.7,
            shadowRadius: 8.3,
            elevation: 13,
          }}
        >
          <Entypo name="trash" size={30} color="white" />
        </Animated.View>
      )}
    </View>
  );
};

export default function ProjetoAdria() {
  const data = [
    { id: "1", title: "View Animada 1" },
    { id: "2", title: "View Animada 2" },
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
    backgroundColor: "#FFFFFF",
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
    borderRadius: 20,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
});
