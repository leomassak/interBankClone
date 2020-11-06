import React from "react";
import { StatusBar, LogBox } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from "../src/contexts/auth";
import AppNavigator from "../src/routes/AppNavigator";

export default function App() {
  LogBox.ignoreLogs(["VirtualizedLists"]);

  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}