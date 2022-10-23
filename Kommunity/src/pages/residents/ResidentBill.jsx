import {
  Text,
  VStack,
  Row,
  Button,
  Icon,
  Input,
  Image,
  Fab,
  Pressable,
} from "native-base";
import React from "react";
import PageLayout from "../../components/PageLayout";
import routeNames from "../../constants/routeNames";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { BillAddModal } from "../../components/BillAddModal";
import { BillViewModal } from "../../components/BillViewModal";

const data = [
  {
    date: "September 2022",
    data: [
      {
        uri: "https://i.imgur.com/S6SJEhy.png",
        name: "Electricity Bill",
        description: "RM 108.80",
        value: true,
        date: "30 September 2022",
      },
      {
        uri: "https://i.imgur.com/HdFYhLm.png",
        name: "Water Bill",
        description: "RM 30.40",
        value: true,
        date: "30 September 2022",
      },
      {
        uri: "https://i.imgur.com/Z62iL4k.png",
        name: "Management Fee",
        description: "RM 40.00",
        value: false,
        date: " ",
      },
      {
        uri: "https://i.imgur.com/DXWr2we.png",
        name: "Cooking Gas",
        description: "RM 32.00",
        value: true,
        date: "30 September 2022",
      },
    ],
  },
  {
    date: "August 2022",
    data: [
      {
        uri: "https://i.imgur.com/S6SJEhy.png",
        name: "Electricity Bill",
        description: "RM 128.80",
        value: true,
        date: "30 August 2022",
      },
      {
        uri: "https://i.imgur.com/HdFYhLm.png",
        name: "Water Bill",
        description: "RM 38.40",
        value: true,
        date: "30 August 2022",
      },
      {
        uri: "https://i.imgur.com/Z62iL4k.png",
        name: "Management Fee",
        description: "RM 40.00",
        value: true,
        date: "30 August 2022",
      },
      {
        uri: "https://i.imgur.com/DXWr2we.png",
        name: "Cooking Gas",
        description: "RM 30.00",
        value: true,
        date: "30 August 2022",
      },
    ],
  },
  {
    date: "July 2022",
    data: [
      {
        uri: "https://i.imgur.com/S6SJEhy.png",
        name: "Electricity Bill",
        description: "RM 130.80",
        value: true,
        date: "30 July 2022",
      },
      {
        uri: "https://i.imgur.com/HdFYhLm.png",
        name: "Water Bill",
        description: "RM 35.40",
        value: true,
        date: "30 July 2022",
      },
      {
        uri: "https://i.imgur.com/Z62iL4k.png",
        name: "Management Fee",
        description: "RM 40.00",
        value: true,
        date: "30 July 2022",
      },
      {
        uri: "https://i.imgur.com/DXWr2we.png",
        name: "Cooking Gas",
        description: "RM 28.00",
        value: true,
        date: "30 July 2022",
      },
    ],
  },
];

const ResidentBill = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [billViewModal, setBillViewModal] = React.useState(false);
  const [billViewType, setBillViewType] = React.useState("");
  return (
    <>
      <PageLayout>
        <VStack py={4} space={4} px={4}>
          <Row alignItems="center" space={4} width="100%">
            <Text bold fontSize="xl" ml={1} mr="auto">
              Bill Management
            </Text>
            <Button
              variant="ghost"
              rounded="full"
              colorScheme="coolGray"
              onPress={() => {}}
            >
              <Icon
                as={MaterialCommunityIcons}
                name="filter-variant"
                size="lg"
              />
            </Button>
          </Row>
          <Input
            placeholder="Search Bill"
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
              <VStack key={month.date} mb={3}>
                <Text bold fontSize="md" mb={5}>
                  {month.date}
                </Text>
                {month.data.map((data, index) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setBillViewType(data.value ? "Paid" : "Pending");
                      setBillViewModal(true);
                    }}
                  >
                    <Row ml={2} space={2} mb={7}>
                      <Image
                        source={{ uri: data.uri }}
                        alt={data.name}
                        size="12"
                      />
                      <VStack flex={1}>
                        <Text bold>{data.name}</Text>
                        <Text color="gray.500">{data.description}</Text>
                      </VStack>
                      <VStack>
                        <Text
                          color={data.value ? "emerald.400" : "red.400"}
                          textAlign="right"
                        >
                          {data.value ? "Paid" : "Pending"}
                        </Text>
                        <Text color="gray.400">{data.date}</Text>
                      </VStack>
                    </Row>
                  </Pressable>
                ))}
              </VStack>
            ))}
          </VStack>
        </VStack>
      </PageLayout>
      <Fab
        renderInPortal={false}
        shadow={2}
        right={5}
        bottom={4}
        size="sm"
        colorScheme="indigo"
        icon={<Icon color="white" as={Entypo} name="plus" size="30" />}
        onPress={() => {
          setShowModal(true);
        }}
      />
      <BillAddModal onClose={() => setShowModal(false)} showModal={showModal} />
      <BillViewModal
        onClose={() => setBillViewModal(false)}
        showModal={billViewModal}
        billType={billViewType}
      />
    </>
  );
};

export default ResidentBill;
