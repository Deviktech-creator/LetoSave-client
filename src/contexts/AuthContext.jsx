import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(''); 
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const getToken = sessionStorage.getItem("LetoSave-auth-token");
  // console.log(currentUser);

  const checkTokenValidity = async (token) => {
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
      // console.log(response);
    } catch (error) {
      console.error(error)
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    if (getToken) {
      setToken(getToken);
      setIsLoggedIn(true); 
      checkTokenValidity(getToken);
    } else {
      setIsLoggedIn(false);
    }
  }, [getToken]);
  

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

  function formatDateToDmy(timestamp) {
    const date = new Date(timestamp);
  
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    const formattedDate = `${day}-${months[monthIndex]}-${year}`;
    
    return formattedDate;
  }


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
        logout,
        formatDateToDmy

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
