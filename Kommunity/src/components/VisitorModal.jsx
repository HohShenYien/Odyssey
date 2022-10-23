import {
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  Image,
  Input,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  Stack,
  Text,
  useToast,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateTime } from "luxon";

export function VisitorModal({ showModal, onClose, onSubmitPress = () => {} }) {
  const [date, setDate] = useState(DateTime.now());
  const [showDate, setShowDate] = useState(false);
  const toast = useToast();

  const initialRef = React.useRef(null);

  const onSubmit = () => {
    onClose();
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="4" py="2" rounded="sm">
            <Text color="white">Entry Created</Text>
          </Box>
        );
      },
    });
  };

  const onDateDialogChange = (event, date) => {
    switch (event.type) {
      case "set":
        setDate(DateTime.fromJSDate(date));
      // falls through
      default:
        setShowDate(false);
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
                    uri: "https://i.imgur.com/g1hHHh2.png",
                  }}
                  alt="Visitor Management"
                  size="lg"
                />
                <Text fontSize="lg" bold={true}>
                  New Visitor Entry
                </Text>
              </VStack>
              <VStack space={2} px={2}>
                <Input
                  defaultValue=""
                  placeholder="Visitor Name"
                  InputLeftElement={
                    <Icon as={Ionicons} name="md-text-outline" ml={2} />
                  }
                  ref={initialRef}
                />
                <Input
                  defaultValue=""
                  placeholder="Visitor Car Plate Number"
                  InputLeftElement={
                    <Icon as={Ionicons} name="car-outline" ml={2} />
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
                  variant="outline"
                  flex="1"
                  onPress={() => {
                    onClose();
                  }}
                >
                  <Text>Cancel</Text>
                </Button>
                <Button
                  colorScheme="indigo"
                  flex="1"
                  onPress={() => {
                    onSubmitPress();
                    onSubmit();
                  }}
                >
                  <Text color="white">Submit</Text>
                </Button>
              </HStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </KeyboardAvoidingView>
  );
}
