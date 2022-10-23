import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routeNames from "../../../constants/routeNames";
import AdminBillAdd from "./AdminBillAdd";
import AdminBillEdit from "./AdminBillEdit";
import AdminBillOverview from "./AdminBillOverview";
import AdminBillView from "./AdminBillView";

const Stack = createNativeStackNavigator();

const routes = {
  adminBillOverview: {
    name: routeNames.adminBillOverview,
    component: AdminBillOverview,
  },
  adminBillAdd: {
    name: routeNames.adminBillAdd,
    component: AdminBillAdd,
  },
  adminBillView: {
    name: routeNames.adminBillView,
    component: AdminBillView,
  },
  adminBillEdit: {
    name: routeNames.adminBillEdit,
    component: AdminBillEdit,
  },
};

export default function AdminBillRoute() {
  return (
    <Stack.Navigator initialRouteName={routeNames.adminBillOverview}>
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
