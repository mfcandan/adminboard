import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "adminboardy.firebaseapp.com",
  projectId: "adminboardy",
  storageBucket: "adminboardy.appspot.com",
  messagingSenderId: "774493310159",
  appId: "1:774493310159:web:cd3dd81b2de7f10725bbba",
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
