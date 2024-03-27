import { useState } from "react";



export const Precios = ({ formData, setFormData  }) => {
    const [precios, setPrecios] = useState([
        {
          precio_soles: '',
          contiene: '',
          precio_desde: '',
          precio_hasta: ''
        }
      ]);
    
      const handleAgregarPrecio = () => {
        setPrecios([...precios, {
          precio_soles: '',
          contiene: '',
          precio_desde: '',
          precio_hasta: ''
        }]);
      };
    
      const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newPrecios = [...precios];
        newPrecios[index][name] = value;
        setPrecios(newPrecios);
        setFormData({ ...formData, precio: newPrecios });
      };

  return (
   <></>
  );
};
