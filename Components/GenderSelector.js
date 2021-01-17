import React from "react";
import { View, StyleSheet, Switch, Text } from "react-native";

function GenderSelector({ gender, textColor = "black", value, onSwitch }) {
  return (
    <View style={styles.container}>
      <Switch
        onValueChange={onSwitch}
        value={value}
        trackColor={{ false: "#FF8BAE", true: "dodgerblue" }}
        ios_backgroundColor="#FF8BAE"
        thumbColor="white"
      />
      <Text style={[styles.text, { color: textColor }]}>{gender}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    top: 5,
  },
});
export default GenderSelector;
