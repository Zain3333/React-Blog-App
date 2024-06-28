// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvi12I57Jryjn7LpySoccR0N9VuypmunI",
  authDomain: "dashboa-91de0.firebaseapp.com",
  projectId: "dashboa-91de0",
  storageBucket: "dashboa-91de0.appspot.com",
  messagingSenderId: "978122151609",
  appId: "1:978122151609:web:fb4238fbb5af1e35c6ed68",
  measurementId: "G-N6KRSLPD66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
