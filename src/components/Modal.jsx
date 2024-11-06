import React from "react";
import xBlanco from "../assets/x-regular-blanco.png";
import Button from "./Button";
const Modal = () => {
  return (
    <>
      <section className="border border-[#A89497] mt-4 rounded-md bg-[#66534F]">
        <div className="flex justify-between items-center px-6 py-4">
          <div></div>
          <h2 className="text-lg font-semibold">Añadir</h2>
          <div className=" rounded-full bg-[#A89497] w-8 h-8 flex justify-center items-center">
            <img src={xBlanco} alt="" />
          </div>
        </div>
        <form action="" className="px-6">
          <label className="flex flex-col gap-2 mb-4">
            <span className="font-medium">Nombre</span>
            <input
              className="w-full py-2 px-5 rounded-lg bg-[#E5DDE1] "
              type="text"
              placeholder="Karen"
            />
          </label>
          <label className="flex flex-col gap-2 mb-4">
            <span className="font-medium">Imagen</span>
            <input
              className="w-full py-2 px-5 rounded-lg bg-[#E5DDE1] "
              type="text"
              placeholder="Karen"
            />
          </label>
          <label className="flex flex-col gap-2 mb-4">
            <span className="font-medium">Descripción</span>
            <input
              className="w-full py-2 px-5 rounded-lg bg-[#E5DDE1] "
              type="text"
              placeholder="Karen"
            />
          </label>
          <label className="flex flex-col gap-2 mb-4">
            <span className="font-medium">Precio</span>
            <input
              className="w-full py-2 px-5 rounded-lg bg-[#E5DDE1] "
              type="text"
              placeholder="Karen"
            />
          </label>
        </form>
        <div className="flex justify-center gap-4 px-6">
          <Button variant="" className="w-full">Cancelar</Button>
          <Button variant="solid" className="w-full">Enviar</Button>
        </div>
        {/* <div className="flex justify-center items-center gap-10">
          <button className="border py-2  rounded-md">Cancelar</button>
          <button className="border-none py-2 px-10 bg-[#EB421A] rounded-md">Enviar</button>
        </div> */}
      </section>
    </>
  );
};

export default Modal;
