import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../Config/Colors";

function Info({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <MaterialCommunityIcons
        name="information-outline"
        size={30}
        color={Colors.Grey}
      />
    </TouchableWithoutFeedback>
  );
}

export default Info;
