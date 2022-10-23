import GuardHome from "./GuardHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import routeNames from "../../constants/routeNames";
import TabBar from "../../components/TabBar";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import VisitorRoute from "./visitor/VisitorRoute";
import QrCodeRoute from "./qrCode/QrCodeRoute";

const guardTabRoutes = {
  guardHome: {
    name: routeNames.guardHome,
    component: GuardHome,
    label: "Home",
    icon: "home-variant-outline",
    iconActive: "home-variant",
    type: MaterialCommunityIcons,
  },
  guardQrCode: {
    name: routeNames.residentHelp,
    component: QrCodeRoute,
    label: "Scan",
    icon: "qrcode-scan",
    iconActive: "qrcode-scan",
    type: MaterialCommunityIcons,
  },
  guardVisitors: {
    name: routeNames.guardVisitor,
    component: VisitorRoute,
    label: "Visitors",
    icon: "account-group-outline",
    iconActive: "account-group",
    type: MaterialCommunityIcons,
  },
};

const BottomTab = createBottomTabNavigator();

export default function GuardRoute() {
  return (
    <BottomTab.Navigator
      initialRouteName={routeNames.guardHome}
      tabBar={(props) => <TabBar {...props} routes={guardTabRoutes} />}
    >
      {Object.values(guardTabRoutes).map((route) => (
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
