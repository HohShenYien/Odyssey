import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Button,
  Icon,
  Spacer,
  Select,
  CheckIcon,
} from "native-base";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Entypo } from "@expo/vector-icons";
import routeNames from "../../../constants/routeNames";

const AdminProfileOverview = ({ navigation }) => {
  const [status1, setStatus1] = useState("Decoy");
  const [status, setStatus] = useState("Available");
  const myRef = React.useRef(null);
  React.useEffect(() => {
    if (myRef.current && myRef.current.setNativeProps) {
      const styleObj = {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: "#4b5563",
      };
      myRef.current.setNativeProps({
        style: styleObj,
      });
    }
  }, [myRef]);

  const data = [
    {
      key: "Name",
      content: "William Hoh Shen Yien",
    },
    {
      key: "IC Number",
      content: "010212-14-1265",
    },
    {
      key: "Email",
      content: "hohshenyien@gmail.com",
    },
    {
      key: "Contact",
      content: "+60122356798",
    },
    {
      key: "Gender",
      content: "Male",
    },
  ];

  return (
    <PageLayout>
      <Box bgColor="darkBlue.700" h={56} w="100%">
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            position="absolute"
            mt="-40"
            source={{ uri: "https://i.imgur.com/hysf0EW.png" }}
            alt="background"
          />
        </AspectRatio>
        <VStack
          position="absolute"
          left={0}
          top={0}
          height="100%"
          pb="24"
          px="4"
          pt="4"
        >
          <HStack flex="1" justifyContent="space-evenly" width="100%">
            <Image
              ref={myRef}
              source={{ uri: "https://i.imgur.com/T11PYkI.png" }}
              alt="user profile"
              size="md"
            />
          </HStack>
          <HStack width="100%" space="0">
            <Text textAlign="right" fontSize="lg" width="50%" bold={true}>
              Status:
            </Text>
            <Text
              textAlign="left"
              color={
                status === "Available"
                  ? "green.600"
                  : status === "Busy"
                  ? "pink.600"
                  : status === "Do Not Disturb"
                  ? "red.600"
                  : status === "Away"
                  ? "orange.500"
                  : "trueGray.400"
              }
              fontSize="lg"
              width="50%"
              bold={true}
            >
              &nbsp;{status}
            </Text>
          </HStack>
        </VStack>
      </Box>
      <VStack
        bgColor="muted.100"
        mt={-20}
        minH="100%"
        borderTopRadius={12}
        py={2}
        space={4}
        px={5}
      >
        <VStack space={6} width="100%">
          <Spacer />
          {data.map((data, index) => (
            <HStack key={index} width="100%">
              <Text textAlign="left" fontSize="md" bold width="40%">
                {data.key}
              </Text>
              <Text textAlign="right" fontSize="md" width="60%">
                {data.content}
              </Text>
            </HStack>
          ))}
        </VStack>

        <HStack width="100%" mt={8}>
          <Button
            colorScheme="indigo"
            width="40%"
            mx="5%"
            onPress={() => navigation.navigate(routeNames.adminProfileEdit)}
          >
            <Text color="white">Edit Profile</Text>
          </Button>
          <Box
            width="40%"
            mx="5%"
            borderColor="orange.500"
            borderWidth={1}
            borderRadius={5}
          >
            <Select
              height={10}
              fontSize="sm"
              textAlign="center"
              placeholderTextColor="white"
              bgColor="orange.500"
              borderWidth={0}
              selectedValue={status1}
              defaultValue={status1}
              accessibilityLabel="Edit Status"
              placeholder="Edit Status"
              _selectedItem={{
                bg: "teal.300",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setStatus(itemValue)}
              dropdownIcon={<Icon as={Entypo} name="dot-single" size="0" />}
            >
              <Select.Item label="Available" value="Available" />
              <Select.Item label="Busy" value="Busy" />
              <Select.Item label="Do Not Disturb" value="Do Not Disturb" />
              <Select.Item label="Away" value="Away" />
              <Select.Item label="Unavailable" value="Unavailable" />
            </Select>
          </Box>
        </HStack>
      </VStack>
    </PageLayout>
  );
};

export default AdminProfileOverview;
