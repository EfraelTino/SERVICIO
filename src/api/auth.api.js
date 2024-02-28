import axios from "axios";

const API = "http://localhost:4000/api"

export const loginUser = async (email, password) =>{
   try {
    let URL = `${API}/usuario/login`;
    return await axios.post(URL, { email, password });
   } catch (error) {
    throw error;
   }
}