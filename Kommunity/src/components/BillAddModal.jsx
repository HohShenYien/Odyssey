import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Icon,
  Image,
  Input,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  Select,
  Stack,
  Text,
  useToast,
  VStack,
} from "native-base";
import React, { useState } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateTime } from "luxon";

export function BillAddModal({ showModal, onClose }) {
  const [date, setDate] = useState(DateTime.now());
  const [showDate, setShowDate] = useState(false);
  const [service, setService] = useState("");
  const toast = useToast();

  const initialRef = React.useRef(null);

  const onSubmit = (toastText = "Done") => {
    onClose();
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="4" py="2" rounded="sm">
            <Text color="white">{toastText}</Text>
          </Box>
        );
      },
    });
  };

  const onDateDialogChange = (event, date) => {
    setShowDate(false);
    switch (event.type) {
      case "set":
        setDate(DateTime.fromJSDate(date));
    }
  };

  return (
    <KeyboardAvoidingView>
      <Modal
        isOpen={showModal}
        onClose={onClose}
        size="lg"
        initialFocusRef={initialRef}
        avoidKeyboard
      >
        <Modal.Content maxWidth="350">
          <Modal.Body>
            <VStack space={4}>
              <VStack space={1} alignItems="center">
                <Image
                  source={{
                    uri: "https://i.imgur.com/9ozR77U.png",
                  }}
                  alt="New Bill"
                  size="lg"
                />
                <Text fontSize="lg" bold={true}>
                  New Bill Payment
                </Text>
              </VStack>

              <VStack space={2} px={2}>
                <HStack
                  width="100%"
                  alignItems={"center"}
                  borderColor="trueGray.300"
                  borderWidth={1}
                  borderRadius={5}
                >
                  <Icon
                    as={Ionicons}
                    name="information-circle-outline"
                    ml={2}
                  />
                  <Box flex={1}>
                    <Select
                      selectedValue={service}
                      defaultValue={service}
                      width="100%"
                      accessibilityLabel="Payment Type"
                      placeholder="Payment Type"
                      _selectedItem={{
                        bg: "teal.300",
                        endIcon: <CheckIcon size="5" />,
                      }}
                      borderColor="transparent"
                      onValueChange={(itemValue) => setService(itemValue)}
                    >
                      <Select.Item
                        label="Electricity Bill"
                        value="electricity"
                      />
                      <Select.Item label="Water Bill" value="water" />
                      <Select.Item label="Management Fee" value="management" />
                      <Select.Item label="Cooking Gas" value="cooking" />
                    </Select>
                  </Box>
                </HStack>

                <Input
                  defaultValue=""
                  placeholder="Payment Description"
                  InputLeftElement={
                    <Icon
                      as={MaterialCommunityIcons}
                      name="file-document-outline"
                      ml={2}
                    />
                  }
                />
                <Input
                  defaultValue=""
                  placeholder="Amount"
                  InputLeftElement={
                    <Icon as={FontAwesome} name="dollar" ml={3} mr={-1} />
                  }
                />
                <Pressable onPress={() => setShowDate(true)}>
                  <Input
                    defaultValue=""
                    placeholder="Date"
                    InputLeftElement={
                      <Icon as={Ionicons} name="md-calendar-outline" ml={2} />
                    }
                    value={date.toFormat("dd-LL-yyyy")}
                    isReadOnly={true}
                  />
                </Pressable>

                {showDate && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date.toJSDate()}
                    mode={"date"}
                    onChange={onDateDialogChange}
                  />
                )}
              </VStack>
              <HStack px={2} space={4}>
                <Button
                  colorScheme={"coolGray"}
                  variant="ghost"
                  flex="1"
                  onPress={onClose}
                >
                  <Text fontSize="12">Cancel</Text>
                </Button>
                <Button
                  colorScheme="indigo"
                  variant="outline"
                  flex="1"
                  borderColor="indigo.500"
                  onPress={() => onSubmit("Bill Created")}
                >
                  <Text fontSize="12" color="indigo.500">
                    Pending
                  </Text>
                </Button>
                <Button
                  colorScheme="indigo"
                  flex="1"
                  onPress={() => onSubmit("Bill Paid")}
                >
                  <Text fontSize="12" color="white">
                    Pay
                  </Text>
                </Button>
              </HStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </KeyboardAvoidingView>
  );
}
