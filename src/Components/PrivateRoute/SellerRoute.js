import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../../AuthContext/AuthContext";
import useSeller from "../../Hooks/useSeller";
import Loader from "../Loader/Loader";

const SellerRoute = ({ children }) => {
  const { user, loader } = useContext(AuthProvider);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loader || isSellerLoading) {
    return <Loader />;
  }
  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
