import { Link } from "react-router-dom";
import { getCategoria } from "../../../api/productos.api";
import { useEffect, useState } from "react";


function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [errors, setErrors] = useState(null);
    async function cargarCategorias() {
        try {
            const response = await getCategoria();
            const data = response.data;
            console.log(data);
            setCategorias(data);
        } catch (error) {
            console.log(error);
            setErrors("No se a encontrado productos de esta categoría");
        }
    }
    useEffect(() => {
        cargarCategorias();
    }, [])
    return (
        <div className="dark:bg-bgdark">
            <div className="cl-normal pt-10">
                <div className="flex">
                    <h1 className="text-black font-bold text-5xl my-6 mb-10 dark:text-white capitalize">
                        Categorías
                    </h1>
                </div>
                <div className="row">
                    {
                        errors ? <p>{errors}</p> : (
                            <div className="flex flex-row pt-5 gap-5">
                                <div className="w-full">
                                    <div className="row my-5 ">
                                        <div className="flex flex-row gap-4">
                                            {categorias.map((cat) => (
                                                <div key={cat.id} className="w-1/4 p-4 flex-grow border border-gray200 rounded-lg dark:border-gray">

                                                    <Link to={`/productos/categorias/${cat.nombre_cat}`} className="row ">
                                                        <div className="row bg-light p-3 rounded-lg dark:bg-gray mb-3">
                                                            <img src={`http://localhost:4000/uploads/${cat.foto_cat}`} alt="Imagen del producto" />
                                                        </div>
                                                    </Link >

                                                    <div className="row flex justify-center px-3">
                                                        <Link to={`/productos/categorias/${cat.nombre_cat}`} className="text-green font-bold text-center  text-2xl dark:text-white py-2 hover:text-green dark:hover:text-green capitalize">{cat.nombre_cat}</Link>
                                                    </div>
                                                    <div className="row flex  w-full mt-3">
                                                        <Link to={`/productos/categorias/${cat.nombre_cat}`} className="bg-green rounded-lg border-2 border-green hover:border-yellow text-white font-semibold text-lg dark:text-white py-2 hover:text-yellow hover:bg-white scale-95 hover:scale-100 dark:hover:bg-yellow px-4 w-full	text-center active:scale-95">Ver Productos</Link>
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
    )
}

export default Categorias;