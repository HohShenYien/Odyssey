import ResidentHome from "./ResidentHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import routeNames from "../../constants/routeNames";
import TabBar from "../../components/TabBar";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import EmergencyRoute from "./emergency/EmergencyRoute";
import VisitorRoute from "./visitor/VisitorRoute";
import ResidentBill from "./ResidentBill";

const residentTabRoutes = {
  residentHome: {
    name: routeNames.residentHome,
    component: ResidentHome,
    label: "Home",
    icon: "home-variant-outline",
    iconActive: "home-variant",
    type: MaterialCommunityIcons,
  },
  residentBill: {
    name: routeNames.residentBill,
    component: ResidentBill,
    label: "Bill",
    icon: "receipt-outline",
    iconActive: "receipt",
    type: Ionicons,
  },
  residentHelp: {
    name: routeNames.residentHelp,
    component: EmergencyRoute,
    label: "Help",
    icon: "alarm-light-outline",
    iconActive: "alarm-light",
    type: MaterialCommunityIcons,
  },
  residentVisitors: {
    name: routeNames.residentVisitors,
    component: VisitorRoute,
    label: "Visitors",
    icon: "account-group-outline",
    iconActive: "account-group",
    type: MaterialCommunityIcons,
  },
  residentNews: {
    name: routeNames.residentNews,
    component: ResidentHome,
    label: "News",
    icon: "newspaper-variant-outline",
    iconActive: "newspaper-variant",
    type: MaterialCommunityIcons,
  },
};

const BottomTab = createBottomTabNavigator();

export default function ResidentRoute() {
  return (
    <BottomTab.Navigator
      initialRouteName={routeNames.residentHome}
      tabBar={(props) => <TabBar {...props} routes={residentTabRoutes} />}
    >
      {Object.values(residentTabRoutes).map((route) => (
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
