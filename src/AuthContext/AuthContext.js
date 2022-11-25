import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext } from "react";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

const GoogleSignIn = () => {
    return signInWithPopup(googleProvider);
}

const 

  const authInfo = { name: "aruf" };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
