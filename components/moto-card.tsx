import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

interface MotoProps {
  marca: string;
  modelo: [];
  onPress: () => void;
}

export default function MotoCard({ marca, modelo, onPress }: MotoProps) {
  //const { marca } = useLocalSearchParams<{ marca: string }>();
  //const { modelo } = useLocalSearchParams<{ modelo: [] }>();

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>
        Selecione o modelo da sua moto {marca} e modelo {modelo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196f3",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
