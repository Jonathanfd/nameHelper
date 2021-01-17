import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import NameDetails from "../Screens/NameDetails";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NameDetails"
      component={NameDetails}
      options={{
        headerTintColor: "black",
        title: "Detalles",
        headerBackTitle: "Retornar",
      }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
