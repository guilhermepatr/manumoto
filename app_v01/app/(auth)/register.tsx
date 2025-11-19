import useAuth from "@/firebase/hooks/useAuth";
import useCollection from "@/firebase/hooks/useCollection";
import useFirebase from "@/firebase/hooks/useFirebase";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Label } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React, { use, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Loading from "../../components/Loading";

import { getFirestore, doc, setDoc } from "firebase/firestore";

export default function _screen() {
  // Instancie os hooks
  const { registerUser } = useAuth();
  const { auth } = useFirebase();
  const db = getFirestore(); // Pegue a instância do Firestore

  //const { create } = useCollection("users", false);
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  // 3. Estado de loading para o botão
  const [isLoading, setIsLoading] = useState(false);
  // 4. Atualize a função de registro
  const handleRegister = async () => {
    if (!nome || !email || !password || !confirmarSenha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não conferem!");
      return;
    }

    // Inicia o loading

    setIsLoading(true);

    try {
      // 4. Capture o usuário retornado pela função
      const newUser = await registerUser(email, password);
      // 5. Crie o usuário no Firebase Auth
      //await registerUser(email, password);
      // 6. Pegue o UID do usuário recém-criado
      const newUid = newUser?.uid;

      if (!newUid) {
        throw new Error("Não foi possível obter o ID do novo usuário.");
      }

      // 6. Crie a referência do documento:
      // Queremos o documento dentro da coleção "users"
      // cujo ID seja exatamente o 'newUid'
      const userDocRef = doc(db, "users", newUid);

      // 7. Salve os dados extras (nome, email, uid) na coleção "users"
      await setDoc(userDocRef, {
        uid: newUid,
        nome: nome,
        email: email.toLowerCase(),
      });

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      router.push("/"); // Redireciona para o login (ou home)
    } catch (error: any) {
      // 8. Tratamento de erros do Firebase

      console.error(error);
      let errorMessage = "Ocorreu um erro ao tentar registrar.";

      if (error.code) {
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "Este e-mail já está em uso.";
            break;

          case "auth/weak-password":
            errorMessage = "A senha é muito fraca. (Mínimo 6 caracteres)";
            break;

          case "auth/invalid-email":
            errorMessage = "O formato do e-mail é inválido.";
            break;

          default:
            errorMessage = error.message;
        }
      }

      Alert.alert("Erro", errorMessage);
    } finally {
      // Para o loading, independente de sucesso ou erro
      setIsLoading(false);
    }
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

        <Text style={styles.title}>Criar conta</Text>

        <Text style={styles.subTitle}>
          Preencha os dados para criar sua conta
        </Text>

        <Label style={[styles.label]}>Nome</Label>

        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#ccc"
          autoCapitalize="words"
          value={nome}
          onChangeText={setNome}
        />

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

        <Label style={[styles.label]}>Confirmação de Senha</Label>

        <TextInput
          style={[styles.input]}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleRegister}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Registrando..." : "Registrar"}
          </Text>
        </TouchableOpacity>

        <Link href="/" asChild>
          {/* Corrigi o link para apontar para "/" (login) */}

          <Pressable disabled={isLoading}>
            <Text style={styles.buttonRegister}>Já tem conta? Faça login</Text>
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

  buttonDisabled: {
    backgroundColor: "#888",
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
