import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./src/pages/Home/intex";
import Appload from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [laod] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!laod) {
    return <Appload />;
  } else {
    return (
      <>
        <Home />
        <StatusBar style="auto" />
      </>
    );
  }
}
