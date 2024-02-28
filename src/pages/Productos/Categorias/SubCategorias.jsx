import { useEffect, useState } from "react";
import { getSubcategorias } from "../../../api/productos.api";
import { Link } from "react-router-dom";

function Subcategorias() {
    const [subcategoria, setSubcategoria] = useState([]);
    const [errors, setErrors] = useState(null);

    async function cargarSubcategoria() {
        try {
            const response = await getSubcategorias();
            const data = response.data;
            console.log(data);
            setSubcategoria(data)
        } catch (error) {
            console.log(error);
            setErrors("No se a encontrado productos de esta categoría");
        }
    }

    useEffect(() => {
        cargarSubcategoria()
    }, [])

    return (
        <div className="dark:bg-bgdark">
            <div className="cl-normal pt-10">
                <div className="flex">
                    <h1 className="text-black font-bold text-5xl my-6 mb-10 dark:text-white capitalize">
                      Sub  Categorías
                    </h1>
                </div>
                <div className="row">
                    {
                        errors ? <p>{errors}</p> : (
                            <div className="flex flex-row pt-5 gap-5">
                                <div className="w-full">
                                    <div className="row my-5 ">
                                        <div className="flex flex-row gap-4">
                                            {subcategoria.map((subcat) => (
                                                <div key={subcat.id} className="w-1/4 p-4 flex-grow border border-gray200 rounded-lg dark:border-gray">

                                                    <Link to={`/productos/categorias/${subcat.nombre_subcat}`} className="row ">
                                                        <div className="row bg-light p-3 rounded-lg dark:bg-gray mb-3">
                                                            <img src={`http://localhost:4000/uploads/${subcat.foto_subcat}`} alt="Imagen del producto" />
                                                        </div>
                                                    </Link >

                                                    <div className="row flex justify-center px-3">
                                                        <Link to={`/productos/categorias/${subcat.nombre_subcat}`} className="text-green font-bold text-center  text-2xl dark:text-white py-2 hover:text-green dark:hover:text-green capitalize">{subcat.nombre_subcat}</Link>
                                                    </div>
                                                    <div className="row flex  w-full mt-3">
                                                        <Link to={`/productos/categorias/${subcat.nombre_subcat}`} className="bg-green rounded-lg border-2 border-green hover:border-yellow text-white font-semibold text-lg dark:text-white py-2 hover:text-yellow hover:bg-white scale-95 hover:scale-100 dark:hover:bg-yellow px-4 w-full	text-center active:scale-95">Ver Productos</Link>
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


export default Subcategorias;