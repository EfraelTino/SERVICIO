import axios from "axios";

// const API = "https://backend-cozecha-1-1yme.onrender.com/api"
const API = "http://localhost:4000/api"
// Configuración global de axios para incluir CORS con credenciales
axios.defaults.withCredentials = true;

export const loginUser = async (email, password) =>{
   try {
    let URL = `${API}/usuario/login`;
    return await axios.post(URL, { email, password });
   } catch (error) {
    throw error;
   }
}
export const createUser = async (userData) =>{
   try {
      let URL =`${API}/usuario/crear-user`;
      return await axios.post (URL, userData);
   } catch (error) {
      throw error;
   }
}