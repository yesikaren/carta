import React from "react";
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
import { Link } from "react-router-dom";

const HomePage = () => {
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
      <h1 className="flex justify-center items-center font-medium text-2xl mt-4 tracking-[12px]">
        pisis
      </h1>
      <section className="border mt-16">
        <div className="flex justify-between items-center  gap-6 px-6 ">
          <div className="border bg-white rounded-md w-96 flex justify-center items-center">
            <img src={ImagenCeviche} alt="" className="h-40" />
          </div>
          <div className="border bg-white rounded-md w-96 flex justify-center items-center ">
            <img src={limonadaMenta} alt="" className="h-40" />
          </div>
        </div>
        <div className="flex  justify-between items-center  gap-6 px-6 pt-8">
          <div className="border bg-white rounded-md w-96 flex justify-center items-center">
            <img src={mariscos} alt="" className="h-40" />
          </div>
          <div className="border bg-white rounded-md w-96 flex justify-center items-center ">
            <img src={lornaFrita} alt="" className="h-40" />
          </div>
        </div>
      </section>
      <Modal />
      <div className="mt-4">
        <Card image={lornaFrita} />
      </div>
      <div className="mt-4">
        <Carrito />
      </div>
    </main>
  );
};

export default HomePage;
