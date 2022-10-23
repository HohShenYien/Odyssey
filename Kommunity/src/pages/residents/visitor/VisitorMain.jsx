import { Text, VStack, Row, Button, Icon, Image } from "native-base";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { VisitorModal } from "../../../components/VisitorModal";

const VisitorMain = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <PageLayout>
        <VStack py={4} space={8} px={2}>
          <Row justifyContent={"flex-end"}>
            <Button
              variant="ghost"
              colorScheme="coolGray"
              onPress={() => navigation.navigate(routeNames.visitorHistory)}
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

          <VStack alignItems="center" space={1}>
            <Image
              source={{
                uri: "https://i.imgur.com/wUexGV4.png",
              }}
              alt="No Visitor"
              size="2xl"
            />
            <Text bold={true} fontSize="xl">
              Don't have visitors yet
            </Text>
            <Text fontSize="md" color="gray.500">
              Feeling lonely?
            </Text>
          </VStack>

          <Button
            colorScheme="indigo"
            width="xs"
            mx="auto"
            onPress={() => setShowModal(true)}
          >
            <Text color="white">Add an Entry</Text>
          </Button>
        </VStack>
      </PageLayout>
      <VisitorModal
        onClose={() => {
          setShowModal(false);
        }}
        showModal={showModal}
        onSubmitPress={() => navigation.navigate(routeNames.visitorAdded)}
      />
    </>
  );
};

export default VisitorMain;
