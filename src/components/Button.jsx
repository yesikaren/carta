import React from 'react'

const Button = ({ children, onClick, type = "button", variant = "solid", className = "" }) => {
  const baseStyles = "px-6 py-2 font-semibold rounded focus:outline-none focus:ring-2";
  
  const solidStyles = "text-white bg-[#EB421A] hover:bg-[#EB421A]";
  const outlineStyles = "text-white  border-2 border-[#A89497] hover:bg-blue-50 focus:ring-blue-400";

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