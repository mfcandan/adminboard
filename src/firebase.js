import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "adminboardy.firebaseapp.com",
  projectId: "adminboardy",
  storageBucket: "adminboardy.appspot.com",
  messagingSenderId: "774493310159",
  appId: "1:774493310159:web:cd3dd81b2de7f10725bbba",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
