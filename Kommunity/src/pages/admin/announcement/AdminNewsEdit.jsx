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
  Image,
} from "native-base";
import React from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { DateTime } from "luxon";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getImage } from "../../../components/GetImage";

const AdminNewsEdit = ({ navigation }) => {
  const [service, setService] = React.useState("Important");
  const [date, setDate] = React.useState(
    DateTime.fromObject({ year: 2022, month: 10, day: 16 })
  );
  const [time, setTime] = React.useState(
    DateTime.fromObject({ hour: 10, minute: 0 })
  );
  const [showDate, setShowDate] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);
  const [imageUri, setImageUri] = React.useState(
    "https://i.imgur.com/ZBft9fYb.jpg"
  );
  const toast = useToast();
  const bgColor = "trueGray.200";
  const description =
    "The management team has decided to provide more features through the Kommunity application, thus the management fees will have to be increased by RM 20.\nTotal: RM 120";

  const onDateDialogChange = (event, date) => {
    setShowDate(false);
    switch (event.type) {
      case "set":
        setDate(DateTime.fromJSDate(date));
    }
  };

  const onTimeDialogChange = (event, time) => {
    setShowTime(false);
    switch (event.type) {
      case "set":
        setTime(DateTime.fromJSDate(time));
    }
  };

  const onSubmit = () => {
    navigation.navigate(routeNames.adminNewsView);
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="4" py="2" rounded="sm">
            <Text color="white">Announcement Changed</Text>
          </Box>
        );
      },
    });
  };

  return (
    <PageLayout>
      <VStack py={4} space={5} px={4}>
        <Row justifyContent={"flex-start"} alignItems="center" space={4} mb={3}>
          <Button
            variant="ghost"
            rounded="full"
            colorScheme="coolGray"
            onPress={() => navigation.navigate(routeNames.adminNewsView)}
          >
            <Icon as={MaterialCommunityIcons} name="arrow-left" size="lg" />
          </Button>
          <Text bold fontSize="xl">
            Edit Announcement
          </Text>
        </Row>

        <VStack mt={3} alignItems="center">
          <Image
            source={{ uri: imageUri }}
            alt="announcement image"
            size="lg"
            bgColor={"trueGray.300"}
            borderRadius={10}
          />

          <Button
            colorScheme="indigo"
            alignSelf="center"
            variant="unstyled"
            w="50%"
            leftIcon={
              <Icon
                as={MaterialCommunityIcons}
                name="file-image-plus-outline"
                size="sm"
              />
            }
            onPress={() => getImage(setImageUri)}
          >
            <Text color="black">Select Image</Text>
          </Button>
        </VStack>

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Announcement Type
          </Text>

          <Select
            bgColor={bgColor}
            selectedValue={service}
            defaultValue={service}
            width="100%"
            accessibilityLabel="Select Announcement Type"
            placeholder="Select Announcement Type"
            _selectedItem={{
              bg: "teal.300",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Standard" value="Standard" />
            <Select.Item label="Event" value="Event" />
            <Select.Item label="Important" value="Important" />
            <Select.Item label="Urgent" value="Urgent" />
          </Select>
        </VStack>

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Title
          </Text>

          <Input placeholder="Enter Title" bgColor={bgColor}>
            <Text>Management Price Raise</Text>
          </Input>
        </VStack>

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Description
          </Text>

          <TextArea h="32" placeholder="Enter Description" bgColor={bgColor}>
            <Text>{description}</Text>
          </TextArea>
        </VStack>

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Date and Time to Send Announcement
          </Text>
          <HStack>
            <Pressable w="40%" onPress={() => setShowDate(true)}>
              <Input
                placeholder="Date"
                InputLeftElement={
                  <Icon as={Ionicons} name="md-calendar-outline" ml={2} />
                }
                value={date.toFormat("dd-LL-yyyy")}
                isReadOnly={true}
                bgColor={bgColor}
              />
            </Pressable>
            <Box w="10%" />
            <Pressable w="40%" onPress={() => setShowTime(true)}>
              <Input
                placeholder="Time"
                InputLeftElement={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="clock-outline"
                    ml={2}
                  />
                }
                value={time.toFormat("HH:mm")}
                isReadOnly={true}
                bgColor={bgColor}
              />
            </Pressable>
          </HStack>

          {showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date.toJSDate()}
              mode={"date"}
              onChange={onDateDialogChange}
            />
          )}

          {showTime && (
            <DateTimePicker
              testID="dateTimePicker2"
              value={date.toJSDate()}
              mode={"time"}
              onChange={onTimeDialogChange}
            />
          )}
        </VStack>

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

export default AdminNewsEdit;
