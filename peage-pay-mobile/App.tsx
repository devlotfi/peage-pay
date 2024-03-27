import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppThemeProvider } from "./lib/theme/context/app-theme.context";
import TestComp from "./test-comp.component";
import { NavigationContainer } from "@react-navigation/native";
import AppProviderContainer from "./app-provider-container.component";

export default function App() {
  return (
    <AppThemeProvider>
      <NavigationContainer>
        <AppProviderContainer>
          <TestComp></TestComp>
        </AppProviderContainer>
      </NavigationContainer>
    </AppThemeProvider>
  );
}
