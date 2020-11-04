import React from "react";
import { StatusBar, LogBox } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

// import RootProvider from "./src/contexts";
import AppNavigator from "../src/routes/AppNavigator";

export default function App() {
  LogBox.ignoreLogs(["VirtualizedLists"]);

  return (
    // <RootProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <AppNavigator />
      </NavigationContainer>
    // </RootProvider>
  );
}