// Archivo para autenticación y autorización, controlando el login, logout, 
// y permisos de acceso según roles (cliente o administrador).

// src/context/AuthProvider.jsx
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar autenticación, si el usuario ha iniciado sesión.
  const [token, setToken] = useState(null); // Estado para almacenar el token de autenticación 
  const [rol, setRol] = useState(null);// Almacena el rol del usuario ("admin" o "client")
  const navigate = useNavigate();


  useEffect(() => {
    // Al cargar, se puede verificar si el usuario está autenticado (por ejemplo, chequeando un token en localStorage)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
      setIsAuthenticated(true);
     setRol(storedUser.rol);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("/login", { email, password }); 
      const { user, token } = response.data;

      setUser(user); 
      setToken(token); 
      setIsAuthenticated(true); 
      setRol(user.rol);

    localStorage.setItem("user", JSON.stringify(user)); 
    localStorage.setItem("token",token);
    return true;
    } catch (error) {
      console.error("Error al iniciar sesión:", error); 
      alert("Credenciales incorrectas, intente de nuevo"); 
      return false;
    }
  };
  

  const logout = () => { 
    setUser(null); 
    setToken(null); 
    setIsAuthenticated(false); 
    setRol(null); 
    localStorage.removeItem("user"); 
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  const register = async (newUser) => {
try{
  const response = await axios.post("/registro", newUser); 
  const { user, token } = response.data; 
  setUser(user); 
  setToken(token); 
  setIsAuthenticated(true); 
  setRol(user.rol); 
  
  localStorage.setItem("user", JSON.stringify(user)); 
  localStorage.setItem("token", token); 

  return true;
} catch (error) {
  console.error("Error al registrar usuario: ", error);
  return false;
}
};

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        token,
        rol, // Exponemos el rol para usarlo en otros componentes
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

