import { View, StyleSheet, Text, Button } from "react-native";
import React from "react";
import Constants from "expo-constants";
import useNavigationExitOnBack from "../../../hooks/useNavigationExitOnBack";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import CustomButton from "@/components/custom-button";
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
