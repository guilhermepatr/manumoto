import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApps, initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import { useEffect } from "react";
import firebaseConfig from "../config/firebaseConfig";
import useFirebaseStore from "../store/useFirebaseStore";
import { Platform } from "react-native";
////
// 1. Importe o 'auth' e o 'db' do seu config
import { auth, db } from "@/firebase/config/config";
// 2. Importe a função de registro
import { createUserWithEmailAndPassword } from "firebase/auth";
// 3. Importe as funções do Firestore
import { doc, setDoc } from "firebase/firestore";

////

const getPersistence = () => {
  if (Platform.OS === "web")
    return (firebaseAuth as any).browserSessionPersistence;

  const getReactNativePersistence = (firebaseAuth as any)
    .getReactNativePersistence;

  return getReactNativePersistence(AsyncStorage);
};

const useFirebase = () => {
  const { setApp, setAuth, app, auth } = useFirebaseStore();

  useEffect(() => {
    if (!app && getApps().length === 0) {
      const app = initializeApp(firebaseConfig);
      setApp(app);

      const auth = firebaseAuth.initializeAuth(app, {
        persistence: getPersistence(),
      });
      setAuth(auth);
    }
  }, []);

  return {
    app,
    auth,
  };
};

export default useFirebase;
