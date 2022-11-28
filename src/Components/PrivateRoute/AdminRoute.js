import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../../AuthContext/AuthContext";
import useAdmin from "../../Hooks/useAdmin";
import Loader from "../Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(AuthProvider);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loader || isAdminLoading) {
    return <Loader />;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
