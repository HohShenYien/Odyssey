import { AspectRatio, Box, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import Announcements from "../../components/Announcements";
import Feature from "../../components/Feature";
import PageLayout from "../../components/PageLayout";
import { DateTime } from "luxon";
import RNShake from "react-native-shake";
import { useEffect } from "react";
import routeNames from "../../constants/routeNames";
import axios from "axios";

const features = [
  {
    name: "Events",
    description: "List of Community Events",
    img: "https://i.imgur.com/zV4uD1a.png",
  },
  {
    name: "Feedback",
    description: "Your Feedback to the Community",
    img: "https://i.imgur.com/z7fex4d.png",
  },
  {
    name: "Profile",
    description: "Manage your Personal Profile",
    img: "https://i.imgur.com/T11PYkI.png",
  },
  {
    name: "Inbox",
    description: "My Personal Inbox",
    img: "https://i.imgur.com/L3XtTC2.png",
  },
];

const ResidentHome = ({ navigation }) => {
  useEffect(() => {
    axios
      .get("http://shenyien.pythonanywhere.com/notifications/api")
      .then((res) => {
        console.log(res);
      })
      .catch((ex) => {
        console.log(ex);
      });
    const subscription = RNShake.addListener(() => {
      navigation.navigate(routeNames.residentHelp, {
        screen: routeNames.emergencyCancel,
      });
    });
    return () => {
      subscription?.remove();
    };
  }, []);
  const today = DateTime.now();
  return (
    <PageLayout>
      <Box bgColor="darkBlue.700" h={56} w="100%">
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{ uri: "https://i.imgur.com/HvrRhm4m.jpg" }}
            alt="background"
          />
        </AspectRatio>
        <VStack
          position="absolute"
          left={0}
          top={0}
          height="100%"
          pb="24"
          px="4"
          pt="4"
        >
          <HStack flex="1" justifyContent="flex-end" width="100%">
            <Image
              source={{ uri: "https://i.imgur.com/T11PYkI.png" }}
              alt="user profile"
              size="sm"
            />
          </HStack>
          <VStack space="0">
            <Text color="white" fontSize="4xl" mb="-2" fontWeight="semibold">
              {today.day}
            </Text>
            <Text color="white">{today.toFormat("LLLL, y")}</Text>
          </VStack>
        </VStack>
      </Box>
      <VStack
        bgColor="white"
        mt={-20}
        minH="100%"
        borderTopRadius={12}
        py={2}
        space={4}
        px={4}
      >
        <Text textAlign="center" fontSize="lg" bold={true}>
          Good Evening, Bob Chong
        </Text>
        <Announcements />
        {features.map((feat, index) => (
          <Feature
            key={index}
            name={feat.name}
            img={feat.img}
            description={feat.description}
          />
        ))}
      </VStack>
    </PageLayout>
  );
};

export default ResidentHome;
