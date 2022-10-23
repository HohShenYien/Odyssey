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
} from "native-base";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routeNames from "../../../constants/routeNames";
import { YesNoModal } from "../../../components/YesNoModal";

const QrCodeScanned = ({ navigation }) => {
  const [rejectModal, setRejectModal] = useState(false);
  const [acceptModal, setAcceptModal] = useState(false);

  const data = [
    {
      key: "Name",
      content: "Hoh Shen Yien",
    },
    {
      key: "Car Plate Number",
      content: "WPK 5645",
    },
    {
      key: "Description",
      content: "Looking for Bob",
    },
    {
      key: "Date",
      content: "27 September 2022",
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
              source={{ uri: "https://i.imgur.com/hysf0EW.png" }}
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
                onPress={() => navigation.navigate(routeNames.guardQrCodeScan)}
              >
                <Icon as={MaterialCommunityIcons} name="arrow-left" size="lg" />
              </Button>
            </Box>

            <HStack flex="1" justifyContent="space-evenly" width="100%">
              <Image
                source={{ uri: "https://i.imgur.com/97CZPfX.png" }}
                alt="user profile"
                size="md"
              />
            </HStack>
            <HStack width="100%" space="0">
              <Text textAlign="center" fontSize="lg" width="100%" bold>
                Visitor
              </Text>
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

          <HStack width="100%" mt={8}>
            <Button
              colorScheme="error"
              width="35%"
              mx="auto"
              onPress={() => setRejectModal(true)}
            >
              <Text color="white">Reject</Text>
            </Button>
            <Button
              colorScheme="green"
              width="35%"
              mx="auto"
              onPress={() => setAcceptModal(true)}
            >
              <Text color="white">Accept</Text>
            </Button>
          </HStack>
        </VStack>
      </PageLayout>
      <YesNoModal
        onClose={() => setRejectModal(false)}
        showModal={rejectModal}
        question="Are you sure to reject this visitor?"
        toastMessage="Visitor Rejected"
        onYesPressed={() => navigation.navigate(routeNames.guardQrCodeMain)}
      />
      <YesNoModal
        onClose={() => setAcceptModal(false)}
        showModal={acceptModal}
        question="Are you sure to accept this visitor?"
        toastMessage="Visitor Accepted"
        onYesPressed={() => navigation.navigate(routeNames.guardQrCodeMain)}
      />
    </>
  );
};

export default QrCodeScanned;
