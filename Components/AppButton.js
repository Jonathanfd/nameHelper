import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../Config/Colors";

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
    backgroundColor: Colors.LightGold,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  secondContainer: {
    width: 130,
    height: 130,
    backgroundColor: Colors.Gold,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.LightGold,
  },
});
export default AppButton;
