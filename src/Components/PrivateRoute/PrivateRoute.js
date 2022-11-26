import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../../AuthContext/AuthContext";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthProvider);
  const location = useLocation();
  if (loader) {
    return <Loader />;
  }
  if (user && user?.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
