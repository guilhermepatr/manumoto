import { useActionSheet } from "@expo/react-native-action-sheet";
import { useRouter } from "expo-router";
import React from "react";
import { Button } from "react-native";

export default function Logout() {
  const { showActionSheetWithOptions } = useActionSheet();
  const options = ["Cancel", "Logout"];
  const destructiveButtonIndex = 1;
  const cancelButtonIndex = 0;
  const router = useRouter();

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          router.push("/(auth)/(home)/home");
        }
        console.log("Selected: ", buttonIndex);
      }
    );
  };
  return (
    <>
      <Button title="Open ActionSheet" onPress={handleOpen} />
    </>
  );
}
