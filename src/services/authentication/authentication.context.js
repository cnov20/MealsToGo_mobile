import React, { useState, useEffect, createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import { loginRequest } from "./authentication.service";

const auth = getAuth();

export const AuthenticationContext = createContext();

 // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    
    setIsLoading(true);

    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(true);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };


  const onLogout = () => {
   
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(null);
      signOut(auth);
    }).catch((error) => {
      // An error happened.
    });
  }
 

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};