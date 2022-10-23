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
  Image,
} from "native-base";
import React from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getImage } from "../../../components/GetImage";

const AdminProfileEdit = ({ navigation }) => {
  const [service, setService] = React.useState("Male");
  const toast = useToast();
  const [imageUri, setImageUri] = React.useState(
    "https://i.imgur.com/T11PYkI.png"
  );
  const bgColor = "trueGray.200";
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

  const onSubmit = () => {
    navigation.navigate(routeNames.adminProfileOverview);
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="4" py="2" rounded="sm">
            <Text color="white">Profile Changed</Text>
          </Box>
        );
      },
    });
  };

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
  ];

  return (
    <PageLayout>
      <VStack py={4} space={5} px={4}>
        <Row justifyContent={"flex-start"} alignItems="center" space={4} mb={3}>
          <Button
            variant="ghost"
            rounded="full"
            colorScheme="coolGray"
            onPress={() => navigation.navigate(routeNames.adminProfileOverview)}
          >
            <Icon as={MaterialCommunityIcons} name="arrow-left" size="lg" />
          </Button>
          <Text bold fontSize="xl">
            Edit Profile
          </Text>
        </Row>

        <VStack mt={3} alignItems="center">
          <Image
            source={{ uri: imageUri }}
            alt="announcement image"
            size="lg"
            ref={myRef}
          />

          <Button
            colorScheme="indigo"
            alignSelf="center"
            variant="unstyled"
            w="50%"
            leftIcon={
              <Icon
                as={MaterialCommunityIcons}
                name="file-image-plus-outline"
                size="sm"
              />
            }
            onPress={() => getImage(setImageUri)}
          >
            <Text color="black">Select Image</Text>
          </Button>
        </VStack>

        {data.map((data, index) => (
          <VStack key={index} space={1}>
            <Text ml={1} bold fontSize="15">
              {data.key}
            </Text>

            <Input
              placeholder="Enter Information"
              bgColor={bgColor}
              keyboardType={
                data.key === "Contact" || data.key === "IC Number"
                  ? "number-pad"
                  : "default"
              }
            >
              <Text>{data.content}</Text>
            </Input>
          </VStack>
        ))}

        <VStack space={1}>
          <Text ml={1} bold fontSize="15">
            Gender
          </Text>

          <Select
            bgColor={bgColor}
            selectedValue={service}
            defaultValue={service}
            width="35%"
            accessibilityLabel="Select Gender"
            placeholder="Select Gender"
            _selectedItem={{
              bg: "teal.300",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Male" value="Male" />
            <Select.Item label="Female" value="Female" />
          </Select>
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

export default AdminProfileEdit;
