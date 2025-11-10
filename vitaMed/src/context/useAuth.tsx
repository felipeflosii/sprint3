// src/context/useAuth.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";


interface AuthContextType {
  usuario: any;
  login: (userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("usuario");
    if (userData) {
      try {
        setUsuario(JSON.parse(userData));
      } catch {
        setUsuario(null);
      }
    }
  }, []);

  function login(userData: any) {
    localStorage.setItem("usuario", JSON.stringify(userData));
    setUsuario(userData);
  }

  function logout() {
    localStorage.removeItem("usuario");
    setUsuario(null);
    window.location.href = "/";
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
