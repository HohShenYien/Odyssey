import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
  Row,
  Button,
  Icon,
  Spacer,
} from "native-base";
import React from "react";
import PageLayout from "../../../components/PageLayout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routeNames from "../../../constants/routeNames";
import { YesNoModal } from "../../../components/YesNoModal";

const AdminResidentProfile = ({ navigation }) => {
  const [warningModal, setWarningModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
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
      key: "Owner",
      content: "William Hoh Shen Yien",
    },
    {
      key: "Owner's IC Number",
      content: "010212-14-1265",
    },
    {
      key: "Owner's Contact",
      content: "+60122356798",
    },
    {
      key: "Owner's Email",
      content: "hohshenyien@gmail.com",
    },
    {
      key: "Owner's Gender",
      content: "Male",
    },
    {
      key: "Car Plate\nNumber(s)",
      content: "WKB 9020\nWA 2300 U\nWYD 2314",
    },
    {
      key: "Other Resident(s)",
      content: "Andrew Hoh Shen Yien\nHenry Hoh Shen Yien\nDavid Hoh Shen Yien",
    },
    {
      key: "Outstanding Bill\nAmount",
      content: "RM 200",
    },
  ];

  return (
    <>
      <PageLayout>
        <Box bgColor="darkBlue.700" h={56} w="100%">
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              position="absolute"
              mt="-20"
              source={{ uri: "https://i.imgur.com/VHawLap.jpg" }}
              alt="background"
            />
          </AspectRatio>

          <VStack
            position="absolute"
            left={0}
            top={0}
            height="100%"
            pb="16"
            px="4"
            pt="4"
          >
            <Box position="absolute" pl={3} pt={3}>
              <Button
                variant="ghost"
                rounded="full"
                colorScheme="coolGray"
                onPress={() =>
                  navigation.navigate(routeNames.adminResidentSearch)
                }
              >
                <Icon as={MaterialCommunityIcons} name="arrow-left" size="lg" />
              </Button>
            </Box>

            <HStack flex="1" justifyContent="space-evenly" width="100%">
              <Image
                source={{ uri: "https://i.imgur.com/PWEYJRh.png" }}
                alt="house"
                size="md"
              />
            </HStack>
            <Text
              alignSelf="center"
              textAlign="center"
              fontSize="lg"
              width="100%"
              maxWidth="100%"
              bold
              italic
            >
              No.18, Jalan Midah Barat 2, Taman Midah, 56000, Cheras, Kuala
              Lumpur
            </Text>
          </VStack>
        </Box>
        <VStack
          bgColor="muted.100"
          mt={-10}
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
                <Text
                  textAlign="right"
                  fontSize="md"
                  width="60%"
                  color={index === 7 ? "danger.600" : ""}
                  bold={index === 7 ? true : false}
                >
                  {data.content}
                </Text>
              </HStack>
            ))}
          </VStack>

          <HStack width="100%" mt={8}>
            <Button
              colorScheme="indigo"
              width="40%"
              mx="auto"
              onPress={() => navigation.navigate(routeNames.adminResidentEdit)}
            >
              <Text color="white">Edit</Text>
            </Button>
            <Button
              colorScheme="error"
              width="40%"
              mx="auto"
              onPress={() => setDeleteModal(true)}
            >
              <Text color="white">Delete</Text>
            </Button>
          </HStack>

          <Button
            colorScheme="warning"
            width="60%"
            mx="auto"
            alignSelf="center"
            onPress={() => setWarningModal(true)}
          >
            <Text color="white">Send Bill Warning</Text>
          </Button>
        </VStack>
      </PageLayout>
      <YesNoModal
        onClose={() => setWarningModal(false)}
        showModal={warningModal}
        question="Are you sure to send the bill warning?"
        toastMessage="Warning Sent"
      />
      <YesNoModal
        onClose={() => setDeleteModal(false)}
        showModal={deleteModal}
        question="Are you sure to delete this resident's profile?"
        toastMessage="Resident's Profile Deleted"
        onYesPressed={() => navigation.navigate(routeNames.adminResidentSearch)}
      />
    </>
  );
};

export default AdminResidentProfile;
