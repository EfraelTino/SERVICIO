import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  FaRegEdit,
  FaRegTimesCircle,
  FaPowerOff,
  FaRegTrashAlt,
  FaSearch,
} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { validarToken } from "../../utilidades/utils";
import { getProductoUsuario } from "../../api/productos.api";

function Dashboard() {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(null);

  const navigate = useNavigate();
  const tokenExistAndStillValid = validarToken();
  const tipo = localStorage.getItem("tipo");
  const id_usuario = parseInt(localStorage.getItem("id_usuario"));
  console.log("tipo id: ", typeof id_usuario);
  console.log("tipo id: ", id_usuario);

  async function cargarProductoUsuario() {
    try {
      const result = await getProductoUsuario(id_usuario);
      console.log(result);
    } catch (error) {
      setdata([]);
      seterror(error.response.data.message);
      // const error = error.response.data.message
    }
  }
  console.log(data);

  useEffect(() => {
    cargarProductoUsuario();
    if (!tokenExistAndStillValid) {
      navigate("/login");
    } else if (tipo === 1 || tipo === "1") {
      navigate("/productos");
    } else {
      toast.success(
        "Empieza a vender tus productos, este es el panel de administrador donde podrás administrar y mostrar tus productos",
        {
          autoClose: false,
          closeButton: ({ closeToast }) => (
            <FaRegTimesCircle
              onClick={closeToast}
              className="text-4xl text-black dark:text-light"
            />
          ),
          className: "dark:bg-bgdark  dark:text-white text-sm md:text-lg",
        }
      );
    }
  }, [tokenExistAndStillValid, navigate]);

  return (
    <div className="bg-white dark:bg-bgdark">
      <ToastContainer
        className="big-toast"
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
      <div className="cl-normal pt-5">
        <div className="flex w-full gap-5 py-14">
          <div className="w-2/12 border rounded-xl  p-5 py-12 border-gray200 dark:border-gray dark:bg-bgcard">
            <div className="row">
              <div className="flex justify-center">
                <div className="column">
                  <div className="row pb-3">
                    <div className="column">
                      <div className="flex items-center justify-center">
                        <img
                          src="http://localhost:4000/uploads/1708848191558-fontanero.webp"
                          alt=""
                          className="rounded-full max-w-28	"
                        />
                      </div>
                      <div className="row w-full">
                        <h3 className="font-bold dark:text-gray200 text-center ">
                        {localStorage.getItem('nombre')} {localStorage.getItem('apellido')}

                        </h3>
                        <p className=" hover:text-green text-center dark:text-gray200">
                          {
                          localStorage.getItem('email2')
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-8 border-t border-gray">
                    <div className="column w-full">
                      <Link
                        to=""
                        className="font-medium flex items-center hover:bg-greenbajo hover:border-l-2 border-white border-l-2 hover:border-green
                                            py-1 rounded my-2 px-2 text-black"
                      >
                        <FaRegTimesCircle />{" "}
                        <span className="ml-3">Perfil</span>
                      </Link>
                      <Link
                        to=""
                        className="font-medium flex items-center bg-greenbajo border-l-2	 border-green  py-1 rounded my-2 px-2 text-green"
                      >
                        <FaRegTimesCircle />{" "}
                        <span className="ml-3">Productos</span>
                      </Link>
                      <Link
                        to=""
                        className="font-medium flex items-center hover:bg-greenbajo hover:border-l-2 border-white border-l-2 hover:border-green
                                            py-1 rounded my-2 px-2 text-red"
                      >
                        <FaRegTimesCircle /> <span className="ml-3">Salir</span>
                      </Link>
                    </div>
                    <div className="column w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-10/12">
            <div className="row">
              <div className="flex">
                <h1 className="text-black font-bold text-5xl my-6 mb-10 dark:text-white">
                  Mis Productos
                </h1>
              </div>
            </div>
            <div className="row w-full mb-6">
              <div className="flex justify-between items-center">
                <div className="">
                  <form className="basis-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <div className="text-gray dark:text-light">
                          <FaSearch />
                        </div>
                      </div>
                      <input
                        type="text"
                        id="email-address-icon"
                        className=" bg-light border border-gray text-gray-900 text-sm rounded-lg focus:ring-gray focus:border-gray focus-visible:border-gray-200 focus:border-transparent  block w-full ps-10 p-2.5  dark:bg-gray dark:border-gray dark:placeholder-light dark:text-white dark:focus:outline-none dark:focus:border-gray"
                        placeholder="Busca tu producto..."
                      />
                    </div>
                  </form>
                </div>
                <Link
                  to="./add-product"
                  className="bg-green rounded-lg border-2 border-green hover:border-white text-white font-normal 
                                    text-md  py-1.5 hover:text-white hover:bg-black scale-95 hover:scale-100 dark:hover:bg-white dark:text-black px-4 w-fulltext-center active:scale-95"
                  type="button"
                >
                  Agregar
                </Link>
              </div>
              <div className="row w-full my-3">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-xs text-left rtl:text-right text-light dark:text-light  rounded-md">
                    <thead className="text-xs bg-gray-50 bg-bgcard dark:text-light rounded-md">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Imagen
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Estado
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Categoria
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length >= 1 ? (
                        // Si hay datos en data, representar los elementos de la tabla
                        data.map((item, index) => (
                          <tr
                            key={index}
                            className="bg-white dark:bg-bgdark border-b dark:border-gray-700 text-gray text-xs dark:text-light"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              <img
                                src={item.imagenURL} // Ajusta la lógica para obtener la URL de la imagen de los datos
                                alt=""
                                className="max-w-16"
                              />
                            </th>
                            <td className="px-6 py-4"></td>{" "}
                            {/* Ajusta la lógica para obtener el nombre de los datos */}
                            <td className="px-6 py-4"></td>{" "}
                            {/* Ajusta la lógica para obtener el estado de los datos */}
                            <td className="px-6 py-4"></td>{" "}
                            {/* Ajusta la lógica para obtener la categoría de los datos */}
                            <td className="px-6 py-4 tect-center">
                              <div className="flex gap-1">
                                <Link to="" className=" text-md rounded  ">
                                  <FaRegEdit className="bg-black p-1  text-xl rounded text-white dark:bg-gray200 dark:text-bgdark" />
                                </Link>
                                <Link
                                  to=""
                                  className="bg-gray text-md rounded text-bgdark"
                                >
                                  <FaPowerOff className="bg-gray text-white p-1  text-xl rounded" />
                                </Link>
                                <Link to="" className="bg-red text-md rounded">
                                  <FaRegTrashAlt className="bg-red p-1  text-xl rounded text-white" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        // Si no hay datos en data, mostrar la respuesta del servidor
                        <tr className="bg-white dark:bg-bgdark border-b dark:bg-gray-800 dark:border-gray-700 text-gray text-xs dark:text-light">
                          <td colSpan="5" className="px-6 py-4 text-center text-red  font-semibold">
                            {error}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
