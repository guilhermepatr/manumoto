import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function CustomButton({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
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
