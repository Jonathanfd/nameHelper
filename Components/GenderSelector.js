import React from "react";
import { View, StyleSheet, Switch, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function GenderSelector({
  gender,
  genderIcon,
  textColor = "black",
  value,
  onSwitch,
}) {
  return (
    <View style={styles.container}>
      <Switch
        onValueChange={onSwitch}
        value={value}
        trackColor={{ false: "#FF8BAE", true: "dodgerblue" }}
        ios_backgroundColor="#FF8BAE"
        thumbColor="white"
      />
      <View style={{ alignItems: "center" }}>
        <Text style={[styles.text, { color: textColor }]}>{gender}</Text>
        <MaterialCommunityIcons name={genderIcon} size={24} color={textColor} />
      </View>
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
    paddingBottom: 2,
  },
});
export default GenderSelector;
