import React from "react";
import lornaFrita from "../assets/lorna-frita.png";
const Card = ({ image, name, description, price }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Imagen */}
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      
      {/* Contenido de la tarjeta */}
      <div className="p-4">
        {/* Nombre */}
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

        {/* Descripción */}
        <p className="mt-2 text-gray-600 text-sm">{description}</p>

        {/* Precio */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

