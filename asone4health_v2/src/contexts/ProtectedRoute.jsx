import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth }from "./AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" replace />;
};

const BaseRoute = () => {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" replace /> :  <Navigate to="/" replace />;
}

export default{ ProtectedRoute , BaseRoute };