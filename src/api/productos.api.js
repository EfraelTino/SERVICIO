import axios from "axios"

// Uso AXIOS para poder comunicarme de manera más sencilla al backend
const API = "http://localhost:4000/api"
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