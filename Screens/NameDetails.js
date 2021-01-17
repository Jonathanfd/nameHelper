import React from "react";
import { View, StyleSheet, Text, Image, Platform } from "react-native";

function NameDetails({ route }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/name-details.jpg")}
        style={styles.image}
        blurRadius={Platform.OS == "android" ? 2 : 5}
      />

      <View style={styles.nameContainer}>
        <Text
          style={[
            styles.title,
            {
              color: "white",
              textDecorationLine: "underline",
              margin: 5,
            },
          ]}
        >{`Origen del nombre:`}</Text>
        <Text style={styles.title}>{`Continente:`}</Text>

        <Text style={styles.text}>{`${route.params.continent}`}</Text>

        <Text style={styles.title}>{`País:`}</Text>
        <Text style={styles.text}>{`${route.params.country}`}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flex: 1,
  },
  nameContainer: {
    position: "absolute",
    marginLeft: 15,
  },
  text: {
    fontSize: 20,
    bottom: 2,
    color: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#C39459",
  },
});
export default NameDetails;
