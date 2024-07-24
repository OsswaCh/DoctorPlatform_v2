// import React from 'react'
 //import { Navigate, useOutletContext } from 'react-router-dom'

 //TODO: ad base route that stops a signed in user from accessing login page 


// function ProtectedRoute({children}) {
//   const context = useOutletContext();

//   // Check if context exists and has an email property
//   console.log(context);
//   if (!context || !context.email) {
//     return <Navigate to="/" />
//   } 

//   return children
// }

// export default ProtectedRoute;

//second attempt 

// import {useState , useContext} from 'react';
// import {AuthContext} from './AuthContext';

// function ProtectedRoute({ children }) {

//   const { state } = useContext(AuthContext);
   
//   console.log("protected route state",state.isLoggedIn);

//   if (!state.isLoggedIn){
//     return <Navigate to="/" replace />;
//   }

//   return children;
// }
// export default ProtectedRoute;


//third attempt

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth }from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" replace />;
};
export default PrivateRoute;