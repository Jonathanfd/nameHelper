import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Info({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <MaterialCommunityIcons
        name="information-outline"
        size={30}
        color="grey"
      />
    </TouchableWithoutFeedback>
  );
}

export default Info;
