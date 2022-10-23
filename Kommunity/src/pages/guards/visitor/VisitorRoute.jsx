import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routeNames from "../../../constants/routeNames";
import VisitorHistory from "./VisitorHistory";
import VisitorMain from "./VisitorMain";

const Stack = createNativeStackNavigator();

const routes = {
  visitorManagement: {
    name: routeNames.visitorManagement,
    component: VisitorMain,
  },
  visitorManagementHistory: {
    name: routeNames.visitorManagementHistory,
    component: VisitorHistory,
  },
};

export default function VisitorRoute() {
  return (
    <Stack.Navigator initialRouteName={routeNames.visitorManagement}>
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
