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
import React from "react";

export function BillViewModal({ showModal, onClose, billType = "Pending" }) {
  const toast = useToast();

  const initialRef = React.useRef(null);

  const data =
    billType === "Pending"
      ? [
          {
            uri: "https://i.imgur.com/Z62iL4k.png",
            title: "Management Fee",
            tableData: [
              {
                key: "Description",
                content: "Monthly fee",
              },
              {
                key: "Amount",
                content: "RM 40.00",
              },
              {
                key: "Date",
                content: "-",
              },
              {
                key: "Status",
                content: "Pending",
              },
            ],
          },
        ]
      : [
          // billType is "Paid"
          {
            uri: "https://i.imgur.com/S6SJEhy.png",
            title: "Electricity Bill",
            tableData: [
              {
                key: "Description",
                content: "Sept electricity bill ",
              },
              {
                key: "Amount",
                content: "RM 108.80",
              },
              {
                key: "Date",
                content: "30-09-2022",
              },
              {
                key: "Status",
                content: "Paid",
              },
            ],
          },
        ];

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
                    uri: data[0].uri,
                  }}
                  alt="Electricity Bill"
                  size="lg"
                />
                <Text fontSize="lg" bold={true}>
                  {data[0].title}
                </Text>
              </VStack>

              <VStack space={2} px={4} py={2}>
                {data[0].tableData.map((data, index) => (
                  <HStack key={index} width="100%">
                    <Text textAlign="left" fontSize="sm" bold width="40%">
                      {data.key}
                    </Text>
                    <Text
                      textAlign="right"
                      fontSize="sm"
                      width="60%"
                      color={
                        data.content === "Pending"
                          ? "red.400"
                          : data.content === "Paid"
                          ? "emerald.400"
                          : "black"
                      }
                    >
                      {data.content}
                    </Text>
                  </HStack>
                ))}
              </VStack>
              <HStack px={2} space={4}>
                {billType === "Paid" ? (
                  <Button
                    colorScheme={"indigo"}
                    flex="1"
                    onPress={onClose}
                    mx={8}
                  >
                    <Text color="white">OK</Text>
                  </Button>
                ) : (
                  <>
                    <Button
                      colorScheme="error"
                      flex="1"
                      onPress={() => onSubmit("Bill Deleted")}
                    >
                      <Text color="white">Delete</Text>
                    </Button>
                    <Button
                      colorScheme="indigo"
                      flex="1"
                      onPress={() => onSubmit("Bill Paid")}
                    >
                      <Text color="white">Pay</Text>
                    </Button>
                  </>
                )}
              </HStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </KeyboardAvoidingView>
  );
}
