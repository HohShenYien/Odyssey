import { Center, Pressable, VStack } from "native-base";
import React from "react";
import PageLayout from "../components/PageLayout";
import routeNames from "../constants/routeNames";

const mainPages = [
  { name: "Residents", destination: routeNames.resident },
  { name: "Security Guards", destination: routeNames.guard },
  { name: "Admins", destination: routeNames.admin },
];

function HomeScreen({ navigation }) {
  return (
    <PageLayout isCenter={true}>
      <VStack space={4} px={10} alignItems="stretch">
        {mainPages.map((page) => (
          <Pressable
            onPress={() => navigation.navigate(page.destination)}
            key={page.name}
          >
            {({ isHovered, isPressed }) => {
              return (
                <Center
                  bg={
                    isPressed
                      ? "coolGray.200"
                      : isHovered
                      ? "coolGray.200"
                      : "coolGray.100"
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                  py="5"
                  px="12"
                  rounded="8"
                  shadow={3}
                  borderWidth="1"
                  borderColor="coolGray.300"
                  w="100%"
                >
                  {page.name}
                </Center>
              );
            }}
          </Pressable>
        ))}
      </VStack>
    </PageLayout>
  );
}

export default HomeScreen;
