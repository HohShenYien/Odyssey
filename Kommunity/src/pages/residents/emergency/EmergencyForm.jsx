import {
  Box,
  Image,
  HStack,
  Text,
  VStack,
  Button,
  FormControl,
  Stack,
  Input,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";

const types = [
  {
    icon: "https://i.imgur.com/eoOKRxF.png",
    name: "Car Theft",
  },
  {
    icon: "https://i.imgur.com/tYpA5aG.png",
    name: "Health",
  },
  {
    icon: "https://i.imgur.com/5H9eCyb.png",
    name: "Robbery",
  },
  {
    icon: "https://i.imgur.com/ndO9Z3I.png",
    name: "Repair",
  },
  {
    icon: "https://i.imgur.com/VPblA4i.png",
    name: "Hostile / Kidnapping",
  },
  {
    icon: "https://i.imgur.com/jSyQQXf.png",
    name: "Other",
  },
];

const EmergencyButtonPage = ({ navigation }) => {
  const [selected, setSelected] = useState(-1);
  const [armed, setArmed] = useState(false);
  return (
    <PageLayout>
      <VStack py={4} space={6}>
        <Box>
          <Text fontSize="2xl" bold={true} textAlign="center">
            Help is on the way...
          </Text>
          <Text textAlign="center" color="gray.500">
            Let us know the situation to further assist you
          </Text>
        </Box>
        <VStack px={4} space={4}>
          {[...Array(3)].map((_, row) => (
            <HStack key={row} space={4}>
              {[...Array(2)].map((_, col) => {
                const currentIdx = row * 2 + col;
                const type = types[currentIdx];
                return (
                  <Button
                    key={col}
                    flex={1}
                    variant={selected === currentIdx ? "solid" : "outline"}
                    colorScheme="indigo"
                    borderColor="indigo.500"
                    onPress={() =>
                      setSelected(selected === currentIdx ? -1 : currentIdx)
                    }
                  >
                    <HStack space={2} alignItems="center" flexDir="row">
                      <Image
                        source={{ uri: type.icon }}
                        alt={type.name}
                        size="8"
                      />
                      <Text
                        width="32"
                        color={selected === currentIdx ? "white" : "black"}
                      >
                        {type.name}
                      </Text>
                    </HStack>
                  </Button>
                );
              })}
            </HStack>
          ))}
        </VStack>

        <VStack space={2}>
          <Text textAlign="center">Armed with Weapons</Text>
          <HStack space="4" px={4}>
            <Button
              flex="1"
              variant={armed ? "solid" : "outline"}
              colorScheme="indigo"
              borderColor="indigo.500"
              onPress={() => setArmed(true)}
            >
              Yes
            </Button>
            <Button
              flex="1"
              variant={!armed ? "solid" : "outline"}
              colorScheme="indigo"
              borderColor="indigo.500"
              onPress={() => setArmed(false)}
            >
              No
            </Button>
          </HStack>
        </VStack>

        <VStack space={2}>
          <FormControl>
            <Stack mx="4">
              <FormControl.Label>Number of people in house</FormControl.Label>
              <Input
                type="number"
                defaultValue=""
                placeholder="Number of people in house"
              />
            </Stack>
          </FormControl>
          <FormControl>
            <Stack mx="4">
              <FormControl.Label>Number of criminals</FormControl.Label>
              <Input
                type="number"
                defaultValue=""
                placeholder="Number of criminals"
              />
            </Stack>
          </FormControl>
          <FormControl>
            <Stack mx="4">
              <FormControl.Label>Description</FormControl.Label>
              <TextArea defaultValue="" placeholder="Description" />
            </Stack>
          </FormControl>
        </VStack>

        <Button
          colorScheme="red"
          mx={6}
          onPress={() => navigation.navigate(routeNames.emergencyButton)}
        >
          <Text color="white">Cancel</Text>
        </Button>

        <HStack
          mx="8"
          shadow={1}
          bg="white"
          alignItems="center"
          space={4}
          px={2}
          py={1}
        >
          <Image
            source={{ uri: "https://i.imgur.com/T11PYkI.png" }}
            alt="user profile"
            size="xs"
          />
          <VStack flex={1}>
            <Text bold={true}>Your current location</Text>
            <Text fontSize="xs">
              No. 16, Jalan Profesor Diraja Ungku Aziz, Seksyen 13, Kuala Lumpur
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </PageLayout>
  );
};

export default EmergencyButtonPage;
