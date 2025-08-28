// frontend/src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL85WpEXT-Ieh-VcSK1ADh1OcO-cDXZsU",
  authDomain: "talktide-5aa3b.firebaseapp.com",
  projectId: "talktide-5aa3b",
  storageBucket: "talktide-5aa3b.appspot.com", // fixed typo
  messagingSenderId: "680858848483",
  appId: "1:680858848483:web:702a4c820d3a96f99149d6",
  measurementId: "G-1BC4JPJDT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app);      // Authentication
export const db = getFirestore(app);   // Firestore database

export default app;


