/*
 * -----
 * File Created: Wednesday, 10th November 2021 10:25:33 am
 * Author: Junior Ribeiro
 * Copyright  2021  joseribeiroalves.dev@gmail.com , Junior Ribeiro
 * -----
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home/intex";
import KeysPix from "../pages/KeysPix";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const AppRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Chaves" component={KeysPix} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
