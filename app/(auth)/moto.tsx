import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import MotoCard from "@/components/moto-card";

export default function _screen() {
  const { marca, nome, cilindrada, tipo } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Moto</Text>

      {marca && nome ? (
        <>
          <Text style={styles.info}>Marca: {marca}</Text>
          <Text style={styles.info}>Modelo: {nome}</Text>
          <Text style={styles.info}>Cilindrada: {cilindrada}</Text>
          <Text style={styles.info}>Tipo: {tipo}</Text>
        </>
      ) : (
        <Text style={styles.empty}>Nenhuma moto cadastrada ainda</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginVertical: 4,
    textAlign: "center",
  },
  empty: {
    textAlign: "center",
    color: "#888",
  },
});
