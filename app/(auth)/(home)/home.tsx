import CustomButton from "@/components/custom-button";
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useNavigationExitOnBack from "../../../hooks/useNavigationExitOnBack";
export default function _screen() {
  useNavigationExitOnBack();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <CustomButton
        title="Adicionar Moto"
        onPress={() => router.push("/(auth)/(home)/addMoto/addMoto")}
      />
      <CustomButton
        title="Adicionar Manutenção"
        onPress={() => router.push("/(auth)/(home)/addManutencao")}
      />
      <CustomButton
        title="Adicionar Abastecimento"
        onPress={() => router.push("/(auth)/(home)/addAbastecimento")}
      />
      <CustomButton
        title="Relatório"
        onPress={() => router.push("/(auth)/(home)/relatorio")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 16,
    marginTop: Constants.statusBarHeight,
  },
});
