import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDlgiKBFvB4PYjK5Mq4jytFMe0E-vKzCAk",
  authDomain: "hayal-dff96.firebaseapp.com",
  projectId: "hayal-dff96",
  storageBucket: "hayal-dff96.appspot.com",
  messagingSenderId: "912239265143",
  appId: "1:912239265143:web:a3242e1a52b7d234cc0d72"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);