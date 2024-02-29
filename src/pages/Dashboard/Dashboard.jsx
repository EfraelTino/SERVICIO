import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaRegTimesCircle } from "react-icons/fa";

import 'react-toastify/dist/ReactToastify.css';
import { validarToken } from "../../utilidades/utils";

function Dashboard() {
    const navigate = useNavigate();
    const tokenExistAndStillValid = validarToken();
    const tipo = localStorage.getItem('tipo')
    console.log(typeof tipo)
    useEffect(() => {
        if (!tokenExistAndStillValid) {
            navigate('/login');
        } else if (tipo === 1 || tipo === '1') {
            navigate('/productos');
        } else {
            toast.success("Empieza a vender tus productos, este es el panel de administrador donde podrás administrar y mostrar tus productos", {
                autoClose: false, 
                closeButton: ({ closeToast }) => (
                    <FaRegTimesCircle onClick={closeToast} className="text-4xl text-black dark:text-light" />
                  ),
                className: 'dark:bg-bgdark  dark:text-white text-sm md:text-lg' });
        }
    }, [tokenExistAndStillValid, navigate]);

        // console.log("token: ", localStorage.getItem('token'));
        // console.log(localStorage.getItem('nombre'));
        // console.log(localStorage.getItem('apellido'));
        // console.log(localStorage.getItem('email2'));
        // console.log(localStorage.getItem('tipo'));

    return (
        <>
            <ToastContainer
            className='big-toast'
                position="bottom-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition:Bounce
            />
            DAS
        </>
    );
}

export default Dashboard;