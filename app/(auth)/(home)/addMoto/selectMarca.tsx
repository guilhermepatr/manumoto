import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import motos from "../../../../data/motos.json";

export default function SelectMarcaScreen() {
  const router = useRouter();
  const [selectedMarca, setSelectedMarca] = useState<string | null>(null);

  const handleSelectMarca = (marca: string) => {
    setSelectedMarca(marca);
    router.push({
      pathname: "/(auth)/(home)/addMoto/selectModelo",
      params: { marca: marca },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione a marca da sua moto</Text>

      <FlatList
        data={motos}
        keyExtractor={(item) => item.marca}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              selectedMarca === item.marca && styles.selectedCard,
            ]}
            onPress={() => handleSelectMarca(item.marca)}
          >
            <Text
              style={[
                styles.cardText,
                selectedMarca === item.marca && styles.selectedText,
              ]}
            >
              {item.marca}
            </Text>
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
