import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    justifyContent: "center",
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
  card: {
    flex: 1,
    backgroundColor: "#2196f3",
    paddingVertical: 20,
    marginBottom: 16,
    marginHorizontal: 6,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
});
