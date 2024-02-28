import { useEffect, useState } from "react";
import { getProductoCategoria } from "../../../api/productos.api";
import { Link, useParams } from "react-router-dom";


function CategoriaProducto() {
    const { catParam } = useParams();
    const [categoria, setCategoria] = useState([]);
    const [errors, setErrors] = useState(null);
    async function cargarCategoria() {
        try {
            const response = await getProductoCategoria(catParam);
            const data = response.data;
            console.log(data);
            setCategoria(data)
        } catch (error) {
            console.log("ERROR", error)
            setErrors("No se a encontrado productos de esta categoría");
        }
    }
    useEffect(() => {
        cargarCategoria();
    }, [catParam])
    return (
        <div className="dark:bg-bgdark">
            <div className="cl-normal pt-10">
                <div className="flex">
                    <h1 className="text-black font-bold text-5xl my-6 mb-10 dark:text-white capitalize">
                        {catParam}
                    </h1>
                </div>
                <div className="row">
                    {
                        errors ? <p>{errors}</p> : (
                            <div className="flex flex-row pt-5 gap-5">
                                <div className="w-full">
                                    <div className="row my-5 ">
                                        <div className="flex flex-row gap-4">
                                            {categoria.map((producto) => (
                                                <div key={producto.id} className="w-1/4 p-5 flex-grow border border-gray200 rounded-lg dark:border-gray">
                                                    <div className="row bg-light p-3 rounded-xl dark:bg-gray mb-3">
                                                        <img src={`http://localhost:4000/uploads/${producto.imagen}`} alt="Imagen del producto" />
                                                    </div>
                                                    <div className="row flex justify-start px-3">
                                                        <Link to="" className="text-green font-bold text-left text-2xl dark:text-white py-2 hover:text-green dark:hover:text-green capitalize">{producto.nombre}</Link>
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
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default CategoriaProducto;