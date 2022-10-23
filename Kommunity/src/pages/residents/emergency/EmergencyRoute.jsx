import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routeNames from "../../../constants/routeNames";
import EmergencyButtonPage from "./EmergencyButtonPage";
import EmergencyCancelPage from "./EmergencyCancelPage";
import EmergencyForm from "./EmergencyForm";

const Stack = createNativeStackNavigator();

const routes = {
  emergencyButton: {
    name: routeNames.emergencyButton,
    component: EmergencyButtonPage,
  },
  emergencyForm: {
    name: routeNames.emergencyForm,
    component: EmergencyForm,
  },
  emergencyCancel: {
    name: routeNames.emergencyCancel,
    component: EmergencyCancelPage,
  },
};

export default function EmergencyRoute() {
  return (
    <Stack.Navigator initialRouteName={routeNames.emergencyCancel}>
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
