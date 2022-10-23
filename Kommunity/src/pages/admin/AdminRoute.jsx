import AdminHome from "./AdminHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import routeNames from "../../constants/routeNames";
import TabBar from "../../components/TabBar";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import AdminBillRoute from "./bill/AdminBillRoute";
import AdminResidentRoute from "./residents/AdminResidentRoute";
import AdminNewsRoute from "./announcement/AdminNewsRoute";
import AdminProfileRoute from "./profile/AdminProfileRoute";

const adminTabRoute = {
  adminHome: {
    name: routeNames.adminHome,
    component: AdminHome,
    label: "Home",
    icon: "home-variant-outline",
    iconActive: "home-variant",
    type: MaterialCommunityIcons,
  },
  adminBill: {
    name: routeNames.adminBill,
    component: AdminBillRoute,
    label: "Bill",
    icon: "receipt-outline",
    iconActive: "receipt",
    type: Ionicons,
  },
  residentHelp: {
    name: routeNames.adminNews,
    component: AdminNewsRoute,
    label: "News",
    icon: "newspaper-variant-outline",
    iconActive: "newspaper-variant",
    type: MaterialCommunityIcons,
  },
  adminResidents: {
    name: routeNames.adminResidents,
    component: AdminResidentRoute,
    label: "Residents",
    icon: "account-group-outline",
    iconActive: "account-group",
    type: MaterialCommunityIcons,
  },
  adminProfile: {
    name: routeNames.adminProfile,
    component: AdminProfileRoute,
    label: "Profile",
    icon: "user",
    iconActive: "user-alt",
    type: FontAwesome5,
  },
};

const BottomTab = createBottomTabNavigator();

export default function AdminRoute() {
  return (
    <BottomTab.Navigator
      initialRouteName={routeNames.adminHome}
      tabBar={(props) => <TabBar {...props} routes={adminTabRoute} />}
    >
      {Object.values(adminTabRoute).map((route) => (
        <BottomTab.Screen
          name={route.name}
          component={route.component}
          key={route.name}
          options={{ headerShown: false }}
        />
      ))}
    </BottomTab.Navigator>
  );
}
