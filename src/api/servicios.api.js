import axios from "axios"

// Uso AXIOS para poder comunicarme de manera más sencilla al backend

export const getServicios = async () =>{
    let URL = 'http://localhost:4000/servicio/'
   return await axios.get(URL);
}

export  const crearServicio = async (servicio) =>{
    let URL ="http://localhost:4000/crear_servicio/";
   return await axios.post(URL,servicio);
}

