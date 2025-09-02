// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJcUdWVJQX8RFC8SCsSfC-TpvotPagUnU",
  authDomain: "proyecto-coder-react-6ebc2.firebaseapp.com",
  projectId: "proyecto-coder-react-6ebc2",
  storageBucket: "proyecto-coder-react-6ebc2.firebasestorage.app",
  messagingSenderId: "305096654882",
  appId: "1:305096654882:web:efb68c5e8de1be413e0a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)