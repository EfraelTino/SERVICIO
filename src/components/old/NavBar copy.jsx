
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function NavBar(user) {
    // console.log("Usuario:", user.user && user.user.user && user.user.user.displayName);
    const [theme, setTeheme] = useState("light");
    const [open, setOpen] = useState(false);
    const userName = user.user && user.user.user && user.user.user.displayName;
    if (!user) return userName;

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
    const URL = "http://localhost:4000"; // Corrección en la URL
    const logout = () => {
        window.open(
            `${URL}/auth/logout`, "_self" // Corrección en la URL
        )
    }
    const handleMenu = () => {
        setOpen(!open)
    }
    return (
        <header className="bg-white dark:bg-green py-4 dark:bg-black ">
            <nav className="cl-normal flex flex-row justify-between items-center	">
                <div className="logo z-10 dark:text-white font-bold text-4xl ">
                    Cocecha
                </div>


                <Link to="#" className="sm:hidden">
                    <FaUserAlt /> <br /> {userName}
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
                <div className={` ${open ? "flex fixed_header justify-center items-center " : "hidden flex flex-row justify-between gap-4 items-center sm:block"}`}>
                    <div className="list-principal flex sm:flex-row flex-col justify-between gap-4 items-center		">
                        <Link className="text-green dark:text-white text-lg font-normal">Inicio</Link>
                        <Link className="text-green dark:text-white text-lg font-normal">Productos</Link>
                        <Link className="text-green dark:text-white text-lg font-normal">Proveedores</Link>
                        <p className="text-black text-lg font-medium dark:text-green">{userName}</p>
                        {
                            userName ? <button onClick={logout}>Salir</button> : <Link to="/login" className="text-green dark:text-white">Login</Link>
                        }
                        <button className="bg-white text-green dark:bg-green  dark:text-white p-4 rounded-3xl hidden sm:block text-base	"
                            onClick={handleTheme}>
                            {
                                theme === "light" ? <FaMoon /> : <FaSun />
                            }
                        </button>
                    </div>


                </div>

            </nav>

        </header>

    )
}

export default NavBar;