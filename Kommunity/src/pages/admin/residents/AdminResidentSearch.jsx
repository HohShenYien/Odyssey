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
  Select,
  CheckIcon,
  View,
  Pressable,
} from "native-base";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";

const AdminResidentSearch = ({ navigation }) => {
  const [streetName, setStreetName] = useState("street2");
  const [houseNum, setHouseNum] = useState("house18");
  const [bill, setBill] = useState("200");
  const bgColor = "trueGray.200";

  const data = [
    {
      source: "https://i.imgur.com/PWEYJRh.png",
      imageAlt: "house",
      title: "No.18, Jalan Midah Barat 2",
      owner: "William Hoh Shen Yien",
      amount: 200,
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
            mb={3}
            pl={1}
          >
            <Text bold fontSize="xl">
              Residents
            </Text>
          </Row>

          <VStack space={1}>
            <Text ml={1} bold fontSize="15">
              Street Name
            </Text>

            <Select
              bgColor={bgColor}
              selectedValue={streetName}
              defaultValue={streetName}
              width="100%"
              accessibilityLabel="Select Street Name"
              placeholder="Select Street Name"
              _selectedItem={{
                bg: "teal.300",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setStreetName(itemValue)}
            >
              <Select.Item label="Jalan Midah Barat 1" value="street1" />
              <Select.Item label="Jalan Midah Barat 2" value="street2" />
              <Select.Item label="Jalan Midah Barat 3" value="street3" />
              <Select.Item label="Jalan Midah Barat 4" value="street4" />
              <Select.Item label="Jalan Midah Barat 5" value="street5" />
              <Select.Item label="Jalan Midah Barat 6" value="street6" />
              <Select.Item label="Jalan Midah Barat 7" value="street7" />
              <Select.Item label="Jalan Midah Barat 8" value="street8" />
              <Select.Item label="Jalan Midah Barat 9" value="street9" />
              <Select.Item label="Jalan Midah Barat 10" value="street10" />
              <Select.Item label="Jalan Midah Barat 11" value="street11" />
              <Select.Item label="Jalan Midah Barat 12" value="street12" />
            </Select>
          </VStack>

          <VStack space={1}>
            <Text ml={1} bold fontSize="15">
              House Number
            </Text>

            <Select
              bgColor={bgColor}
              selectedValue={houseNum}
              defaultValue={houseNum}
              width="100%"
              accessibilityLabel="Select House Number"
              placeholder="Select House Number"
              _selectedItem={{
                bg: "teal.300",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setHouseNum(itemValue)}
            >
              <Select.Item label="No. 1" value="house1" />
              <Select.Item label="No. 2" value="house2" />
              <Select.Item label="No. 3" value="house3" />
              <Select.Item label="No. 3A" value="house4" />
              <Select.Item label="No. 5" value="house5" />
              <Select.Item label="No. 6" value="house6" />
              <Select.Item label="No. 7" value="house7" />
              <Select.Item label="No. 8" value="house8" />
              <Select.Item label="No. 9" value="house9" />
              <Select.Item label="No. 10" value="house10" />
              <Select.Item label="No. 11" value="house11" />
              <Select.Item label="No. 12" value="house12" />
              <Select.Item label="No. 13" value="house13" />
              <Select.Item label="No. 13A" value="house14" />
              <Select.Item label="No. 15" value="house15" />
              <Select.Item label="No. 16" value="house16" />
              <Select.Item label="No. 17" value="house17" />
              <Select.Item label="No. 18" value="house18" />
              <Select.Item label="No. 19" value="house19" />
              <Select.Item label="No. 20" value="house20" />
            </Select>
          </VStack>

          <VStack space={1}>
            <Text ml={1} bold fontSize="15">
              Outstanding Bill Amount
            </Text>

            <Select
              bgColor={bgColor}
              selectedValue={bill}
              defaultValue={bill}
              width="100%"
              accessibilityLabel="Select Bill Amount"
              placeholder="Select Bill Amount"
              _selectedItem={{
                bg: "teal.300",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setBill(itemValue)}
            >
              <Select.Item label="All" value="all" />
              <Select.Item label="RM 0" value="0" />
              <Select.Item label="RM 50 and below" value="50" />
              <Select.Item label="RM 100 and below" value="100" />
              <Select.Item label="RM 200 and below" value="200" />
              <Select.Item label="RM 300 and below" value="300" />
              <Select.Item label="More than RM 300" value="300+" />
            </Select>
          </VStack>

          <View
            style={{ flex: 1, height: 2, backgroundColor: "gray" }}
            my={3}
          />

          <Text ml={1} bold fontSize="15">
            Resident(s) found:
          </Text>

          {data.map((data, index) => (
            <Pressable
              key={index}
              width="100%"
              onPress={() =>
                navigation.navigate(routeNames.adminResidentProfile)
              }
            >
              <Box
                flex={1}
                bgColor="teal.100"
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
                    <Text bold fontSize="lg" color="teal.700">
                      {data.title}
                    </Text>

                    <Text bold fontSize="sm" w="100%" mt={1}>
                      Owner
                    </Text>

                    <Text fontSize="12" color="gray.500" w="100%">
                      {data.owner}
                    </Text>

                    <Text bold fontSize="sm" w="100%" mt={1}>
                      Oustanding Bill Amount
                    </Text>

                    <Text bold fontSize="12" color="danger.600" w="100%">
                      RM {data.amount}
                    </Text>
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
        onPress={() => navigation.navigate(routeNames.adminResidentAdd)}
      />
    </>
  );
};

export default AdminResidentSearch;
