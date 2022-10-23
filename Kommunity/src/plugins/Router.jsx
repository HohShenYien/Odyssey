import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import routeNames from "../constants/routeNames";
import HomeScreen from "../pages/HomeScreen";
import ResidentRoute from "../pages/residents/ResidentRoute";
import GuardRoute from "../pages/guards/GuardRoute";
import AdminRoute from "../pages/admin/AdminRoute";

const Stack = createNativeStackNavigator();

const routes = {
  home: {
    name: routeNames.home,
    component: HomeScreen,
  },
  resident: {
    name: routeNames.resident,
    component: ResidentRoute,
  },
  guard: {
    name: routeNames.guard,
    component: GuardRoute,
  },
  admin: {
    name: routeNames.admin,
    component: AdminRoute,
  },
};

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeNames.home}>
        {Object.values(routes).map((route) => (
          <Stack.Screen
            name={route.name}
            component={route.component}
            key={route.name}
            options={{ headerShown: false }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
