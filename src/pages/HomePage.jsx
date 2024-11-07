import React, { useState } from "react";
import ImagenCeviche from "../assets/ceviche.png";
import ImageChicharonPez from "../assets/chicharron-pescadoo.png";
import limonadaChicharron from "../assets/limonada-chicharron.png";
import limonadaMenta from "../assets/limonada-menta.png";
import lornaFrita from "../assets/lorna-frita.png";
import mariscos from "../assets/mariscos.png";
import user from "../assets/user-negro.png";
import menu from "../assets/menu-negro.png";
import Modal from "../components/Modal";
import Card from "../components/Card";
import Carrito from "../components/Carrito";
import { Link, useLocation } from "react-router-dom";
import { products } from "../data/data";

const HomePage = () => {
  const [productos,setProductos]=useState(products)
  const location = useLocation()
  const role = location.state?.role
  console.log(role)
  return (
    <main className="text-white">
      <div className="bg-[#A89497] relative ">
        <div className="flex justify-between items-center px-6 pt-6">
          <img src={menu} alt="" />
          <Link to={"/login"}>
            {" "}
            <img src={user} alt="" />
          </Link>
        </div>
        <img src={ImagenCeviche} alt="" className="" />
      </div>
      <div className=" absolute top-72 border  rounded-lg w-36 h-36 bg-black  flex justify-center items-center">
        <img src={limonadaChicharron} alt="" className=" rounded-r-3xl w-28" />
      </div>
      <h1 className="flex justify-center items-center font-medium text-2xl mt-4 tracking-[12px] ml-40">
        Restaurante Piscis
      </h1>


      <div className="flex justify-center flex-wrap gap-10 mt-10">
        {
          productos.map((product)=>(
            <Card key={product.id} image={product.image} name={product.name} description={product.description} price={product.price} />

          ))
        }

      </div>

    </main>
  );
};

export default HomePage;
