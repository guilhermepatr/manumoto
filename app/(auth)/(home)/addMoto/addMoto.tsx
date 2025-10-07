import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Constants from "expo-constants";
import CustomButton from "@/components/custom-button";
import useNavigationExitOnBack from "../../../../hooks/useNavigationExitOnBack";

export default function _screen() {
  useNavigationExitOnBack();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Nova Moto</Text>
      <Text style={styles.subtitle}>
        Vamos começar escolhendo a marca da sua moto 🚀
      </Text>

      <CustomButton
        title="Selecionar Marca"
        onPress={() => router.push("/(auth)/(home)/addMoto/selectMarca")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
});
