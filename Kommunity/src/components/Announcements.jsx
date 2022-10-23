import { VStack, Text, Image, ScrollView, HStack, Flex } from "native-base";
import React from "react";

const Announcements = () => {
  return (
    <VStack>
      <Text textAlign="center" fontSize="md" mb={2} bold={true}>
        Latest Announcements
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack py={1}>
          {[...Array(5)].map((_, index) => {
            return (
              <Flex
                direction="column"
                key={index}
                mr={4}
                p={2}
                backgroundColor="amber.100"
                align="center"
                shadow="1"
                rounded="sm"
              >
                <Image
                  source={{
                    uri: "https://i.imgur.com/ZBft9fYb.jpg",
                  }}
                  alt="Announcement Text"
                  size="xl"
                  mb="1"
                />
                <Text w="32" textAlign="center">
                  Management Price Raise
                </Text>
              </Flex>
            );
          })}
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default Announcements;
