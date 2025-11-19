import { initializeApp } from "firebase/app";
import { FirebaseOptions } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Sua configuração do Firebase (do seu arquivo firebaseConfig.js)
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCnviJZiQ6HP_H9qZ539B6Ps0QomP5lKI4",
  authDomain: "manu-moto-mobile.firebaseapp.com",
  projectId: "manu-moto-mobile",
  storageBucket: "manu-moto-mobile.firebasestorage.app",
  messagingSenderId: "768149131919",
  appId: "1:768149131919:web:7b09415f68c122b48d16fa",
};

// 1. Inicializa o App Firebase
const app = initializeApp(firebaseConfig);

// 2. Inicializa o Auth com persistência nativa
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// 3. Inicializa o Firestore
const db = getFirestore(app);

// 4. Exporta as instâncias para usar em qualquer lugar
export { app, auth, db };
