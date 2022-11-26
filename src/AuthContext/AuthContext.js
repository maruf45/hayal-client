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
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const UpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const RegisterUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    setLoader(true);
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
    setLoader(true);
    return signOut(auth);
  };

  const GoogleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const GithubSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loader,
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
