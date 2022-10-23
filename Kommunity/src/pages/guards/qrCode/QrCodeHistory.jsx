import { Text, VStack, Row, Button, Icon, Input } from "native-base";
import React from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  {
    date: "September 2022",
    data: [
      {
        name: "Tasigen",
        description: "QR: 231n435234b1 verified",
        value: true,
        date: "30 September 2022",
      },
      {
        name: "Hoh Shen Yien",
        description: "QR: 34b254k543j5k verified",
        value: true,
        date: "27 September 2022",
      },
      {
        name: "Bobby Chong",
        description: "QR failed to be verified",
        value: false,
        date: "24 September 2022",
      },
      {
        name: "Bernie",
        description: "QR: 83123s892h23q verified",
        value: true,
        date: "20 September 2022",
      },
    ],
  },
];

const QrCodeHistory = ({ navigation }) => {
  return (
    <PageLayout>
      <VStack py={4} space={4} px={4}>
        <Row justifyContent={"flex-start"} alignItems="center" space={4}>
          <Button
            variant="ghost"
            rounded="full"
            colorScheme="coolGray"
            onPress={() => navigation.navigate(routeNames.guardQrCodeMain)}
          >
            <Icon as={MaterialCommunityIcons} name="arrow-left" size="lg" />
          </Button>
          <Text bold fontSize="xl">
            Visitor History
          </Text>
        </Row>
        <Input
          placeholder="Search Visitor"
          InputRightElement={
            <Button
              variant="ghost"
              rounded="full"
              colorScheme="coolGray"
              mr={2}
            >
              <Icon as={MaterialIcons} name="search" size="md" />
            </Button>
          }
        ></Input>
        <VStack>
          {data.map((month) => (
            <VStack key={month.date} mb={2}>
              <Text bold fontSize="md" mb={2}>
                {month.date}
              </Text>
              {month.data.map((data, index) => (
                <Row key={index} ml={2} space={2} mb={4}>
                  <VStack flex={1}>
                    <Text bold>{data.name}</Text>
                    <Text color="gray.500">{data.description}</Text>
                  </VStack>
                  <VStack>
                    <Text
                      color={data.value ? "emerald.400" : "red.400"}
                      textAlign="right"
                    >
                      {data.value ? "Allowed" : "Rejected"}
                    </Text>
                    <Text color="gray.400">{data.date}</Text>
                  </VStack>
                </Row>
              ))}
            </VStack>
          ))}
        </VStack>
      </VStack>
    </PageLayout>
  );
};

export default QrCodeHistory;
