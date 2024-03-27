import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSubcategorias, postCreateProduct } from "../api/productos.api";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { validarToken } from "../utilidades/utils";

export const AddoProduct = () => {
  const navigate = useNavigate();
  const [subCategoria, setSubCategoria] = useState([]);
  const tokenExistAndStillValid = validarToken();
  const id_usuario = localStorage.getItem("id_usuario");
  const tipo = localStorage.getItem("tipo");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const CLOUD_NAME = "preset_cozecha";
  const UPLOAD_PRESET = "du8p5gvlb";

  const [formData, setFormData] = useState({
    foto: "",
    nombre_producto: "",
    telefono: "",
    calidad: "",
    clasificacion: "",
    medidas: "",
    precio_base: "",
    descripcion: "",
    id_usuario: id_usuario,
    precios: [
      { preciosoles: "", contiene: "", preciodesde: "", preciohasta: "" },
    ],
  });

  async function cargarSubCatergoria() {
    try {
      const response = getSubcategorias();
      const data = (await response).data;
      setSubCategoria(data);
    } catch (error) {
     toast.error(error)
    }
  }
  // PROVEEODR LO SACAS DE LOCAL STORAGE
  useEffect(() => {

    if (!tokenExistAndStillValid) {
      return navigate(-1);
    }else if(tipo != 0 || tipo != '0'){
      return navigate(-1);
    }
    cargarSubCatergoria();
  }, [tokenExistAndStillValid, navigate]);

  const preciossubidos = formData.precios;

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (
      name.includes("preciosoles") ||
      name.includes("contiene") ||
      name.includes("preciodesde") ||
      name.includes("preciohasta")
    ) {
      const fieldName = name.split("_")[0];
      const newPrecios = [...formData.precios];
      newPrecios[index] = {
        ...newPrecios[index],
        [fieldName]: value,
      };
      setFormData((prevState) => ({
        ...prevState,
        precios: newPrecios,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar el loader
    try {
      const uploadData = new FormData();
      uploadData.append("file", file);
      uploadData.append("upload_preset", CLOUD_NAME);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${UPLOAD_PRESET}/upload`,
        { method: "POST", body: uploadData }
      );
      const responseData = await response.json();
      const urlfoto = responseData.url; // Sin await
      if (urlfoto) {
        setFormData((prevState) => ({
          ...prevState,
          foto: urlfoto,
        }));
      } else {
        toast.error("Error en la subida de archivos, contacta con soporte")
      }
    } catch (error) {
      toast.error(error)
    } finally {
      setLoading(false); // Desactivar el loader
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      if (formData.foto !== "") {
        setLoading(true); // Activar el loader
        try {
          const res = await postCreateProduct(formData);
          toast.success(res.data.message);
        } catch (error) {
         toast.error(error)
        } finally {
          setLoading(false); // Desactivar el loader
        }
      }
    };
  
    fetchData();
  }, [formData.foto]);
  const handleAgregarPrecio = () => {
    setFormData({
      ...formData,
      precios: [
        ...formData.precios,
        { preciosoles: "", contiene: "", preciodesde: "", preciohasta: "" },
      ],
    });
  };

  return (
    <div className="dark:bg-bgdark">
      <ToastContainer />
      <div className="justify-center items-center flex inset-0 z-50 cl-normal py-14 dark:bg-bgdark">
        <div className="relative w-full dark:bg-bgdark">
          <div className="flex">
            <h1 className="text-black font-bold text-5xl dark:text-white dark:bg-bgdark">
              Agregar Producto
            </h1>
          </div>
          <div className="border-0 flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-bgdark">
            <div className="row flex">
              <div className="w-6/12">
                <div className="relative p-6 flex-auto">
                  <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                  >
                    <div className="flex gap-2">
                      <div className="w-full">
                        <label
                          htmlFor="foto"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Foto del producto{" "}
                          <small>
                            Solo se admiten imágenes tipo: .png, .jog, .jpeg,
                            .webp
                          </small>
                        </label>
                        <input
                          accept=".png, .jpg, .jpeg, .webp"
                          type="file"
                          onChange={(e) => setFile(e.target.files[0])}
                          className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6/12">
                        <label
                          htmlFor="nombre_producto"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nombre del producto
                        </label>
                        <input
                          type="text"
                          id="nombre_producto"
                          name="nombre_producto"
                          value={formData.nombre_producto}
                          onChange={handleChange}
                          className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Escribe el nombre del producto"
                          required
                        />
                      </div>

                      <div className="w-6/12">
                        <label
                          htmlFor="telefono"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          <small> Teléfono de contacto - Whathsapp</small>
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          maxLength={9}
                          value={formData.telefono}
                          onChange={handleChange}
                          className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Escribe el teléfono de contacto"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6/12">
                        <label
                          htmlFor="calidad"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Calidad
                        </label>
                        <input
                          type="text"
                          id="calidad"
                          name="calidad"
                          value={formData.calidad}
                          onChange={handleChange}
                          className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Escribe la calidad del producto"
                          required
                        />
                      </div>

                      <div className="w-6/12">
                        <label
                          htmlFor="clasificacion"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Clasificación
                        </label>
                        <select
                          id="clasificacion"
                          name="clasificacion"
                          value={formData.clasificacion}
                          onChange={handleChange}
                          className="bg-greenbajo border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          // required
                        >
                          <option value="" disabled>
                            Clasificar
                          </option>
                          {subCategoria.map((item, index) => (
                            <option key={index} value={item.id}>
                              {item.nombre_subcat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="w-6/12">
                        <label
                          htmlFor="medidas"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Unidad de Medidas
                        </label>
                        <input
                          type="text"
                          id="medidas"
                          name="medidas"
                          value={formData.medidas}
                          onChange={handleChange}
                          className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Kg, Lts, Sacos, etc"
                          required
                        />
                      </div>

                      <div className="w-6/12">
                        <label
                          htmlFor="precio_base"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Precio base
                        </label>
                        <input
                          type="precio_base"
                          id="precio_base"
                          name="precio_base"
                          value={formData.precio_base}
                          onChange={handleChange}
                          className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Escribe el precio base"
                          required
                        />
                      </div>
                    </div>
                    <div className="row border border-gray200 rounded-lg mt-5 dark:border-gray p-3">
                      <h5 className="font-bold text-sm dark:text-light">
                        Precios
                      </h5>
                      {formData.precios.map((precio, index) => (
                        <div className="row" key={index}>
                          <div className="flex gap-2">
                            <div className="w-6/12">
                              <label
                                htmlFor={`preciosoles_${index}`}
                                className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Precio en soles
                              </label>
                              <input
                                type="text"
                                id={`preciosoles_${index}`}
                                name={`preciosoles_${index}`}
                                value={formData.precios[index].preciosoles}
                                onChange={(e) => handleChange(e, index)}
                                className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Ejemplo: 20, 3.50, 21.5"
                                required
                              />
                            </div>
                            <div className="w-6/12">
                              <label
                                htmlFor={`contiene_${index}`}
                                className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Contiene
                              </label>
                              <input
                                type="text"
                                id={`contiene_${index}`}
                                name={`contiene_${index}`}
                                value={formData.precios[index].contiene}
                                onChange={(e) => handleChange(e, index)}
                                className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Ej. saco contiene 20 Kg"
                                required
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="w-6/12">
                              <label
                                htmlFor={`preciodesde_${index}`}
                                className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Desde
                              </label>
                              <input
                                type="text"
                                id={`preciodesde_${index}`}
                                name={`preciodesde_${index}`}
                                value={formData.precios[index].preciodesde}
                                onChange={(e) => handleChange(e, index)}
                                className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Ej. 3, 7.50, 9,50"
                                required
                              />
                            </div>

                            <div className="w-6/12">
                              <label
                                htmlFor={`preciohasta_${index}`}
                                className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Hasta
                              </label>
                              <input
                                type="text"
                                id={`preciohasta_${index}`}
                                name={`preciohasta_${index}`}
                                value={formData.precios[index].preciohasta}
                                onChange={(e) => handleChange(e, index)}
                                className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                placeholder="Ej. 10, 12.50, 22,90"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="flex mt-3 justify-end">
                        <button
                          type="button"
                          onClick={handleAgregarPrecio}
                          className="text-white bg-green hover:bg-yellow   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 hover:text-black"
                        >
                          Agregar Precio
                        </button>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="descripcion"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Descripción del producto
                      </label>
                      <textarea
                        name="descripcion"
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        className="bg-greenbajo border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        cols="30"
                        rows="10"
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-center">
                      <button className=" text-white bg-green hover:bg-yellow   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 ">
                        Agregar producto
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-6/12 p-2">
                <div className="dark:bg-bgdark w-100">
                  <div className="pt-0">
                    <div className="flex">
                      <div className="colum">
                        <h2 className="text-black font-bold text-3xl mt-6 mb-4 dark:text-white">
                          Tu producto se mostrará así
                        </h2>
                        <h4 className="text-black font-bold text-2xl  dark:text-white">
                          {!formData.nombre_producto
                            ? "Nombre del producto"
                            : formData.nombre_producto}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="flex flex-auto pt-5 w-full justify-between gap-2">
                        <div className="w-4/12">
                          <div className="row my-5 ">
                            <div className="bg-light dark:bg-gray flex justify-center">
                              {!file ? (
                                <h4 className="text-black font-semibold text-1xl  dark:text-white">
                                  {" "}
                                  Foto del producto{" "}
                                </h4>
                              ) : (
                                <img
                                  src={file ? URL.createObjectURL(file) : ""}
                                  alt="Nombre del producto"
                                  className="rounded"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="w-8/12 ">
                          <div className="row my-5 ">
                            <div className=" gap-4">
                              <h3 className="text-lg text-gray font-bold dark:text-green ">
                                {!formData.nombre_producto
                                  ? "Nombre del producto"
                                  : formData.nombre_producto}
                              </h3>
                              <div className="border border-gray200 rounded-lg mt-5 dark:border-gray">
                                <div className="p-4 border-b-2 border-gray200 row dark:border-gray">
                                  <div className="row">
                                    <h4 className="text-green mb-1  text-lg font-bold tracking-tight dark:text-white ">
                                      Descripción:
                                    </h4>
                                    <p className="text-gray dark:text-white text-sm">
                                      {!formData.descripcion ? (
                                        <strong className="text-red">
                                          Descripción del producto
                                        </strong>
                                      ) : (
                                        formData.descripcion
                                      )}
                                    </p>
                                  </div>
                                  <div className="row">
                                    <h4 className="text-green mb-2  text-lg font-bold tracking-tight dark:text-white ">
                                      Contacto de WhatsApp:
                                    </h4>
                                    <p className="text-gray dark:text-white text-sm">
                                      {!formData.telefono ? (
                                        <span className="flex items-center gap-1 text-gray ">
                                          {" "}
                                          <FaWhatsapp className="text-green font-extrabold text-lg" />{" "}
                                          <strong className="text-red">
                                            Ej: +51 953641201
                                          </strong>
                                        </span>
                                      ) : (
                                        <span className="flex items-center gap-1 text-gray font-bold">
                                          {" "}
                                          <FaWhatsapp className="text-green font-extrabold text-lg" />{" "}
                                          +51 {formData.telefono}{" "}
                                        </span>
                                      )}
                                    </p>
                                  </div>
                                </div>
                                <div className="row px-2 pb-2 pt-2">
                                  <div>
                                    {preciossubidos.map((detalle, index) => (
                                      <div key={index}>
                                        <div className="row px-4">
                                          <p className="">
                                            <span className=" text-gray font-semibold dark:text-light dark:text-opacity-90 text-sm">
                                              Contiene:{" "}
                                            </span>
                                            <span className="text-gray dark:text-light font-bold dark:text-opacity-100 text-sm ">
                                              {!detalle.contiene ? (
                                                <strong className="text-red">
                                                  Ej. 20Kg por saco
                                                </strong>
                                              ) : (
                                                detalle.contiene
                                              )}
                                            </span>
                                          </p>
                                        </div>
                                        <div className="row  m-4 mt-1 ">
                                          <div className="row flex justify-between items-center border-gray200 rounded-xl border-2 p-2 hover:bg-greenbajo hover:border-green dark:border-gray dark:hover:border-green">
                                            <div className="row">
                                              <h6 className="text-black font-bold text-base dark:text-green  ">
                                                S/{" "}
                                                {!detalle.preciosoles ? (
                                                  <span className="text-red">
                                                    Ej.120
                                                  </span>
                                                ) : (
                                                  detalle.preciosoles
                                                )}
                                                .00{" "}
                                              </h6>
                                              <p className="text-gray dark:text-yellow font-normal text-xs">
                                                De{" "}
                                                {!detalle.preciodesde ? (
                                                  <span className="text-red">
                                                    <strong>Ej. 20Kg</strong>
                                                  </span>
                                                ) : (
                                                  `${detalle.preciodesde}${formData.medidas}`
                                                )}{" "}
                                                a{" "}
                                                {!detalle.preciohasta ? (
                                                  <span className="text-red">
                                                    {" "}
                                                    <strong>
                                                      Ej. 25Kg
                                                    </strong>{" "}
                                                  </span>
                                                ) : (
                                                  `${detalle.preciohasta}${formData.medidas}`
                                                )}
                                              </p>
                                            </div>
                                            <div className="row">
                                              <h6 className="text-gray font-bold text-opacity-60 dark:text-green text-sm">
                                                Calidad:{" "}
                                                <span className="bg-yellow rounded text-black  font-bold px-2 py-1 capitalize text-xs">
                                                  {!formData.calidad
                                                    ? "Estándar"
                                                    : formData.calidad}
                                                </span>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-4 p-2 bg-greenbajo rounded-lg text-greenhover text-xs">
                                <p className="text-center">
                                  Obtenlo ahora desde
                                  <span className="font-bold text-xs">
                                    {" "}
                                    S/{" "}
                                    {!formData.precio_base ? (
                                      <strong className="text-red">
                                        Ej. 120
                                      </strong>
                                    ) : (
                                      formData.precio_base
                                    )}
                                    .00{" "}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
