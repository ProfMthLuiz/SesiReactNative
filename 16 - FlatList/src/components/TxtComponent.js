import { View, Text } from "react-native";

export default function TxtComponent({ txt, bckColor }) {
  return (
    <View
      style={{
        backgroundColor: bckColor,
        height: 250,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{txt}</Text>
    </View>
  );
}
