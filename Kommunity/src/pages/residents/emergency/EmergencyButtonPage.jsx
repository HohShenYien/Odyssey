import { Box, Center, Image, HStack, Text, VStack } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";

const EmergencyButtonPage = ({ navigation }) => {
  return (
    <PageLayout>
      <VStack py={4} space={8}>
        <Box>
          <Text fontSize="2xl" bold={true} textAlign="center">
            Are you in Emergency?
          </Text>
          <Text textAlign="center" color="gray.500">
            Press the button below and help will reach you soon
          </Text>
        </Box>
        <Center>
          <Pressable
            onPress={() => navigation.navigate(routeNames.emergencyForm)}
          >
            {({ isFocused, isPressed }) => {
              return (
                <Box
                  bg={isFocused || isPressed ? "red.200" : "red.100"}
                  p={6}
                  rounded="full"
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                >
                  <Box
                    bg={isFocused || isPressed ? "red.300" : "red.200"}
                    p={6}
                    rounded="full"
                  >
                    <Center
                      bg={isFocused || isPressed ? "red.500" : "red.400"}
                      width={48}
                      height={72}
                      rounded="full"
                    >
                      <Text color="white" fontSize="4xl" bold={true}>
                        HELP
                      </Text>
                    </Center>
                  </Box>
                </Box>
              );
            }}
          </Pressable>
        </Center>
        <HStack
          mx="8"
          shadow={1}
          bg="white"
          alignItems="center"
          space={4}
          px={2}
          py={1}
        >
          <Image
            source={{ uri: "https://i.imgur.com/T11PYkI.png" }}
            alt="user profile"
            size="xs"
          />
          <VStack flex={1}>
            <Text bold={true}>Your current location</Text>
            <Text fontSize="xs">
              No. 16, Jalan Profesor Diraja Ungku Aziz, Seksyen 13, Kuala Lumpur
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </PageLayout>
  );
};

export default EmergencyButtonPage;
