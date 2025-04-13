"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface AdminContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load from localStorage on first render
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used inside AdminProvider");
  return context;
};

export default AdminContext;