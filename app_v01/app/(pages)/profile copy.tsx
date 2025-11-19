import Logout from "@/components/logout";
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function _screen() {
  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <View style={styles.containerCard}>
          {/* Ícone à esquerda */}
          <MaterialIcons name="sports-motorsports" size={60} color="black" />

          {/* Texto à direita */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Guilherme Patricio Silva</Text>
            <Text style={styles.title}>Guilherme@email.com</Text>
            <Text style={styles.subtitle}>Membro desde XX/XX/XX</Text>
          </View>
        </View>

        {/* Box Informations */}
        <View>
          <View style={styles.containerCard}>
            {/* Ícone à esquerda */}
            <MaterialIcons name="sports-motorsports" size={26} color="black" />
            {/* Texto à direita */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>Informações</Text>
            </View>
          </View>
        </View>

        <Text>Profile</Text>
        <Logout />
        <StatusBar style="auto" />
      </View>
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(_screen);

export default ConnectedApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0ff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerCard: {
    flexDirection: "row", // ← Coloca ícone e texto lado a lado
    alignItems: "center", // ← Alinha verticalmente
    gap: 20, // ← Espaço entre o ícone e o texto
    backgroundColor: "#FFFFFF",
    borderColor: "#d8d8d8ff",
    borderWidth: 2,
    borderRadius: 10,

    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 50,
    width: 400,
    height: 100,
  },

  textContainer: {
    flexDirection: "column",
  },

  title: {
    fontSize: 18,
    margin: 4,
    //fontWeight: "bold",
  },

  subtitle: {
    color: "#444",
    padding: 4,
  },
});
