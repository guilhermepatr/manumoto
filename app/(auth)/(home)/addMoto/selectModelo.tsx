import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import motos from "../../../../data/motos.json";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function SelectModeloScreen() {
  const { marca } = useLocalSearchParams<{ marca: string }>();
  const router = useRouter();
  const [selectedModelo, setSelectedModelo] = useState<string | null>(null);

  // Filtra os modelos da marca selecionada
  const motoSelecionada = motos.find((m) => m.marca === marca);

  const handleSelectModelo = (modelo: any) => {
    setSelectedModelo(modelo.modelo);
    router.push({
      pathname: "/(auth)/moto",
      params: {
        marca: marca,
        nome: modelo.nome,
        cilindrada: modelo.cilindrada,
        tipo: modelo.tipo,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o modelo da sua moto {marca}</Text>

      <FlatList
        data={motoSelecionada?.modelos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card]}
            onPress={() => handleSelectModelo(item)}
          >
            <Text style={[styles.cardText]}>Modelo: {item.nome}</Text>
            <Text style={[styles.cardText]}>
              Cilindradas: {item.cilindrada}
            </Text>
            <Text style={[styles.cardText]}>Tipo: {item.tipo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
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
  selectedCard: {
    backgroundColor: "#3e8ef7",
  },
  cardText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
