import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  confirmPasswordReset,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const UpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const RegisterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const ResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
  };

  const NewPassword = (oobCode, newpassword) => {
    return confirmPasswordReset(auth, oobCode, newpassword);
  };

  const SignOut = () => {
    return signOut(auth);
  };

  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const GithubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    RegisterUser,
    UpdateProfile,
    SignIn,
    ResetPassword,
    NewPassword,
    SignOut,
    GoogleSignIn,
    GithubSignIn,
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
