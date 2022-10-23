import React from "react";
import { NativeBaseProvider } from "native-base";
import Router from "./src/plugins/Router";
import "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <Router />
    </NativeBaseProvider>
  );
}
