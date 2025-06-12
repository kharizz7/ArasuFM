import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCsRak-IeDSzYxf331svATGspl3ZSa1_iM",

  authDomain: "arasu-fm-latest.firebaseapp.com",

  projectId: "arasu-fm-latest",

  storageBucket: "arasu-fm-latest.firebasestorage.app",

  messagingSenderId: "580670106943",

  appId: "1:580670106943:web:9b52fd4410273511f3b78a",

  measurementId: "G-5TKVCTPXPV"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
