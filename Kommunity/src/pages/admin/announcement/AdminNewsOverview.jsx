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
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Feature from "../../../components/Feature";

const AdminNewsOverview = ({ navigation }) => {
  const features = [
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
    },
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
    },
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
    },
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
    },
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
    },
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
    },
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
    },
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
    },
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
    },
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
    },
    {
      name: "Management Price Raise",
      description: "16 October 2022        10:00 am",
      img: "https://i.imgur.com/ZBft9fYb.jpg",
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
              Announcement and News
            </Text>
          </Row>
          <Input
            mb={3}
            placeholder="Serach Announcement"
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
          <VStack space={5}>
            {features.map((data, index) => (
              <Pressable
                onPress={() => navigation.navigate(routeNames.adminNewsView)}
                key={index}
              >
                <Feature
                  key={index}
                  name={data.name}
                  img={data.img}
                  description={data.description}
                />
              </Pressable>
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
        onPress={() => navigation.navigate(routeNames.adminNewsAdd)}
      />
    </>
  );
};

export default AdminNewsOverview;
