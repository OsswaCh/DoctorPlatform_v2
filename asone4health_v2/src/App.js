import React, { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import Login, {loginAction} from "./pages/Login";
import Login from "./pages/Login";
import AccountCreation from "./pages/AccountCreation";
import TestPage from "./pages/testPage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./contexts/ProtectedRoute";
import AuthProvider from "./contexts/AuthProvider";

//TODO : done: *started the reactivity og the home page
//TODO: make each type of button its own component depending on the functionality
//TODO: change the paragraph font to ROBOTO
//TODO: put the icons in a seperate file and call them?
//TODO: fix the protected routes
//TODO: cache the session storage so it doesn't dissapear on reload

// Define the routes

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: "/dashboard",
    element: (
      <AuthProvider>
        <ProtectedRoute>

          <Dashboard />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "/creation-de-compte",
    element: (
      <AuthProvider>
        <AccountCreation />
      </AuthProvider>
    ),
  },
  {
    path: "/test",
    element: (
      <AuthProvider>
        <TestPage />
      </AuthProvider>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
