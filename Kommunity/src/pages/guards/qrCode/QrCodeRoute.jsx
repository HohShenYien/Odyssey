import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routeNames from "../../../constants/routeNames";
import QrCodeHistory from "./QrCodeHistory";
import QrCodeMain from "./QrCodeMain";
import QrCodeScan from "./QrCodeScan";
import QrCodeScanned from "./QrCodeScanned";

const Stack = createNativeStackNavigator();

const routes = {
  qrCodeMain: {
    name: routeNames.guardQrCodeMain,
    component: QrCodeMain,
  },
  qrCodeScan: {
    name: routeNames.guardQrCodeScan,
    component: QrCodeScan,
  },
  qrCodeScanned: {
    name: routeNames.guardQrCodeScanned,
    component: QrCodeScanned,
  },
  qrCodeHistory: {
    name: routeNames.guardQrCodeHistory,
    component: QrCodeHistory,
  },
};

export default function QrCodeRoute() {
  return (
    <Stack.Navigator initialRouteName={routeNames.guardQrCodeMain}>
      {Object.values(routes).map((route) => (
        <Stack.Screen
          name={route.name}
          component={route.component}
          key={route.name}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
}
