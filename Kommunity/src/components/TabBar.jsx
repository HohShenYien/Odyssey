import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Icon,
  Pressable,
  Text,
} from "native-base";
import React from "react";
import routeNames from "../constants/routeNames";

function TabBar({ state, navigation, routes }) {
  const adminTabNames = [
    routeNames.adminHome,
    routeNames.adminBill,
    routeNames.adminNews,
    routeNames.adminResidents,
    routeNames.adminProfile,
  ];
  return (
    <HStack
      style={{ flexDirection: "row" }}
      backgroundColor="white"
      borderTopColor="gray.200"
      borderTopWidth={1}
      py={1}
      justifyContent="space-around"
    >
      {Object.values(routes).map((route, index) => {
        const isFocused = state.index === index;
        const IconType = route.type;
        const onPress = () => {
          if (!isFocused) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        return [routeNames.residentHelp, routeNames.guardScan].includes(
          route.name
        ) ? (
          <Box key={index} flex={1} maxW={16}>
            <Pressable
              onPress={onPress}
              position="absolute"
              top="-70%"
              width="100%"
            >
              <AspectRatio ratio={1}>
                <Center
                  rounded="full"
                  bg={isFocused ? "indigo.500" : "amber.500"}
                >
                  <Icon
                    name={isFocused ? route.iconActive : route.icon}
                    as={IconType}
                    size="lg"
                    color="white"
                  />
                  <Text color="white">{route.label}</Text>
                </Center>
              </AspectRatio>
            </Pressable>
          </Box>
        ) : (
          <Pressable key={index} flex={1} onPress={onPress} px={3} maxW={24}>
            <Center
              rounded={"sm"}
              bg={
                isFocused
                  ? {
                      linearGradient: {
                        colors: ["#6366F170", "#BCBFFF70"],
                        start: [0, 0],
                        end: [0, 1],
                      },
                    }
                  : ""
              }
            >
              <Icon
                name={isFocused ? route.iconActive : route.icon}
                as={IconType}
                size="lg"
                color={isFocused ? "indigo.500" : "gray.500"}
              />
              <Text
                color={isFocused ? "indigo.500" : "gray.500"}
                fontSize={adminTabNames.includes(route.name) ? "10" : "sm"}
              >
                {route.label}
              </Text>
            </Center>
          </Pressable>
        );
      })}
    </HStack>
  );
}

export default TabBar;
