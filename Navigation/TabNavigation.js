import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../Screens/About";
import StackNavigator from "./StackNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Config/Colors";

const Tab = createBottomTabNavigator();
const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.Gold,
    }}
  >
    <Tab.Screen
      name="Home"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home-variant"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="star-circle"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
