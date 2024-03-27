import axios from "axios"

// Uso AXIOS para poder comunicarme de manera más sencilla al backend
// const API = "https://backend-cozecha-1-1yme.onrender.com/api";
const API = "http://localhost:4000/api"
// Configuración global de axios para incluir CORS con credenciales
axios.defaults.withCredentials = true;

export const getProductos = async () =>{
    let URL =`${API}/productos/`;
    return await axios.get(URL);
}
export const getCategoria = async () =>{
    let URL = `${API}/categorias/`;
    return await axios.get(URL)
}
export const  getSubcategorias = async() =>{
    let URL = `${API}/categorias/subcategoria/`
    return await axios.get(URL);
}

export const getProductoCategoria = async (categoria) =>{
    let URL =`${API}/producto/${categoria}`;
    return await axios.get(URL);
}


export const getProductoSubCategoria = async (cat, subcat) => {
    let URL = `${API}/producto/${cat}/${subcat}`
    return await axios.get(URL);
}

export const getProductoIndividual = async (cat, subcat, nombre) =>{
    let URL = `${API}/producto/${cat}/${subcat}/${nombre}`;
    return await axios.get(URL);
}

export const postCreateProduct = async (dataProducts)=>{
    try {
        let URL = `${API}/crear-producto`;
        return await axios.post(URL, dataProducts)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getProductoUsuario = async(idProveedor) =>{
    try {
        let URL =`${API}/productousuario`;
        return await axios.post(URL, {idProveedor})
    } catch (error) {
        throw error;
    }
}
