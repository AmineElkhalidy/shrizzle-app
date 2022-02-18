import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  const values = {
    token,
    setToken,
    userId,
    setUserId,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
