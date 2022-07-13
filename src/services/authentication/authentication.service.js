// import * as firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

// Optionally import the services that you want to use
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl84P3BuIgmFHSsQUtF_0MmUnyi374skI",
  authDomain: "mealstogo-4a34a.firebaseapp.com",
  projectId: "mealstogo-4a34a",
  storageBucket: "mealstogo-4a34a.appspot.com",
  messagingSenderId: "1051003935063",
  appId: "1:1051003935063:web:0519c72d156b8c86058612"
};

// if (getApps().length < 1) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
// }

export const loginRequest = async (auth, email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
}