
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUser } from "../../api/auth.api";

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        password_repeat: '',
        tipo: 0,
        telefono:'',
        fecha: Date.now(),
    })
    const handleChange =  (e) =>{
        const {name, value}=e.target;
        setFormData(prevState=>({
            ...prevState,
            [name]:value,
        }))
    }
    console.log(formData)
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await createUser(formData);
            if(response.status === 200){
                navigate('/login');
            }
        } catch (error) {
            toast.error(error.response.data.error);
        }

    }
    return (
        <section className="bg-gray-50 dark:bg-bgdark">
            <ToastContainer />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Cozecha
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-bgdark dark:border-gray">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Regístrate en la plataforma
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div className="flex gap-2">
                                <div className="w-6/12">
                                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Escribe tu nombre"
                                        required="" />
                                </div>
                                <div className="w-6/12">
                                    <label htmlFor="apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos
                                    </label>
                                    <input
                                        type="text"
                                        id="apellido"
                                        name="apellido"
                                        value={formData.apellido}
                                        onChange={handleChange}
                                        className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Escribe tu apellido"
                                        required="" />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-6/12">
                                    <label htmlFor="tipo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿Qué eres?
                                    </label>
                                    <select 
                                    id="tipo" 
                                    name="tipo"
                                    value={formData.tipo}
                                    onChange={handleChange}
                                    className="bg-greenbajo border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="0">Proveedor</option>
                                        <option value="1">Compradror</option>
                                    </select>
                                </div>
                                <div className="w-6/12">
                                    <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono
                                    </label>
                                    <input
                                        type="number"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telf}
                                        onChange={handleChange}
                                        className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Escribe tu apellido"
                                        required="" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo electrónico
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Escribe tu correo"
                                    className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" />
                            </div>
                            <div>
                                <label htmlFor="password_repeat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repite tu Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password_repeat"
                                    id="password_repeat"
                                    value={formData.repeat_password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-light hover:cursor-pointer	">Recordar</label>
                                    </div>
                                </div>
                                {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">¿Has olvidado tu contraseña?</a> */}
                            </div>
                            <button className="w-full text-white bg-green hover:bg-yellow   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 ">Registrar</button>
                            <p className="text-sm font-light text-black dark:text-light text-center">
                                ¿Aún no tienes una cuenta? <Link to="/signup" className="font-medium text-primary-600 hover:text-green dark:text-primary-500 ">Inicia Sesión</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;