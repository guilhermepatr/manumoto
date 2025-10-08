import { useActionSheet } from "@expo/react-native-action-sheet";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-native";

export default function Logout() {
  const { showActionSheetWithOptions } = useActionSheet();
  const options = ["Cancel", "Logout"];
  const destructiveButtonIndex = 1;
  const cancelButtonIndex = 0;
  const router = useRouter();

  // estado para indicar se deve exibir o alerta
  const [shouldAlert, setShouldAlert] = useState(false);

  // useEffect para reagir quando shouldAlert mudar
  useEffect(() => {
    if (shouldAlert) {
      Alert.alert("Logout", "Você saiu da conta com sucesso!");
      router.push("/(auth)/(home)/home");
      setShouldAlert(false); // reseta o estado
    }
  }, [shouldAlert]);

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          setShouldAlert(true); // ativa o alerta via estado
        }
      }
    );
  };

  return <Button title="Open ActionSheet" onPress={handleOpen} />;
}
