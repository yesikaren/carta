import React from "react";
import lornaFrita from "../assets/lorna-frita.png";
import trash from "../assets/trash.png"
import pencil from "../assets/pencil-verde.png"
const Card = ({ image, name, description, price,showActions=false, onEdit, onDelete }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden relative">
       {showActions && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={onEdit}
            className="bg-[#E8F8EA] text-white px-2 py-1 rounded hover:bg-[#84DA8A] focus:outline-none"
          >
            <img src={pencil} alt="" />
          </button>
          <button
            onClick={onDelete}
            className="bg-[#FFE6E6] text-white px-2 py-1 rounded hover:bg-[#FFACAC] focus:outline-none"
          >
            <img src={trash} alt="" />
            
          </button>
        </div>
      )}
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

        <p className="mt-2 text-gray-600 text-sm">{description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

