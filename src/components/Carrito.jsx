import React from 'react'
import Header from './Header'
import flechaDerecha from "../assets/arrow-from-right-regular-blanco.png";
const Carrito = () => {
  return (
    <>
    <Header/>
    <button className='border py-2 px-4'>Atras
      <img src={flechaDerecha} alt="" />
    </button>
    </>
  )
}

export default Carrito