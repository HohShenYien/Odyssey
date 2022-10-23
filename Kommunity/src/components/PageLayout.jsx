import { Box, Center, ScrollView } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";

const PageLayout = ({ isCenter, children }) => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView
        nestedScrollEnabled
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
      >
        {isCenter ? (
          <Center h="100%" w="100%">
            {children}
          </Center>
        ) : (
          <Box h="100%" w="100%">
            {children}
          </Box>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PageLayout;
