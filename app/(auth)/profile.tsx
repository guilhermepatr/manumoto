import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import Logout from "@/components/logout";

function _screen() {
  return (
    <ActionSheetProvider>
      <View style={styles.container}>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
