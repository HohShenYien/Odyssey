import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routeNames from "../../../constants/routeNames";
import AdminNewsAdd from "./AdminNewsAdd";
import AdminNewsEdit from "./AdminNewsEdit";
import AdminNewsOverview from "./AdminNewsOverview";
import AdminNewsView from "./AdminNewsView";

const Stack = createNativeStackNavigator();

const routes = {
  adminNewsOverview: {
    name: routeNames.adminNewsOverview,
    component: AdminNewsOverview,
  },
  adminNewsAdd: {
    name: routeNames.adminNewsAdd,
    component: AdminNewsAdd,
  },
  adminNewsView: {
    name: routeNames.adminNewsView,
    component: AdminNewsView,
  },
  adminNewsEdit: {
    name: routeNames.adminNewsEdit,
    component: AdminNewsEdit,
  },
};

export default function AdminNewsRoute() {
  return (
    <Stack.Navigator initialRouteName={routeNames.adminNewsOverview}>
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
