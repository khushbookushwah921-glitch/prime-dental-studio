import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyBvKWc2bnOTkX5kd1bcE6jJQSPEOvrvuBw",
  authDomain: "prime-dental-studio-79621.firebaseapp.com",
  projectId: "prime-dental-studio-79621",
  storageBucket: "prime-dental-studio-79621.firebasestorage.app",
  messagingSenderId: "644208430297",
  appId: "1:644208430297:web:2027c4fe0379eb97ffc2c8",
  measurementId: "G-XFLBY6MHJ5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);