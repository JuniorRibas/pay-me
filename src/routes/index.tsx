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
import { Entypo } from "@expo/vector-icons";

import KeysPix from "../pages/KeysPix";
import Cadastro from "../pages/Cadastro";

const Tab = createBottomTabNavigator();

export const AppRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#603EB0",
          tabBarInactiveTintColor: "#CCCC",
        }}
      >
        <Tab.Screen
          name="Chaves"
          component={KeysPix}
          options={{
            tabBarIcon: ({ color }) => {
              return <Entypo name="list" size={24} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: "Nova Chave",
            tabBarIcon: ({ color }) => {
              return <Entypo name="squared-plus" size={24} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
