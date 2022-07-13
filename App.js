import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import react from "react";

import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";


// import * as firebase from "firebase";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

 // Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";

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

if (getApps().length < 1) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
}


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // if (!isAuthenticated) return null;
  
  return (
    <>
      <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
         <Navigation/>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}