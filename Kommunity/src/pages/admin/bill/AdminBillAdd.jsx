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
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { DateTime } from "luxon";
import DateTimePicker from "@react-native-community/datetimepicker";

const AdminBillAdd = ({ navigation }) => {
  const [service, setService] = React.useState("");
  const [date, setDate] = React.useState(DateTime.now());
  const [time, setTime] = React.useState(DateTime.now());
  const [showDate, setShowDate] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);
  const toast = useToast();
  const bgColor = "trueGray.200";

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
    navigation.navigate(routeNames.adminBillOverview);
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="4" py="2" rounded="sm">
            <Text color="white">Bill Added</Text>
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
            onPress={() => navigation.navigate(routeNames.adminBillOverview)}
          >
            <Icon as={MaterialCommunityIcons} name="arrow-left" size="lg" />
          </Button>
          <Text bold fontSize="xl">
            Edit Bill
          </Text>
        </Row>

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Bill Type
          </Text>

          <Select
            bgColor={bgColor}
            selectedValue={service}
            defaultValue={service}
            width="100%"
            accessibilityLabel="Select Bill Type"
            placeholder="Select Bill Type"
            _selectedItem={{
              bg: "teal.300",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Management" value="management" />
            <Select.Item label="Maintenance" value="maintenance" />
          </Select>
        </VStack>

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Bill Name
          </Text>

          <Input placeholder="Enter Bill Name" bgColor={bgColor} />
        </VStack>

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Description
          </Text>

          <TextArea h={20} placeholder="Enter Description" bgColor={bgColor} />
        </VStack>

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Bill Payment Type
          </Text>

          <Box pl={1}>
            <Radio.Group
              defaultValue="1"
              name="billPaymentType"
              accessibilityLabel="bill payment type"
            >
              <Radio value="1" my={1} size="sm">
                One-time Bill
              </Radio>
              <Radio value="2" my={1} size="sm">
                Recurring Bill
              </Radio>
            </Radio.Group>
          </Box>
        </VStack>

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Bill Amount
          </Text>
          <Input
            placeholder="Enter Bill Amount"
            keyboardType="number-pad"
            InputLeftElement={
              <Text bold ml={2}>
                RM
              </Text>
            }
            bgColor={bgColor}
          />
        </VStack>

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Date and Time to Send Bill
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

export default AdminBillAdd;
