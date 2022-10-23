import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
} from "native-base";
import React from "react";
import PageLayout from "../../components/PageLayout";
import { DateTime } from "luxon";

const AdminHome = () => {
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
        bgColor="muted.100"
        mt={-20}
        minH="100%"
        borderTopRadius={12}
        py={2}
        space={4}
        px={4}
      >
        <Text textAlign="center" fontSize="lg" bold={true}>
          Good Evening, William Hoh
        </Text>

        <Flex
          direction="column"
          mt={2}
          p={2}
          backgroundColor="white"
          align="center"
          shadow="7"
          rounded="lg"
        >
          <Image
            source={{ uri: "https://i.imgur.com/VkhrUlI.png" }}
            alt="paidVsOutstanding"
            style={{
              width: 375,
              height: 200,
              resizeMode: "contain",
            }}
          />
        </Flex>

        <Flex
          direction="column"
          p={1}
          backgroundColor="white"
          align="center"
          shadow="7"
          rounded="lg"
        >
          <Image
            source={{ uri: "https://i.imgur.com/jOt0MBl.png" }}
            alt="percentBarChart"
            style={{
              width: 500,
              height: 275,
              resizeMode: "contain",
            }}
          />
        </Flex>

        <Flex
          direction="column"
          p={2}
          backgroundColor="white"
          align="center"
          shadow="7"
          rounded="lg"
        >
          <Image
            source={{ uri: "https://i.imgur.com/YWWlTDw.png" }}
            alt="percentBarChart"
            style={{
              width: 500,
              height: 250,
              resizeMode: "contain",
            }}
          />
        </Flex>
      </VStack>
    </PageLayout>
  );
};

export default AdminHome;
