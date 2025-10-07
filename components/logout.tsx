import { View, Text, Button } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";

export default function Logout() {
  const { showActionSheetWithOptions } = useActionSheet();
  const options = ["Cancel", "Logout"];
  const destructiveButtonIndex = 1;
  const cancelButtonIndex = 0;

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
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
