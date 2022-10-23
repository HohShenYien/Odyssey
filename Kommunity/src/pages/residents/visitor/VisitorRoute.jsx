import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routeNames from "../../../constants/routeNames";
import VisitorAdded from "./VisitorAdded";
import VisitorHistory from "./VisitorHistory";
import VisitorMain from "./VisitorMain";

const Stack = createNativeStackNavigator();

const routes = {
  visitorMain: {
    name: routeNames.visitorMain,
    component: VisitorMain,
  },
  visitorHistory: {
    name: routeNames.visitorHistory,
    component: VisitorHistory,
  },
  visitorAdded: {
    name: routeNames.visitorAdded,
    component: VisitorAdded,
  },
};

export default function VisitorRoute() {
  return (
    <Stack.Navigator initialRouteName={routeNames.emergencyButton}>
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
