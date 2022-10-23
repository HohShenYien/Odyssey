import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Row,
  Text,
  VStack,
} from "native-base";
import React, { useEffect } from "react";
import Announcements from "../../components/Announcements";
import PageLayout from "../../components/PageLayout";
import { DateTime } from "luxon";
import { useState } from "react";
import { GuardEmergencyModal } from "../../components/GuardEmergencyModal";
import RNShake from "react-native-shake";

const history = [
  {
    date: "September 2022",
    data: [
      {
        type: "Robbery",
        date: "30 September 2022",
        address: "No. 31-1",
        img: "https://i.imgur.com/5H9eCyb.png",
      },
      {
        type: "Car Theft",
        date: "20 September 2022",
        address: "No. 20",
        img: "https://i.imgur.com/eoOKRxF.png",
      },
      {
        type: "Kidnapping",
        date: "3 September 2022",
        address: "No. 2",
        img: "https://i.imgur.com/VPblA4i.png",
      },
      {
        type: "Robbery",
        date: "1 September 2022",
        address: "No. 99",
        img: "https://i.imgur.com/5H9eCyb.png",
      },
    ],
  },
];

const GuardHome = () => {
  const today = DateTime.now();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setShowModal(true);
    });
    return () => {
      subscription?.remove();
    };
  }, []);

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
        <VStack>
          <Text fontSize="lg" bold textAlign="center">
            Emergency Histories
          </Text>
          {history.map((month) => (
            <VStack key={month.date} mb={2} space={2}>
              <Text bold fontSize="md">
                {month.date}
              </Text>
              {month.data.map((data, index) => (
                <Row key={index} ml={2} space={4} mb={4}>
                  <Image source={{ uri: data.img }} alt={data.type} size="xs" />
                  <VStack flex={1}>
                    <Text bold>{data.type}</Text>
                    <Text color="gray.500">{data.address}</Text>
                  </VStack>
                  <VStack justifyContent="flex-end">
                    <Text color="gray.400">{data.date}</Text>
                  </VStack>
                </Row>
              ))}
            </VStack>
          ))}
        </VStack>
      </VStack>
      <GuardEmergencyModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </PageLayout>
  );
};

export default GuardHome;
