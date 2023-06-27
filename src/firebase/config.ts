// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlP2h09xoW_dZQ5fe1stDWOmunAYpeqbc",
  authDomain: "journal-app-d0490.firebaseapp.com",
  projectId: "journal-app-d0490",
  storageBucket: "journal-app-d0490.appspot.com",
  messagingSenderId: "926971880646",
  appId: "1:926971880646:web:afb46c85e3304c836f23c7",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
