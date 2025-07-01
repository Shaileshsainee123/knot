"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [openLogin, setOpenLogin] = useState(false); 

  return (
    <AuthContext.Provider value={{ openLogin, setOpenLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useGlobalContext = () => useContext(AuthContext);

// ✅ Export once at the end
export { useGlobalContext, AuthProvider, AuthContext };
