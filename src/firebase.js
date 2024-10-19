// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA0y4jQMgVgRAaBbYobdpsUVzKNZ2lJCPw",
    authDomain: "online-learning-87a3e.firebaseapp.com",
    projectId: "online-learning-87a3e",
    storageBucket: "online-learning-87a3e.appspot.com",
    messagingSenderId: "86306984935",
    appId: "1:86306984935:web:5c6afd59eb61484aa92342"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app) 
export const db = getFirestore(app)
export const auth = getAuth(app);