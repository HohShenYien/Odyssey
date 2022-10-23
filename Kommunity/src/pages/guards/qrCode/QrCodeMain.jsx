import { Text, VStack, Row, Button, Icon, Image } from "native-base";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { VisitorModal } from "../../../components/VisitorModal";

const QrCodeMain = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <PageLayout>
        <VStack py={4} space={8} px={2}>
          <Row justifyContent={"flex-end"}>
            <Button
              variant="ghost"
              colorScheme="coolGray"
              onPress={() => navigation.navigate(routeNames.guardQrCodeHistory)}
            >
              <Row alignItems="center" space="1">
                <Text color="gray.500">History</Text>
                <Icon
                  as={MaterialCommunityIcons}
                  color="gray.500"
                  name="history"
                  size="lg"
                />
              </Row>
            </Button>
          </Row>

          <VStack alignItems="center" space={4}>
            <Text bold={true} fontSize="xl">
              Scan QR Code
            </Text>
            <Image
              source={{
                uri: "https://i.imgur.com/pPb88O3.png",
              }}
              alt="Qr Code"
              style={{
                width: "100%",
                height: 200,
                resizeMode: "contain",
              }}
            />
          </VStack>

          <Button
            colorScheme="indigo"
            width="xs"
            mx="auto"
            mt={10}
            onPress={() => navigation.navigate(routeNames.guardQrCodeScan)}
          >
            <Text color="white">Start Scanning</Text>
          </Button>
        </VStack>
      </PageLayout>
      <VisitorModal onClose={() => setShowModal(false)} showModal={showModal} />
    </>
  );
};

export default QrCodeMain;
