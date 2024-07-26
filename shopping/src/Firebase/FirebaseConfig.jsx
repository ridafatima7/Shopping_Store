import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAol4_u5h8dd9hKDQ1FRVThuTdca8zYYd0",
  authDomain: "e-store-9fca5.firebaseapp.com",
  projectId: "e-store-9fca5",
  storageBucket: "e-store-9fca5.appspot.com",
  messagingSenderId: "579384954921",
  appId: "1:579384954921:web:f82f3389638d6793180c38"
};
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;