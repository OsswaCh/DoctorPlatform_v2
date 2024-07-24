// import React, {useState} from 'react'

// export const AuthContext = React.createContext(null);

// const initialState = {
//     isLoggedIn: false,
//     isLoginPending: false,
//     leginError: null
// }

// export const AuthProvider = props => {

//     const [state, setState] = useState(initialState);

//     const setLoginPending =( isLoginPending) => {
//         setState({ isLoginPending});
//     }
//     const setLoginError = (loginError) => {
//         setState({ loginError});
//     }
//     const setLoginSuccess = (isLoggedIn) => {
//         setState({ isLoggedIn});
//     }

//     const login = (email, password) => {

//         setLoginPending(true);
//         setLoginError(null);
//         setLoginSuccess(false);

//         fetchLogin (email , password, error =>{

//             setLoginPending(false);

//             if(!error){
//                 setLoginSuccess(true);
//             }
//             else {
//                 setLoginError(error);
//             }

//         })
//     }

//     const logout = () => {
//         setLoginSuccess(false);
//         setLoginSuccess(false);
//         setLoginError(null);
//     }

//     return (
//         <AuthContext.Provider
//             value={{
//                 state,
//                 login,
//                 logout
//             }}>
//                 {props.children}
//             </AuthContext.Provider>
//     )}

//     //trial login
//     const fetchLogin = (email, password, callback) => {
//         setTimeout(() => {
//             if (email === 'email@email' || password === 'svsdvd') {
//                 console.log(email, password);
//                 callback(null);
//             } else {
//                 console.log(email);
//                 return callback(new Error('Invalid email and password'));
//             }},1000);

// // }

// import { useContext, createContext, useState } from "react";
// import { Navigate } from "react-router-dom";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("site") || "");
//   //const navigate = useNavigate();
//   const loginAction = async (data) => {
//     try {
//       const response = await fetch("https://api.asone4health.fr/patient/login",
//         {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const res = await response.json();
//       if (res.data) {
//         setUser(res.data.user);
//         setToken(res.token);
//         localStorage.setItem("site", res.token);
//         <Navigate to="/dashboard" />;
//         return;
//       }
//       throw new Error(res.message);
//     } catch (error) {
//       console.log(error);
//     }
//     console.log(data);
//   };

//   const logOut = () => {
//     setUser(null);
//     setToken("");
//     localStorage.removeItem("site");
//     <Navigate to="/" />;
//   };

//   return (
//     <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem("site") || "");

  useEffect(() => {
    if (token) {
      // Validate token or fetch user data
      // This is a placeholder and should be replaced with actual API call
      setUser({
        id: sessionStorage.getItem("id"),
        email: sessionStorage.getItem("mail"),
        nom: sessionStorage.getItem("nom"),
        prenom: sessionStorage.getItem("prenom"),
      });
    }
  }, [token]);

  const checkEmailExistence = async (email) => {
    try {
      const emailCheckResponse = await fetch(
        "https://api.asone4health.fr/check-email",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }
      );
      const emailCheckResult = await emailCheckResponse.json();
      console.log("Email check result:", emailCheckResult);
      return emailCheckResult.details === "Email exists";
    } catch (error) {
      console.error("Error checking email availability:", error);
      return false;
    }
  };

  const loginAction = async (data) => {
    try {
      const emailExists = await checkEmailExistence(data.email);
      if (!emailExists) {
        throw new Error("Email does not exist");
      }

      if (data.password.length === 0) {
        throw new Error("Veuillez saisir le mot de passe");
      }

      const response = await fetch("https://api.asone4health.fr/doctor/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.status === "ok") {
        // Store data in sessionStorage
        sessionStorage.setItem("access_token", responseData.access_token);
        sessionStorage.setItem("logged", "true");
        sessionStorage.setItem(
          "numero_tel",
          responseData.medecin.telecom[0].value
        );
        sessionStorage.setItem("nom", responseData.medecin.name[0].family);
        sessionStorage.setItem("prenom", responseData.medecin.name[0].given[0]);

        if ("activatedSpeciality" in responseData.medecin) {
          sessionStorage.setItem(
            "specialite",
            responseData.medecin.activatedSpeciality.code
          );
          sessionStorage.setItem(
            "specialite_display",
            responseData.medecin.activatedSpeciality.display
          );
        }
        sessionStorage.setItem("photo", responseData.medecin?.photo || "");
        sessionStorage.setItem(
          "specialites",
          JSON.stringify(responseData.medecin.speciality)
        );
        sessionStorage.setItem("mail", data.email);
        sessionStorage.setItem("id", responseData.medecin._id);

        setToken(responseData.access_token);
        setUser({
          id: responseData.medecin._id,
          email: data.email,
          nom: responseData.medecin.name[0].family,
          prenom: responseData.medecin.name[0].given[0],
        });

        return { success: true };
      } else if (responseData.status === "no") {
        throw new Error("Mot de Passe est incorrecte");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: error.message };
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    sessionStorage.removeItem("site");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
