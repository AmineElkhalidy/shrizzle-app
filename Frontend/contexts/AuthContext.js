import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const values = {
    token,
    setToken,
    userId,
    isLoggedIn,
    setIsLoggedIn,
    setUserId,
    userData,
    setUserData,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
