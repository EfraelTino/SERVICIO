
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import LogoBlack from '../assets/cozechablack.webp'
import LogoWhite from '../assets/cozechawhite.webp'
function NavBar() {
    // console.log("Usuario:", user.user && user.user.user && user.user.user.displayName);
    const [theme, setTeheme] = useState("light");
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])
    const handleTheme = () => {
        setTeheme(theme === "dark" ? "light" : "dark");

    }
    console.log(localStorage.getItem('tema'));
    
    const handleMenu = () => {
        setOpen(!open)
    }
    return (
        <header className="bg-white  py-4 dark:bg-bgdark shadow-md dark:shadow-light  outline-none focus:outline-none">
            <nav className="cl-normal flex flex-row justify-between items-center	">
                <div className="logo z-10 dark:text-white font-light text-sm ">
                    {
                        theme ==="light" ? <img src={LogoBlack} alt="Logo Cozecha" className="w-56" /> : <img src={LogoWhite} alt="Logo Cozecha" className="w-56"/> 
                    }
                </div>
                <Link to="#" className="sm:hidden dark:text-white text-bgdark  flex justify-between items-cente text-2xl">
                    <FaRegCircleUser  /> 
                </Link>

                <button className="text-green z-10   dark:text-white p-4 rounded-3xl sm:hidden text-2xl"
                    onClick={handleTheme}>
                    {
                        theme === "light" ? <FaMoon /> : <FaSun />
                    }
                </button>
                <button onClick={handleMenu} className={`sm:hidden z-10 text-black dark:text-white text-2xl hover:bg-midnight  ${open ? " right-5" : "relative"}`}>
                    {open ? <FaTimes /> : <FaBars />}
                </button>
                <div className={` ${open ? "flex fixed_header justify-center items-center bg-white dark:bg-bgdark" : "hidden  flex-row justify-between gap-4 items-center sm:block"}`}>
                    <div className="list-principal flex sm:flex-row flex-col justify-between gap-4 items-center		">
                        <Link to="/" className="text-gray dark:text-white text-base font-medium hover:text-green">Inicio</Link>
                        <Link to="/productos" className="text-gray dark:text-white text-base font-medium hover:text-green">Productos</Link>
                        {/* <Link className="text-gray dark:text-white text-base font-medium hover:text-green">Proveedores</Link> */}
                        <p className="text-black text-lg font-medium dark:text-green"></p>
                        <button className=" text-green dark:bg-green  dark:text-white p-4 bg-light rounded-3xl hidden sm:block text-base	"
                            onClick={handleTheme}>
                            {
                                theme === "light" ? <FaMoon /> : <FaSun />
                            }
                        </button>
                         <Link to="/login" className="dark:text-bgdark dark:bg-light text-base bg-green py-2 px-3 text-white rounded font-medium flex items-center gap-2"> <FaRegCircleUser className="" /> Login</Link>
                        
                        
                    </div>


                </div>

            </nav>

        </header>

    )
}

export default NavBar;