// src/contexts/AuthContext.jsx

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(''); // eslint-disable-next-line 
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getToken = sessionStorage.getItem("LetoSave-auth-token");

  console.log(currentUser)
  
  const checkTokenValidity = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/hospital-details`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCurrentUser(response.data.hospitalDetails);
      } catch (error) {
        sessionStorage.removeItem("LetoSave-auth-token");
        setIsLoggedIn(false)
      }
  };

  useEffect(() => {
    if (getToken) {
    setToken(getToken);
    setIsLoggedIn(true); 
  } else {
    setIsLoggedIn(false);
  }

  if (token) {
    checkTokenValidity();
  }// eslint-disable-next-line 
  }, [getToken, token]);

  const register = async (token) => {
    sessionStorage.setItem("LetoSave-auth-token", token);
    setToken(token);
  };

  const login = async (token) => {
    sessionStorage.setItem('LetoSave-auth-token', token);
    setToken(token);
  };
  
  const logout = () => {
    sessionStorage.removeItem('LetoSave-auth-token');
    setToken('');
    setCurrentUser(undefined);
    setIsLoggedIn(false);
  };



  return (
    <AuthContext.Provider
      value={{
        currentUser,
        token,
        checkTokenValidity,
        isLoggedIn,
        setIsLoggedIn,
        register,
        login,
        logout

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
