import React from 'react'

const Button = ({ children, onClick, type = "button", variant = "solid", className = "" }) => {
  const baseStyles = "px-6 py-2 font-semibold rounded focus:outline-none";
  
  const solidStyles = "text-white bg-[#EB421A] hover:bg-[#EB421A] hover:bg-[#EE5F3D] ";
  const outlineStyles = "text-white  border-2 border-[#A89497] hover:bg-blue-50 hover:text-[#66534F]";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variant === "solid" ? solidStyles : outlineStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;