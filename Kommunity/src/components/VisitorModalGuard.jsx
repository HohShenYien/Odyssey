import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  KeyboardAvoidingView,
  Modal,
  Text,
  useToast,
  Select,
  VStack,
  CheckIcon,
} from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const locations = [
  "No. 1",
  "No. 2-1",
  "No. 2-2",
  "No. 3-1",
  "No. 3-2",
  "No. 4-1",
  "No. 4-2",
  "No. 11",
  "No. 12-1",
  "No. 12-2",
  "No. 13-1",
  "No. 13-2",
  "No. 14-1",
  "No. 14-2",
  "No. 21",
  "No. 22-1",
  "No. 22-2",
  "No. 23-1",
  "No. 23-2",
  "No. 24-1",
  "No. 24-2",
];

export function VisitorModalGuard({ showModal, onClose }) {
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
                <Select
                  minWidth="200"
                  accessibilityLabel="Choose Address"
                  placeholder="Choose Address"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  InputLeftElement={
                    <Icon as={Ionicons} name="map-outline" ml={2} />
                  }
                  mt={1}
                >
                  {locations.map((val, index) => (
                    <Select.Item label={val} value={index} key={index} />
                  ))}
                </Select>
              </VStack>
              <HStack px={2} space={4}>
                <Button
                  colorScheme={"coolGray"}
                  variant="outline"
                  flex="1"
                  onPress={onClose}
                >
                  <Text>Cancel</Text>
                </Button>
                <Button colorScheme="indigo" flex="1" onPress={onSubmit}>
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
