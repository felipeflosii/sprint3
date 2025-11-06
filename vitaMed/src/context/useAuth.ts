import { useState, useEffect } from "react";

export function useAuth() {
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

  function logout() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    setUsuario(null);
    window.location.href = "/"; // ou useNavigate() se preferir
  }

  return { usuario, logout };
}
