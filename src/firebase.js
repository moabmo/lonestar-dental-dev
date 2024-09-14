// Import the Firebase functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (use the values from your Firebase project)
const firebaseConfig = {
  apiKey: "AIzaSyA_EM-2PBUyKyiAvNI6Nbg7qoVCr4H-D_s",
  authDomain: "lonestar-test-539df.firebaseapp.com",
  projectId: "lonestar-test-539df",
  storageBucket: "lonestar-test-539df.appspot.com",
  messagingSenderId: "744912862811",
  appId: "1:744912862811:web:59b67a8b59ecdf3e37497e",
  measurementId: "G-1QYL7TCYBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
