import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppRouter } from "./src/routes";
import { ThemeProvider } from "styled-components";
import AppProviderHooks from "./src/hooks";
import Appload from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "./src/global/styles/theme";

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
      <ThemeProvider theme={theme["light"]}>
        <AppProviderHooks>
          <AppRouter />
          <StatusBar style="auto" />
        </AppProviderHooks>
      </ThemeProvider>
    );
  }
}
