import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "adminboardy.firebaseapp.com",
  projectId: "adminboardy",
  storageBucket: "adminboardy.appspot.com",
  messagingSenderId: "774493310159",
  appId: "1:774493310159:web:cd3dd81b2de7f10725bbba",
};

const app = initializeApp(firebaseConfig);
