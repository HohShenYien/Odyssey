import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routeNames from "../../../constants/routeNames";
import AdminResidentAdd from "./AdminResidentAdd";
import AdminResidentEdit from "./AdminResidentEdit";
import AdminResidentProfile from "./AdminResidentProfile";
import AdminResidentSearch from "./AdminResidentSearch";

const Stack = createNativeStackNavigator();

const routes = {
  adminResidentSearch: {
    name: routeNames.adminResidentSearch,
    component: AdminResidentSearch,
  },
  adminResidentProfile: {
    name: routeNames.adminResidentProfile,
    component: AdminResidentProfile,
  },
  adminResidentAdd: {
    name: routeNames.adminResidentAdd,
    component: AdminResidentAdd,
  },
  adminResidentEdit: {
    name: routeNames.adminResidentEdit,
    component: AdminResidentEdit,
  },
};

export default function AdminResidentRoute() {
  return (
    <Stack.Navigator initialRouteName={routeNames.adminResidentSearch}>
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
