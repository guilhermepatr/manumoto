import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="selectMarca"
        options={{ title: "Selecionar Marca", headerShown: false }}
      />
      <Stack.Screen
        name="index"
        options={{ title: "Adicionar Moto", headerShown: false }}
      />
      <Stack.Screen
        name="selectModelo"
        options={{ title: "Selecione o Modelo", headerShown: false }}
      />
    </Stack>
  );
}
