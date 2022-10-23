import { Text, VStack, Row, Button, Icon, Image } from "native-base";
import React, { useEffect, useState } from "react";
import PageLayout from "../../../components/PageLayout";
import routeNames from "../../../constants/routeNames";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { VisitorModal } from "../../../components/VisitorModal";
import { BarCodeScanner } from "expo-barcode-scanner";

const QrCodeScan = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanVal, setScanVal] = useState("default");

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setScanVal(data);
    navigation.navigate(routeNames.guardQrCodeScanned);
  };

  return (
    <>
      <PageLayout>
        <VStack py={4} space={5} px={2}>
          <Row justifyContent={"flex-start"} alignItems="center" space={4}>
            <Button
              variant="ghost"
              rounded="full"
              colorScheme="coolGray"
              onPress={() => navigation.navigate(routeNames.guardQrCodeMain)}
            >
              <Icon as={MaterialCommunityIcons} name="arrow-left" size="lg" />
            </Button>
            <Text bold fontSize={"xl"}>
              Scan QR Code
            </Text>
          </Row>

          <VStack alignItems="center" space={1}>
            {hasPermission ? (
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{
                  height: "90%",
                  width: "100%",
                }}
              />
            ) : (
              <Text bold>We need your permission</Text>
            )}
          </VStack>
        </VStack>
      </PageLayout>
    </>
  );
};

export default QrCodeScan;
