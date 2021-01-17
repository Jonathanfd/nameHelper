import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ onPress }) {
  return (
    <View style={styles.firstContainer}>
      <TouchableOpacity style={styles.secondContainer} onPress={onPress}>
        <Text style={styles.text}>GENERAR NOMBRE</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  firstContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#FEE5BF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  secondContainer: {
    width: 130,
    height: 130,
    backgroundColor: "#C39459",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FEE5BF",
  },
});
export default AppButton;
