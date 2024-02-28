import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductoIndividual } from "../../api/productos.api";


function ProductoIndividual() {
    const { categorie, subcategorie, name } = useParams();
    const [individual, setIndividual] = useState([]);
    const [precioIndividual, setPrecio] = useState([]);
    const [errors, setErrors] = useState(null);
    async function cargarProducto() {
        try {
            const response = await getProductoIndividual(categorie, subcategorie, name);
            const data = response.data;
            console.log("DATA: ", data)
            const precios = JSON.parse(data[0].precios);
            console.log("PRECIOS: ", precios)
            // Almacena los precios como un array de objetos en el estado 'precioIndividual'
            setPrecio(precios);

            setIndividual(data);
        } catch (error) {
            setErrors(`No se a econtrado este producto`);
        }
    }
    useEffect(() => {
        cargarProducto();
    }, [categorie, subcategorie, name])
    return (
        <>
            {
                errors ? <p>{errors}</p> : (

                    <div className="dark:bg-bgdark">
                        {
                            individual.map((individual) => (
                                <div className="cl-normal pt-10" key={individual.id_producto}>
                                    <div className="flex">
                                        <h1 className="text-black font-bold text-3xl my-6 mb-10 dark:text-white capitalize">
                                            {individual.nombre}
                                        </h1>
                                    </div>
                                    <div className="row" key={individual.id_producto}>
                                        <div className="flex flex-auto pt-5 gap-10 w-full justify-between">
                                            <div className="w-6/12">
                                                <div className="row my-5 ">
                                                    <div className="bg-light dark:bg-gray flex justify-center">
                                                        <img src={`http://localhost:4000/uploads/${individual.imagen}`} alt="Nombre del producto" className="rounded tamano-img " />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-6/12" key={individual.id_producto}>
                                                <div className="row my-5 ">
                                                    <div className=" gap-4">
                                                        <h3 className="text-2xl text-gray font-semibold dark:text-green ">
                                                            {individual.nombre}
                                                        </h3>
                                                        <div className="border border-gray200 rounded-lg mt-5 dark:border-gray" key={individual.id_producto}>
                                                            <div className="p-4 border-b-2 border-gray200 row dark:border-gray">
                                                                <div className="row">
                                                                    <h4 className="text-green mb-2  text-xl font-bold tracking-tight dark:text-white ">
                                                                        Descripción:
                                                                    </h4>
                                                                    <p className="text-gray dark:text-white">
                                                                        {individual.descripcion}
                                                                    </p>
                                                                </div>

                                                            </div>
                                                            {
                                                                precioIndividual.map((precio) => (
                                                                    <div key={precio.id} className="row px-4 pb-2 pt-2">
                                                                        <div className="row px-4">
                                                                            <p className="">
                                                                                <span className=" text-gray font-semibold dark:text-light  dark:text-opacity-90">Contiene: </span>
                                                                                <span className="text-gray dark:text-light font-bold dark:text-opacity-100">  {precio.contiene}</span></p>
                                                                        </div>

                                                                        <div className="row  m-4 " >
                                                                            <div className="row flex justify-between items-center border-gray200 rounded-xl border-2 p-3 hover:bg-greenbajo hover:border-green dark:border-gray dark:hover:border-green">
                                                                                <div className="row">
                                                                                    <h6 className="text-black font-bold text-xl dark:text-green ">S/ {precio.precio}.00 </h6>
                                                                                    <p className="text-gray dark:text-yellow font-normal">De {precio.desde_cantidad} a {precio.hasta_candidad} {individual.unidad_medida}</p>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <h6 className="text-gray font-bold text-opacity-60 dark:text-green">Calidad: <span className="bg-yellow rounded text-sm text-black  font-bold px-2 py-1 capitalize">{individual.calidad}</span></h6>

                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                        <div className="row mt-4 p-2 bg-greenbajo rounded-lg text-greenhover text-sm">
                                                            <p className="text-center">
                                                                Obtenlo ahora desde
                                                                <span className="font-bold text-base"> S/{individual.precio_base}.00 </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className=" fixed bottom-0 left-0 right-0 w-full bg-white shadow ">
                            <div className="cl-normal py-6 ">
                                {
                                    individual.map((individual) => (
                                        <div className="row flex justify-between w-full">
                                            <div className="row flex items-center gap-4 w-6/12">
                                                <img src={`http://localhost:4000/uploads/${individual.imagen}`} alt="Foto del producto" className="w-14" />
                                                <h4 className="text-xl text-gray font-semibold ">
                                                    {individual.nombre}
                                                </h4>
                                            </div>
                                            <div className="row flex items-center w-6/12 justify-around">
                                                <h4 className="text-2xl text-black font-semibold">
                                                    Desde S/{individual.precio_base}.00
                                                </h4>
                                                <Link className="text-white px-14 py-3 bg-green font-bold text-md rounded-lg hover:bg-greenhover">
                                                    Cotizar Producto
                                                </Link>
                                            </div>
                                        </div>

                                    ))
                                }

                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
}

export default ProductoIndividual;