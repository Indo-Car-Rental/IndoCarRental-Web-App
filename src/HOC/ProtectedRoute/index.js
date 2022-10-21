import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ cmsIsLogin, children }) => {
  if (!cmsIsLogin) {
    return <Navigate to={"/admin/login"} replace />;
  }

  return children;
};

export default ProtectedRoute;
