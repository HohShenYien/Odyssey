import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Button,
  Icon,
  Spacer,
  Select,
  CheckIcon,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import routeNames from "../../../constants/routeNames";
import { YesNoModal } from "../../../components/YesNoModal";

const AdminNewsView = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const description =
    "The management team has decided to provide more features through the Kommunity application, thus the management fees will have to be increased by RM 20.\nTotal: RM 120";

  const data = [
    {
      key: "Announcement Type",
      content: "Important",
    },
    {
      key: "Title",
      content: "Management Price Raise",
    },
    {
      key: "Date",
      content: "16 October 2022",
    },
    {
      key: "Time",
      content: "10:00 am",
    },
  ];

  return (
    <>
      <PageLayout>
        <Box bgColor="darkBlue.700" h={56} w="100%">
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              position="absolute"
              mt="-40"
              source={{ uri: "https://i.imgur.com/apkNaWG.png?1" }}
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
            <Box position="absolute" pl={3} pt={3}>
              <Button
                variant="ghost"
                rounded="full"
                colorScheme="coolGray"
                onPress={() =>
                  navigation.navigate(routeNames.adminNewsOverview)
                }
              >
                <Icon as={MaterialCommunityIcons} name="arrow-left" size="lg" />
              </Button>
            </Box>

            <HStack flex="1" mt={2} justifyContent="space-evenly" width="100%">
              <Image
                source={{ uri: "https://i.imgur.com/ZBft9fYb.jpg" }}
                alt="announcement picture"
                size="lg"
                borderRadius={10}
              />
            </HStack>
          </VStack>
        </Box>
        <VStack
          bgColor="muted.100"
          mt={-20}
          minH="100%"
          borderTopRadius={12}
          py={2}
          space={4}
          px={5}
        >
          <VStack space={6} width="100%">
            <Spacer />
            {data.map((data, index) => (
              <HStack key={index} width="100%">
                <Text textAlign="left" fontSize="md" bold width="40%">
                  {data.key}
                </Text>
                <Text textAlign="right" fontSize="md" width="60%">
                  {data.content}
                </Text>
              </HStack>
            ))}
          </VStack>

          <VStack mt={2} space={2}>
            <Text textAlign="left" fontSize="md" bold>
              Description
            </Text>
            <TextArea
              placeholder={description}
              placeholderTextColor="trueGray.600"
              borderColor="trueGray.600"
              isReadOnly
            />
          </VStack>

          <HStack width="100%" mt={8}>
            <Button
              colorScheme="indigo"
              width="40%"
              mx="auto"
              onPress={() => navigation.navigate(routeNames.adminNewsEdit)}
            >
              <Text color="white">Edit</Text>
            </Button>
            <Button
              colorScheme="error"
              width="40%"
              mx="auto"
              onPress={() => setShowModal(true)}
            >
              <Text color="white">Delete</Text>
            </Button>
          </HStack>
        </VStack>
      </PageLayout>
      <YesNoModal
        onClose={() => setShowModal(false)}
        showModal={showModal}
        question="Are you sure to delete this announcement?"
        toastMessage="Announcement Deleted"
        onYesPressed={() => navigation.navigate(routeNames.adminNewsOverview)}
      />
    </>
  );
};

export default AdminNewsView;
