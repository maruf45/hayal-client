import React, { createContext } from "react";

export const authProvider = createContext();

const AuthContext = ({ children }) => {
  const authInfo = { name: "aruf" };
  return (
    <authProvider.context value={authInfo}>{children}</authProvider.context>
  );
};

export default AuthContext;
