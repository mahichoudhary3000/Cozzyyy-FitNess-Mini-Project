import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }
    api.me().then(data => setUser(data.user)).catch(() => localStorage.removeItem("token")).finally(() => setLoading(false));
  }, []);

  const login = async (data) => {
    const result = await api.login(data);
    localStorage.setItem("token", result.token);
    setUser(result.user);
    return result.user;
  };

  const signup = async (data) => api.signup(data);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, loading, login, signup, logout, setUser }}>
    {children}
  </AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
