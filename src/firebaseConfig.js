// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzFKdmCwYOSqbtAPXf_E8WwEmY1737rHY",
  authDomain: "tiendaflor-35ca7.firebaseapp.com",
  projectId: "tiendaflor-35ca7",
  storageBucket: "tiendaflor-35ca7.appspot.com",
  messagingSenderId: "685560178792",
  appId: "1:685560178792:web:f4b2a9cabe7061e14973dd",
  measurementId: "G-LQ0MK9Z5GX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

export { db };
