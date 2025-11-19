import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="addManutencao"
        options={{ title: "Adicionar Manutenção", headerShown: false }}
      />
      <Stack.Screen
        name="addMoto"
        options={{ title: "Adicionar Moto", headerShown: false }}
      />
      <Stack.Screen
        name="addAbastecimento"
        options={{ title: "Adicionar Abastecimento", headerShown: false }}
      />
      <Stack.Screen
        name="relatorio"
        options={{ title: "Extrair relatório", headerShown: false }}
      />
    </Stack>
  );
}
