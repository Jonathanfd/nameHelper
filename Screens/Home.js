import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Alert,
  Platform,
  ActivityIndicator,
} from "react-native";
import AppButton from "../Components/AppButton";
import GenderSelector from "../Components/GenderSelector";
import Info from "../Components/Info";
import Colors from "../Config/Colors";

function Home({ navigation }) {
  const [male, setMale] = useState(false);
  const [info, setInfo] = useState({ name: "", continent: "", country: "" });
  const [gender, setGender] = useState("f");
  const [loading, setLoading] = useState(false);
  const color = male == false ? Colors.Pink : Colors.Blue;
  const apiKey = "23d7fac073d5d008fe2c547046ede341";
  const request = `https://api.parser.name/?api_key=${apiKey}&endpoint=generate&gender=${gender}`;

  const switchGender = () => {
    setMale((gender) => !gender);
    setGender((gender) => (gender == "f" ? "m" : "f"));
    setInfo({ name: "", continent: "", country: "" });
  };

  const generateName = async () => {
    try {
      setLoading(true);
      const data = await fetch(request);
      const results = await data.json();
      var result = results.results;
      if (result == 0) {
        Alert.alert(
          "Aviso",
          "Haz alcanzado la cantidad máxima de solicitudes por hora. \n \nInténtalo más tarde.",
          [{ text: "Ok" }]
        );
        setLoading(false);
        return;
      }
      const name = results.data[0].name.firstname.name;
      const continent = results.data[0].country.continent;
      const country = results.data[0].country.name;

      setInfo({ name, continent, country });
      setLoading(false);
    } catch (error) {
      Alert.alert(
        "Error",
        "Ocurrió un error en el servicio, intente nuevamente",
        [{ text: "Ok" }]
      );
      setLoading(false);
      console.log(result);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../assets/init.jpg")}
        blurRadius={Platform.OS == "android" ? 1 : 4}
      >
        <View style={styles.nameContainer}>
          <View style={styles.info}>
            {info.country != "" && (
              <Info
                onPress={() =>
                  navigation.navigate("NameDetails", {
                    continent: info.continent,
                    country: info.country,
                  })
                }
              />
            )}
          </View>

          <TextInput
            placeholder="Nombre"
            editable={false}
            style={[styles.name, { color: color }]}
            value={info.name}
            autoCapitalize="words"
            autoCorrect={false}
          />
          <GenderSelector
            gender={male ? "MASCULINO" : "FEMENINO"}
            textColor={color}
            value={male}
            onSwitch={switchGender}
            genderIcon={male ? "gender-male" : "gender-female"}
          />
        </View>
        <View style={styles.button}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.White} />
          ) : (
            <AppButton onPress={generateName} />
          )}
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    top: 100,
    height: 200,
    justifyContent: "center",
  },
  imageBackground: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  nameContainer: {
    backgroundColor: Colors.White,
    height: 150,
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: 30,
    textAlign: "center",
  },
  info: { position: "absolute", top: 10, right: 10 },
});
export default Home;
