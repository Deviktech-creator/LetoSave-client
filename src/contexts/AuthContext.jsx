import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState('')
  const [tokenValid, setTokenValid] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const getToken = sessionStorage.getItem("LetoSave-auth-token");
  // console.log(currentUser,tokenValid,token);
  
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
        setTokenValid(true);
      } catch (error) {
        sessionStorage.removeItem("LetoSave-auth-token");
      }
  };

  useEffect(() => {
    if(getToken){
      setToken(getToken);
    }
    if(token){
      checkTokenValidity();
    }else{
      // setIsLoggedIn(false);
    }

    if(currentUser && currentUser.password){
      // setIsLoggedIn(true);
    } // eslint-disable-next-line 
  }, [token]);

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
        tokenValid,
        setTokenValid,
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
