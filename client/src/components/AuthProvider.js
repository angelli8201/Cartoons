import React, { createContext, useContext, useState } from "react";
import { addUser } from "../services/userService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  const signIn = (userData) => {
    setUser(userData);
    setSignedIn(true);
  };

  const signUp = async (userData) => {
    const response = await addUser(userData);

    if (response !== null) {
      setErrors(response.error);
    } else {
      setUser(userData);

      return null;
    }
  };

  const signOut = () => {
    setUser(null);
    setSignedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, signedIn, signIn, signOut, signUp, errors, setErrors }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
