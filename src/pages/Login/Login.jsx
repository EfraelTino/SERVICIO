import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { loginUser } from "../../api/auth.api";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password);
            // const token =   response.data.token;
            // const  nombre=  response.data.nombre;
            // const apellido= response.data.apellido;
            // const tipo = response.data.tipo;
            // const email2 = response.data.email;
            const { token, nombre, apellido, email: email2, tipo } = response.data
            console.log(token)

            if (token) {
                localStorage.setItem('token', token)
                localStorage.setItem('nombre', nombre)
                localStorage.setItem('apellido', apellido)
                localStorage.setItem('email2', email2)
                localStorage.setItem('tipo', tipo)
                if(tipo === 1 || tipo ==='1'){
                    navigate(-1);
                    console.log("IRAS A Aproductos")
                }else{
                    navigate('/dashboard');
                }
                setLoginSuccessful(true);
            } else {
                setLoginSuccessful(false);
                toast.error("Ocurrió un error, inténtalo más tarde");
            }

        } catch (error) {
            console.log(error)
            toast.error(error.response.data);
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
                            Iniciar sesión en su cuenta
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Escribe tu correo"
                                    required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                            <button className="w-full text-white bg-green hover:bg-yellow   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 ">Sign in</button>
                            <p className="text-sm font-light text-black dark:text-light text-center">
                                ¿Aún no tienes una cuenta? <Link to="/signup" className="font-medium text-primary-600 hover:text-green dark:text-primary-500 ">Regístrate</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;