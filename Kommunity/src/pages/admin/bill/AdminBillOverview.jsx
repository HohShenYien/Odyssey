import {
  Text,
  VStack,
  Row,
  Button,
  Icon,
  Image,
  Input,
  Box,
  HStack,
  Spacer,
  Fab,
  Pressable,
} from "native-base";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
import { VisitorModal } from "../../../components/VisitorModal";

const AdminBillOverview = ({ navigation }) => {
  const data = [
    {
      source: "https://i.imgur.com/gRDWUMz.png",
      imageAlt: "management bill",
      title: "Monthly Management Bill",
      type: "Management",
      amount: 100,
      paymentType: "Recurring Bill",
      date: "1st of Every Month",
      time: "10:00 am",
    },
    {
      source: "https://i.imgur.com/Ix9wOOX.png",
      imageAlt: "maintenance bill",
      title: "Street Lights Fixing",
      type: "Maintenance",
      amount: 10,
      paymentType: "One-time Bill",
      date: "01-10-2022",
      time: "10:00 am",
    },
  ];
  return (
    <>
      <PageLayout>
        <VStack py={7} space={4} px={4}>
          <Row
            justifyContent={"flex-start"}
            alignItems="center"
            space={4}
            pl={1}
          >
            <Text bold fontSize="xl">
              Bills
            </Text>
          </Row>
          <Input
            mb={3}
            placeholder="Serach Bill"
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
          />
          {data.map((data, index) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate(routeNames.adminBillView)}
            >
              <Box
                flex={1}
                bgColor="blueGray.200"
                borderRadius={10}
                shadow={8}
                mb={3}
                mx={1}
              >
                <HStack w="100%" pl={3} flex={1}>
                  <Image
                    source={{ uri: data.source }}
                    alt={data.imageAlt}
                    style={{
                      width: "18%",
                      height: 135,
                      resizeMode: "contain",
                    }}
                  />
                  <VStack w="75%" pl={5} pr={2} pt={1}>
                    <Text bold fontSize="lg" color="darkBlue.600">
                      {data.title}
                    </Text>

                    <HStack w="100%">
                      <Text bold fontSize="sm" w="50%">
                        Type
                      </Text>
                      <Text bold fontSize="sm" w="50%">
                        Payment Type
                      </Text>
                    </HStack>

                    <HStack w="100%">
                      <Text fontSize="12" color="gray.500" w="50%">
                        {data.type}
                      </Text>
                      <Text fontSize="12" color="gray.500" w="50%">
                        {data.paymentType}
                      </Text>
                    </HStack>

                    <HStack w="100%">
                      <Text bold fontSize="sm" w="50%">
                        Amount
                      </Text>
                      <Text bold fontSize="sm" w="50%">
                        Date and Time
                      </Text>
                    </HStack>

                    <HStack w="100%">
                      <Text fontSize="12" color="gray.500" w="50%">
                        RM {data.amount}
                      </Text>
                      <Text fontSize="12" color="gray.500" w="50%">
                        {data.date}
                      </Text>
                    </HStack>

                    <HStack w="100%">
                      <Spacer w="50%" />
                      <Text fontSize="12" color="gray.500" w="50%">
                        {data.time}
                      </Text>
                    </HStack>
                  </VStack>

                  <Icon
                    as={FontAwesome}
                    name="chevron-right"
                    size="lg"
                    alignSelf="center"
                    color="dark.300"
                  />
                </HStack>
              </Box>
            </Pressable>
          ))}
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
        onPress={() => navigation.navigate(routeNames.adminBillAdd)}
      />
    </>
  );
};

export default AdminBillOverview;
