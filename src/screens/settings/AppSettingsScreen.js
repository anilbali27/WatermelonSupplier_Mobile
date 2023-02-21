/** @format */

import React from "react";
import { View, Text, ScrollView } from "react-native";
import GlobalStyles from "../../../assets/css/styles";
import { COLORS } from "../../../src/constant/Colors";
import { FONTS } from "../../../src/constant/Font";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DefaultScreen from "./DefaultScreen";
import DeliveryScreen from "./DeliveryScreen";
import OutletsScreen from "./OutletsScreen";
const Tab = createMaterialTopTabNavigator();
const AppSettingsScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: { margin: 20 },
        tabBarStyle: { backgroundColor: "#1F9CEF", height: 85 },
        tabBarActiveTintColor: "#1F9CEF",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: FONTS.SemiBold,
          width: 120,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          height: "60%",
          borderRadius: 25,
          marginBottom: 15,
        },
        tabBarPressOpacity: 1,
      }}>
      <Tab.Screen
        name='Default'
        component={DefaultScreen}
        style={GlobalStyles.tabScreens}
        tabBarInactiveTintColor='red'
      />
      <Tab.Screen
        name='Delivery'
        component={DeliveryScreen}
        style={GlobalStyles.tabScreens}
      />
      <Tab.Screen
        name='Outlets'
        component={OutletsScreen}
        style={GlobalStyles.tabScreens}
      />
    </Tab.Navigator>
  );
};

export default AppSettingsScreen;
