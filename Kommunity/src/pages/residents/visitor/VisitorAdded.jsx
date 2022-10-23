import { Text, VStack, Row, Button, Icon, Image, Flex, Box } from "native-base";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { VisitorModal } from "../../../components/VisitorModal";
import QRCode from "react-native-qrcode-svg";

const VisitorAdded = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <PageLayout>
        <VStack py={4} space={8} px={2}>
          <Row justifyContent={"flex-start"} alignItems="center" space={4}>
            <Button
              variant="ghost"
              rounded="full"
              colorScheme="coolGray"
              onPress={() => navigation.navigate(routeNames.visitorMain)}
            >
              <Icon as={MaterialCommunityIcons} name="arrow-left" size="lg" />
            </Button>
            <Text bold fontSize={"xl"}>
              QR Code Generated
            </Text>
          </Row>

          <VStack alignItems="center" space={3}>
            <Box
              width="90%"
              py={8}
              shadow="5"
              borderRadius={10}
              // borderColor="black"
              // borderWidth={2}
              backgroundColor="trueGray.100"
            >
              <VStack alignItems="center" space={3}>
                <QRCode value="hello this is a value" size={250} />

                <Text bold={true} fontSize="2xl">
                  Hoh Shen Yien
                </Text>

                <Text bold={true} fontSize="2xl">
                  WPK 5683
                </Text>
              </VStack>
            </Box>

            <Text mt={3} px={10} fontSize="md" color="gray.500">
              Show this QR code at the guard house to get verified.
            </Text>
          </VStack>

          <Button
            colorScheme="indigo"
            width="70%"
            mx="auto"
            onPress={() => navigation.navigate(routeNames.visitorMain)}
          >
            <Text color="white">OK</Text>
          </Button>
        </VStack>
      </PageLayout>
    </>
  );
};

export default VisitorAdded;
