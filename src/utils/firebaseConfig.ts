import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-pT67WqhlVaXUgeYWqnDr4AgBV6_lC8Y",
  authDomain: "pokedex-pranav.firebaseapp.com",
  projectId: "pokedex-pranav",
  storageBucket: "pokedex-pranav.firebasestorage.app",
  messagingSenderId: "145363872912",
  appId: "1:145363872912:web:6cd4c1f7bae95255bb7c15",
  measurementId: "G-8G8BZ1KDJW",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
