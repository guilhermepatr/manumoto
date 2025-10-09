import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function _screen() {
  const { marca, nome, cilindrada, tipo } = useLocalSearchParams();

  const [inputQuilometragem, setInputQuilometragem] = useState<string>("");
  const [quilometragem, setQuilometragem] = useState<number | null>(null);
  const [alerta, setAlerta] = useState(false);

  // useEffect observa o estado alerta
  useEffect(() => {
    if (alerta) {
      const timer = setTimeout(() => setAlerta(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [alerta]);

  const confirmarQuilometragem = () => {
    if (inputQuilometragem) {
      setQuilometragem(parseInt(inputQuilometragem));
      setInputQuilometragem("");
      setAlerta(true); // dispara o alerta
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Moto</Text>

      {marca && nome ? (
        <>
          <Text style={styles.info}>Marca: {marca}</Text>
          <Text style={styles.info}>Modelo: {nome}</Text>
          <Text style={styles.info}>Cilindrada: {cilindrada}</Text>
          <Text style={styles.info}>Tipo: {tipo}</Text>

          {quilometragem === null ? (
            <View style={{ marginTop: 20 }}>
              <TextInput
                style={styles.input}
                placeholder="Digite a quilometragem"
                value={inputQuilometragem}
                onChangeText={setInputQuilometragem}
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.botao}
                onPress={confirmarQuilometragem}
              >
                <Text style={styles.botaoTexto}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={[styles.info, { marginTop: 20 }]}>
              Quilometragem informada: {quilometragem} km
            </Text>
          )}

          {alerta && (
            <View style={styles.alerta}>
              <Text style={styles.alertaTexto}>Quilometragem salva!</Text>
            </View>
          )}
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
  input: {
    borderWidth: 1,
    borderColor: "#3e8ef7",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 200,
    alignSelf: "center",
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#3e8ef7",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  alerta: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: "#2196f3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  alertaTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
