
import { Form, Formik } from "formik";
import { crearServicio } from "../api/servicios.api";
// Usaremos Formik para manejar ya el estado de nuestro formulario
function CreateServices() {
    return (
        <div>
            Crear un nuevo servicio
            <Formik
    initialValues={{
        imagen: null,
        nombre: "",
        id_categoria: 4 // Asegúrate de que el valor sea una cadena
    }}
    validate={values => {
        const errors = {};
        if (!values.imagen) {
            errors.imagen = "Debes seleccionar una imagen";
        }
        if (!values.nombre) {
            errors.nombre = "Debes ingresar un nombre";
        }
        if (!values.id_categoria) {
            errors.id_categoria = "Debes seleccionar una categoría";
        }
        return errors;
    }}
    onSubmit={async (values, actions) => {
        console.log(values);
        try {
            const response = await crearServicio(values);
            console.log(response);
            actions.resetForm();
        } catch (error) {
            console.log("Ocurrió un error:", error.response);
        }
    }}
>
{({ values, handleChange, handleSubmit, isSubmitting, errors  }) => (
 
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
                <label htmlFor="imagen">Imagen del servicio</label>
                <input
                    id="imagen"
                    type="file"
                    name="imagen"
                    onChange={(event) => {
                        handleChange(event);
                        values.imagen = event.target.files[0]; // Actualiza el campo de la imagen
                    }}
                    
                />
               {errors.imagen && <div>{errors.imagen}</div>}
            </div>
            <div>
                <label htmlFor="nombre">Nombre del servicio</label>
                <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    values={values.nombre}
                    placeholder="Ingresa el nombre del servicio"
                    onChange={handleChange}
                    value={values.nombre}
                />
                 {errors.nombre && <div>{errors.nombre}</div>}
            </div>
            <div>
                <label htmlFor="id_categoria">Categoría del servicio</label>
                <select
                    id="id_categoria"
                    name="id_categoria"
                    value={values.id_categoria}
                    onChange={handleChange}
                >
                    <option value="4">Servicios generales</option>
                </select>
                {errors.id_categoria && <div>{errors.id_categoria}</div>}

            </div>
            <button type="submit" disabled={isSubmitting}>  {isSubmitting ? "Cargando ..." : "Crear servicio"}</button>
        </Form>
    )}
</Formik>
        </div>
    )
}

export default CreateServices;