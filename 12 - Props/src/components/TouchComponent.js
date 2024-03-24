import { Text, View, TouchableOpacity } from "react-native";

export default function TouchComponent({
  textBtn,
  clickBtn,
  styleBtn,
  styleCtn,
  styleTxt,
}) {
  return (
    <View style={styleCtn}>
      <TouchableOpacity onPress={clickBtn} style={styleBtn}>
        <Text style={styleTxt}>{textBtn}</Text>
      </TouchableOpacity>
    </View>
  );
}
