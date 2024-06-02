// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-17540.firebaseapp.com",
  projectId: "mern-estate-17540",
  storageBucket: "mern-estate-17540.appspot.com",
  messagingSenderId: "100169660841",
  appId: "1:100169660841:web:80121b4a24f6be82912cb8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);