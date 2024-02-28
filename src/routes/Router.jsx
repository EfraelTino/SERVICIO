import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";
import Home from "../pages/Homes";
import Productos from "../pages/Productos/Productos";
import CategoriaProducto from "../pages/Productos/Categorias/CategoriaProducto";
import Categorias from "../pages/Productos/Categorias/Categorias";
import Subcategorias from "../pages/Productos/Categorias/SubCategorias";
import SubCategoriaProducto from "../pages/Productos/Categorias/SubCategoriaProducto";
import ProductoIndividual from "../pages/Productos/ProductoIndividual";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

function Router() {
    const [loading, setLoading] = useState(true);
    
    // if(loading){
    //     return <p>Cargando...</p>
    // }


    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {/* HABILITEMOS EL HOME DEL USUARIO */}
                {/* <Route exact path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login"/>}/> */}
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" />
                <Route path="/*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route exact path="/productos" element={<Productos />} />
                <Route path="/productos/:catParam" element={<CategoriaProducto />} />
                <Route path="/productos/categorias" element={<Categorias />} />
                <Route path="/productos/:categorie/:subcategorie" element={<SubCategoriaProducto />} />
                <Route exact path="/productos/:categorie/:subcategorie/:name" element={<ProductoIndividual />} />

                <Route path="/productos/categorias/subcategorias" element={<Subcategorias />} />
                <Route exact path ="/dashboard" element={<Dashboard/>} />


            </Routes>
        </BrowserRouter>
    )
}
export default Router;