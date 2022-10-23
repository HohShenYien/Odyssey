import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routeNames from "../../../constants/routeNames";
import AdminProfileEdit from "./AdminProfileEdit";
import AdminProfileOverview from "./AdminProfileOverview";

const Stack = createNativeStackNavigator();

const routes = {
  adminProfileOverview: {
    name: routeNames.adminProfileOverview,
    component: AdminProfileOverview,
  },
  adminProfileEdit: {
    name: routeNames.adminProfileEdit,
    component: AdminProfileEdit,
  },
};

export default function AdminProfileRoute() {
  return (
    <Stack.Navigator initialRouteName={routeNames.adminProfileOverview}>
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
