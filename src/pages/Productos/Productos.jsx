import { useEffect, useState } from "react";
import { getCategoria, getProductos } from "../../api/productos.api";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import Filtros from "../../components/Filtros";
import { ToastContainer } from "react-toastify";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(localStorage.getItem('nombre'));
    console.log(localStorage.getItem('apellido'));
    console.log(localStorage.getItem('email2'));
    console.log(localStorage.getItem('tipo'));
    async function cargarProductos() {
        try {
            const response = await getProductos();
            const data = response.data;
            setProductos(data);
        } catch (error) {
            console.log(error)
        }
    }
    async function cargarCategoria() {
        try {
            const res = await getCategoria()
            const data = res.data;
            setCategoria(data)
        } catch (error) {
            toast.error("Ocurrío un error en mostrar los filtros intenta de nuevo");
        }
    }
    useEffect(() => {
        cargarProductos(); 
        cargarCategoria();
    }, [])
    if (!productos) {
        setLoading(<Loading />)
    }
    return (
        <div className="dark:bg-bgdark">
            <ToastContainer />
            <div className="cl-normal pt-10">
                <div className="flex">
                    <h1 className="text-black font-bold text-5xl my-6 mb-10 dark:text-white">
                        Productos
                    </h1>
                </div>
                <div className="row">
                    <div className="flex flex-row pt-5 gap-5">

                        <Filtros categoria ={categoria}/>
                        <div className="basis-10/12">
                            <div className="row">
                                <div className="row">
                                    <form className="basis-4">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                <div className="text-gray dark:text-light">
                                                    <FaSearch />
                                                </div>
                                            </div>
                                            <input type="text" id="email-address-icon" className=" bg-light border border-gray text-gray-900 text-sm rounded-lg focus:ring-gray focus:border-gray focus-visible:border-gray-200 focus:border-transparent  block w-full ps-10 p-2.5  dark:bg-gray dark:border-gray dark:placeholder-light dark:text-white dark:focus:outline-none dark:focus:border-gray" placeholder="Busca tu producto..." />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row my-5 ">
                                <div className="flex flex-row gap-4">
                                    {productos.map((producto) => (
                                        <div key={producto.id} className="w-1/4 p-5 flex-grow border border-gray200 rounded-lg dark:border-gray">
                                            <div className="row bg-light p-3 rounded-xl dark:bg-gray mb-3">
                                                <img src={`http://localhost:4000/uploads/${producto.imagen}`} alt="Imagen del producto" />
                                            </div>
                                            <div className="row flex justify-start px-3">
                                                <Link to={`/productos/${producto.nombre_cat}/${producto.nombre_subcat}/${producto.nombre}`} className="text-green font-bold text-left text-2xl dark:text-white py-2 hover:text-green dark:hover:text-green">{producto.nombre}</Link>
                                            </div>
                                            {/* <p>{}</p> */}
                                            <div className="row flex justify-between px-3">
                                                <div className="flex-grow text-green font-bold text-lg"><p> <span className="text-gray font-normal dark:text-white">Desde: </span> {producto.preciobase ? producto.preciobase : 'N/A'}</p></div>
                                                <div className="flex-grow flex-end "><p className="flex  items-center gap-2 justify-end text-end text-lg"><span className="text-gray font-normal dark:text-white">Calidad: </span> <span className="bg-green rounded text-sm text-white font-light px-2 py-1 capitalize">{producto.calidad ? producto.calidad : 'No definido'}</span></p></div>
                                            </div>
                                            <div className="row flex  w-full my-5">
                                                <Link to={`/productos/${producto.nombre_cat}/${producto.nombre_subcat}/${producto.nombre}`} className="bg-green rounded-lg border-2 border-green hover:border-yellow text-white font-bold text-xl dark:text-white py-2 hover:text-yellow hover:bg-white scale-95 hover:scale-100 dark:hover:bg-yellow px-4 w-full	text-center active:scale-95">Adquirir</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Productos;