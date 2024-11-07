import React, { useState } from "react";
import xBlanco from "../assets/x-regular-blanco.png";
import Button from "./Button";

const Modal = ({ title = "Agregar", onCancel, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    id: initialData?.id || null,
    name: initialData?.name || "",
    image: initialData?.image || "",
    description: initialData?.description || "",
    price: initialData?.price || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };
  return (
    <>
      <section className="border border-[#A89497] mt-4 rounded-md bg-[#66534F] pb-5">
        <div className="flex justify-between items-center px-6 py-4">
          <div></div>
          <h2 className="text-lg font-semibold">{title} Producto</h2>
          <div
            className=" rounded-full bg-[#A89497] w-8 h-8 flex justify-center items-center hover:bg-[#0E0F0B] cursor-pointer "
            onClick={onCancel}
          >
            <img src={xBlanco} alt="" />
          </div>
        </div>
        <form action="" className="px-6">
          <label className="flex flex-col gap-2 mb-4">
            <span className="font-medium">Nombre</span>
            <input
              className="w-full py-2 px-5 rounded-lg bg-[#E5DDE1]  text-[#66534F] "
              type="text"
              placeholder="pollo al horno"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-2 mb-4">
            <span className="font-medium">Url de Imagen</span>
            <input
              className="w-full py-2 px-5 rounded-lg bg-[#E5DDE1] text-[#66534F]  "
              type="text"
              placeholder="http://mis-imagenes/imagen.jpg"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-2 mb-4">
            <span className="font-medium">Descripción</span>
            <input
              className="w-full py-2 px-5 rounded-lg bg-[#E5DDE1] text-[#66534F] "
              type="text"
              placeholder="pollo crocante con papas fritas"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-2 mb-4">
            <span className="font-medium">Precio</span>
            <input
              className="w-full py-2 px-5 rounded-lg bg-[#E5DDE1] text-[#66534F] "
              type="number"
              placeholder="20"
              min={1}
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </label>
        </form>
        <div className="flex justify-center gap-4 px-6">
          <Button variant="" className="w-full" onClick={onCancel}>
            Cancelar
          </Button>
          <Button variant="solid" className="w-full" onClick={handleSave}>
            Guardar
          </Button>
        </div>
      </section>
    </>
  );
};

export default Modal;
