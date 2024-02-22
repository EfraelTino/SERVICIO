import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
function NavBar() {
    const [theme, setTeheme] = useState("dark");
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
    return (
        <header className="bg-white dark:bg-blueone py-4 ">
            <nav className="cl-normal bg-white dark:bg-blueone flex flex-row justify-between items-center	">
                <div className="logo ">
                    <img src="" width="120" alt="" />
                </div>
                <div className="list-principal flex flex-row justify-between gap-4 items-center		">
                    <Link className="text-bluone dark:text-white">Inicio</Link>
                    <Link className="text-bluone dark:text-white">Asociiarte</Link>
                    <Link className="text-bluone dark:text-white">Contaco</Link>
                </div>
                <div className="getstarte flex flex-row justify-between gap-4 items-center	">
                <button className="bg-blueone text-white dark:bg-yellow  dark:text-blueone p-4 rounded-3xl"
                        onClick={handleTheme}>Camibar</button>
                    <Link to="/new-services" className="bg-blueone text-white dark:bg-yellow  dark:text-blueone p-4 rounded-3xl"
                       >Get started</Link>
                </div>
            </nav>

        </header>

    )
}

export default NavBar;