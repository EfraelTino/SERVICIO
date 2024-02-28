import { useEffect, useState } from "react";
import { getServicios } from "../api/servicios.api.js";
import { Link } from "react-router-dom";
function AllServices() {
    const [servicio, setServicio] = useState([]);
    const [errors, setErrors] = useState(null);
    async function cargarServicio() {
        try {
            const response = await getServicios();
            const data = response.data;
            setServicio(data);

        } catch (error) {
            setErrors(error);
        }
    }

    // otra alternativa
    useEffect(() => {

        cargarServicio();
    }, []);
    return (

        <section>
            {
                errors ? (<p>{errors}</p>) :
                    servicio.length === 0 ? (<p>Cargando...</p>) : (
                        servicio.map((item) => (
                            <div key={item.id_servicio}>
                                <Link>
                                    <img src={`http://localhost:4000/uploads/${item.imagen_servicio}`} alt={item.nombre_servicio} />
                                    <h4>
                                        {item.nombre_servicio}
                                    </h4>
                                    <p>
                                        {item.id_categoria === 4 ? "Servicios generales" : "No especificado"}
                                    </p>
                                </Link>
                            </div>
                        ))
                    )
            }
        </section>
    )
}

export default AllServices;