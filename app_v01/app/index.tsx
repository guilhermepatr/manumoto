import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Label } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import Loading from "../components/Loading";
import useAuth from "../firebase/hooks/useAuth";

import { Pressable, StyleSheet, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const { user, login, loading } = useAuth();

  const [email, setEmail] = useState("fulano@exemplo.com");
  const [password, setPassword] = useState("123456");

  useEffect(() => {
    if (user) {
      router.replace("/(pages)/(home)/home");
    }
  }, [user]);

  if (loading) return <Loading />;

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <LinearGradient
      colors={["rgba(2,0,36,1)", "rgba(9,9,121,1)", "rgba(0,212,255,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.containerView}>
        <FontAwesome
          style={styles.icon}
          size={30}
          name="motorcycle"
          color={"#f3f3f5"}
        />

        <Text style={styles.title}>Gestão de Motos</Text>
        <Text style={styles.subTitle}>
          Entre com suas credenciais para acessar
        </Text>
        <Label style={[styles.label]}>E-mail</Label>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Label style={[styles.label]}>Senha</Label>
        <TextInput
          style={[styles.input]}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            try {
              await login(email, password);
              router.push("/(pages)/(home)/home");
            } catch (error: any) {
              Alert.alert("Login error", error.toString());
            }
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Link href="/(auth)/register" asChild>
          <Pressable>
            <Text style={styles.buttonRegister}>
              Não tem conta? Registre-se
            </Text>
          </Pressable>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    width: 500,
    backgroundColor: "#FFFFFF",
  },
  icon: {
    marginBottom: 18,
    backgroundColor: "rgba(9,9,121,1)",
    padding: 30,
    borderRadius: "100%",
  },
  title: {
    fontSize: 20,
    color: "black",
    marginBottom: 18,
  },
  subTitle: {
    fontSize: 16,
    color: "#8b8b8bff",
    marginBottom: 22,
  },
  label: {
    fontSize: 14,
    color: "bralack",
    marginBottom: 4,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    backgroundColor: "#f3f3f5",
    borderColor: "#f3f3f5",
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    color: "black",
    marginBottom: 14,
  },
  button: {
    backgroundColor: "black",
    width: "100%",
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  buttonRegister: {
    marginTop: 20,
    color: "#1565fd",
    fontSize: 16,
    fontWeight: "bold",
  },
});
