import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Prevent going back to login page
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = function () {
        window.history.pushState(null, "", window.location.href);
      };
    }

    return () => {
      // Clean up the event listener when the component unmounts
      window.onpopstate = null;
    };
  }, [user]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (user) {
        // Optionally, you can show a warning message
        event.preventDefault();
        event.returnValue = "you are logged in, do you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [user]);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;