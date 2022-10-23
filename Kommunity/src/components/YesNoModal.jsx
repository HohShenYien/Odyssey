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
import React from "react";

export function YesNoModal({
  showModal,
  onClose,
  question = "Are You Sure?",
  showToast = true,
  toastMessage = "Done",
  toastFontColor = "white",
  toastBgColor = "emerald.500",
  onNoPressed = () => {},
  onYesPressed = () => {},
}) {
  const toast = useToast();

  const initialRef = React.useRef(null);

  const onSubmit = () => {
    onClose();
    if (showToast) {
      toast.show({
        render: () => {
          return (
            <Box bg={toastBgColor} px="4" py="2" rounded="sm">
              <Text color={toastFontColor}>{toastMessage}</Text>
            </Box>
          );
        },
      });
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
              <HStack
                height={20}
                alignItems="center"
                alignSelf="center"
                width="80%"
              >
                <Text fontSize="lg" bold={true} textAlign="center" width="100%">
                  {question}
                </Text>
              </HStack>

              <HStack px={2} space={4}>
                <Button
                  colorScheme="coolGray"
                  variant="outline"
                  flex="1"
                  onPress={() => {
                    onNoPressed();
                    onClose();
                  }}
                >
                  <Text>No</Text>
                </Button>
                <Button
                  colorScheme="indigo"
                  flex="1"
                  onPress={() => {
                    onYesPressed();
                    onSubmit();
                  }}
                >
                  <Text color="white">Yes</Text>
                </Button>
              </HStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </KeyboardAvoidingView>
  );
}
