import * as ImagePicker from "react-native-image-picker";

export function getImage(setImageUri) {
  const options = {
    mediaType: "photo",
  };

  ImagePicker.launchImageLibrary(options, (res) => {
    if (res.didCancel) {
      console.log("User cancelled image picker");
    } else if (res.error) {
      console.log("ImagePicker Error: ", res.error);
    } else {
      console.log("User successfully picked an image");
      setImageUri(res.assets[0].uri);
    }
  });

  return null;
}
