import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Homes";
import CreateServices from "../pages/CreateServices";
import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";
import AlLServices from "../pages/AllServices";

function Router (){

    return (
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="/" 
                element= {<Home/>}/>
                <Route exact path="/new-services" element={<CreateServices/>} />
                <Route exact path="/services" element={<AlLServices/>} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;