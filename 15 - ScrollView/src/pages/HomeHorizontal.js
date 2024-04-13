import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function HomeHorizontal() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView horizontal={true}>
        <View style={styles.cont}>
          <View style={[styles.box, { backgroundColor: "red" }]}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "brown" }]}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "purple" }]}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "white" }]}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "green" }]}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "blue" }]}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "yellow" }]}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
          </View>
          <View style={[styles.box, { backgroundColor: "gray" }]}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cont: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  
  box: {
    height: 400,
    width: 250,
    padding: 20,
    margin: 20,
  },

  header: {
    height: 50,
    width: "100%",
    backgroundColor: "#000",
  },
  footer: {
    height: 50,
    width: "100%",
    backgroundColor: "#000",
  },
});
