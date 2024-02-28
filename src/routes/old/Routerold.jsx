import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserAuth } from "../../api/auth.api";
import CreateServices from "../../pages/CreateServices";
import NotFound from "../../pages/NotFound";
import NavBar from "../../components/NavBar";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Signup/SingUp";
import Home from "../../pages/Homes";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Productos from "../../pages/Productos/Productos";

function Router() {    

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        cargarUsuario();
    }, [])
    async function cargarUsuario() {
        try {
            const response = await getUserAuth();
            const data = response.data;
            console.log(data);
            setUser(data);
        } catch (error) {
            setUser(null)
        } finally{
            setLoading(false)
        }
    }
    if(loading){
        return <p>Cargando...</p>
    }


    return (
        <BrowserRouter>
            <NavBar user={user}/>
            <Routes>
                <Route path="/"
                    element={<Home />} />
                <Route exact path="/new-services" element={<CreateServices />} />
                <Route exact path="/productos" element={<Productos />}/>
 
                {/* HABILITEMOS EL HOME DEL USUARIO */}
                <Route exact path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login"/>}/>
                <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login />} />
                <Route exact path="/signup" element={user ? <Navigate to="/"/> : <SignUp />}  />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;