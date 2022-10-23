import {
  VStack,
  Text,
  Image,
  HStack,
  Center,
  Box,
  ChevronRightIcon,
} from "native-base";
import React from "react";

const Feature = ({ name, img, description }) => {
  return (
    <HStack
      backgroundColor="amber.100"
      px={4}
      py={2}
      shadow="1"
      rounded="sm"
      space="2"
    >
      <Image
        source={{
          uri: img,
        }}
        alt={name}
        size="xs"
      ></Image>
      <VStack flex={1}>
        <Text bold={true} fontSize="md">
          {name}
        </Text>
        <Text fontSize="xs">{description}</Text>
      </VStack>
      <Center>
        <Box backgroundColor="amber.400" p="1" rounded="xs">
          <ChevronRightIcon color="white" size="md" />
        </Box>
      </Center>
    </HStack>
  );
};

export default Feature;
