// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7r66Kl2e2R495u6zvExq5zkWwQzDqlP8",
  authDomain: "realtor-clone-react-83a73.firebaseapp.com",
  projectId: "realtor-clone-react-83a73",
  storageBucket: "realtor-clone-react-83a73.appspot.com",
  messagingSenderId: "577860383375",
  appId: "1:577860383375:web:7945e96643cf1eeae876fa",
  measurementId: "G-Q2GF8LHRL6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()


