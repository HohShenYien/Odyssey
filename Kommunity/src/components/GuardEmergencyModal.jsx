import { Button, Icon, Image, Modal, Text, VStack } from "native-base";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { useState } from "react";

export function GuardEmergencyModal({ showModal, onClose }) {
  const [arriving, setArriving] = useState(false);
  const [arrived, setArrived] = useState(false);
  return (
    <Modal
      isOpen={showModal}
      onClose={onClose}
      size="full"
      avoidKeyboard
      mx={2}
    >
      <Modal.Content>
        <Modal.Body backgroundColor="red.300">
          <VStack space={2} alignItems="center">
            <Icon
              as={Foundation}
              name="alert"
              color="red.500"
              size="64"
              ml={8}
            />
            {arriving ? (
              <>
                <Text fontSize="lg" bold mt={-6}>
                  The Destination is 4 minutes away
                </Text>
                <Image
                  source={{
                    uri: "https://i.imgur.com/WizhFfl.png",
                  }}
                  alt="Map"
                  size="2xl"
                ></Image>
                <Text textAlign="center">
                  Jalan Teknologi 5, Taman Teknologi Malaysia, {"\n"}
                  57000 Kuala Lumpur, {"\n"}
                  Wilayah Persekutuan Kuala Lumpur {"\n"}
                </Text>
                <Button
                  colorScheme="error"
                  width="64"
                  onPress={() => {
                    setArrived(true);
                    setArriving(false);
                  }}
                >
                  I HAVE ARRIVED
                </Button>
              </>
            ) : arrived ? (
              <>
                <Text fontSize="lg" bold mt={-6}>
                  You Arrived at The Destination
                </Text>
                <Text textAlign="center">
                  Jalan Teknologi 5, Taman Teknologi Malaysia, {"\n"}
                  57000 Kuala Lumpur, {"\n"}
                  Wilayah Persekutuan Kuala Lumpur {"\n"}
                </Text>
                <Button colorScheme="green" width="64" onPress={onClose}>
                  RESIDENT IS SAFE
                </Button>

                <Button colorScheme="error" width="64" onPress={onClose} mt={3}>
                  CALL POLICE
                </Button>
              </>
            ) : (
              <>
                <Text fontSize="lg" bold mt={-6}>
                  Someone has called for your help!
                </Text>
                <VStack>
                  <Text>
                    <Text bold>Name:</Text> Lim Ah Hock
                  </Text>
                  <Text>
                    <Text bold>Emergency:</Text> Theft
                  </Text>
                  <Text>
                    <Text bold>No. of Residents:</Text> 5
                  </Text>
                  <Text>
                    <Text bold>No. of Criminals:</Text> 2
                  </Text>
                  <Text>
                    <Text bold>Arms:</Text> YES
                  </Text>
                </VStack>
                <Image
                  source={{
                    uri: "https://i.imgur.com/WizhFfl.png",
                  }}
                  alt="Map"
                  size="2xl"
                ></Image>
                <Text textAlign="center">
                  Jalan Teknologi 5, Taman Teknologi Malaysia, {"\n"}
                  57000 Kuala Lumpur, {"\n"}
                  Wilayah Persekutuan Kuala Lumpur {"\n"}
                </Text>
                <Button
                  colorScheme="error"
                  width="64"
                  onPress={() => setArriving(true)}
                >
                  I'M ON MY WAY
                </Button>
              </>
            )}
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
