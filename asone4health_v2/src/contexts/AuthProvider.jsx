import React, { createContext, useState, useContext, useEffect } from "react";
import {BASE_URL} from "../Config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem("site") || "");

  //TODO: switch from relying on session storage to information from the context i.e. make the user information available in the context

  useEffect(() => {
    if (token) {
      // Validate token or fetch user data
      // This is a placeholder and should be replaced with actual API call
      setUser({
        id: sessionStorage.getItem("id"),
        email: sessionStorage.getItem("mail"),
        nom: sessionStorage.getItem("nom"),
        prenom: sessionStorage.getItem("prenom"),
        specialties: JSON.parse(sessionStorage.getItem("specialites")),
      });
    }
  }, [token]);

  const checkEmailExistence = async (email) => {
    try {
      const emailCheckResponse = await fetch(
       `${BASE_URL}/check-email`,
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
      return emailCheckResult.detail === "Email already exists";
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

      const response = await fetch(`${BASE_URL}/doctor/login`, {
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

    const updateUserInfo = (doctorInfo) => {
    setUser(prevUser => ({
      ...prevUser,
      ...doctorInfo
    }));

    // Update session storage
    Object.entries(doctorInfo).forEach(([key, value]) => {
      sessionStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    });
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
