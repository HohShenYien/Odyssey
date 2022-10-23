import {
  Text,
  VStack,
  Row,
  Button,
  Icon,
  Input,
  Select,
  CheckIcon,
  TextArea,
  Radio,
  Box,
  Pressable,
  Spacer,
  HStack,
  useToast,
} from "native-base";
import React from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AdminResidentAdd = ({ navigation }) => {
  const [service, setService] = React.useState("");
  const toast = useToast();
  const bgColor = "trueGray.200";

  const onSubmit = () => {
    navigation.navigate(routeNames.adminResidentSearch);
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="4" py="2" rounded="sm">
            <Text color="white">Resident Added</Text>
          </Box>
        );
      },
    });
  };

  const data1 = [
    {
      key: "Owner's Name",
      content: "Enter Name",
    },
    {
      key: "Owner's IC Number",
      content: "Enter IC Number",
    },
    {
      key: "Onwer's Contact",
      content: "Enter Contact Number",
    },
    {
      key: "Owner's Email",
      content: "Enter Email",
    },
  ];

  const data2 = [
    {
      key: "Car Plate Number(s)",
      content: "Enter Car Plate Number(s) [one car plate per line]",
    },
    {
      key: "Other Resident(s)",
      content: "Enter Other Residents' Name [one resident per line]",
    },
  ];

  return (
    <PageLayout>
      <VStack py={4} space={5} px={4}>
        <Row justifyContent={"flex-start"} alignItems="center" space={4} mb={3}>
          <Button
            variant="ghost"
            rounded="full"
            colorScheme="coolGray"
            onPress={() => navigation.navigate(routeNames.adminResidentSearch)}
          >
            <Icon as={MaterialCommunityIcons} name="arrow-left" size="lg" />
          </Button>
          <Text bold fontSize="xl">
            Add Resident
          </Text>
        </Row>

        {data1.map((data, index) => (
          <VStack key={index} space={1}>
            <Text ml={1} bold fontSize="15">
              {data.key}
            </Text>

            <Input
              placeholder={data.content}
              bgColor={bgColor}
              keyboardType={
                data.key === "Onwer's Contact" ||
                data.key === "Owner's IC Number"
                  ? "number-pad"
                  : "default"
              }
            />
          </VStack>
        ))}

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Gender
          </Text>

          <Select
            bgColor={bgColor}
            selectedValue={service}
            defaultValue={service}
            width="40%"
            accessibilityLabel="Select Gender"
            placeholder="Select Gender"
            _selectedItem={{
              bg: "teal.300",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Male" value="Male" />
            <Select.Item label="Female" value="Female" />
          </Select>
        </VStack>

        {data2.map((data, index) => (
          <VStack key={index} space={1}>
            <Text ml={1} bold fontSize="15">
              {data.key}
            </Text>

            <TextArea h="32" placeholder={data.content} bgColor={bgColor} />
          </VStack>
        ))}

        <Button
          colorScheme="indigo"
          flex="1"
          mt={5}
          w="50%"
          alignSelf="center"
          onPress={onSubmit}
        >
          <Text color="white">Confirm</Text>
        </Button>
      </VStack>
    </PageLayout>
  );
};

export default AdminResidentAdd;
