import React, { useEffect, useState } from "react";
import ImagenCeviche from "../assets/ceviche.png";
import limonadaChicharron from "../assets/limonada-chicharron.png";
import user from "../assets/user-negro.png";
import menu from "../assets/menu-negro.png";
import Modal from "../components/Modal";
import Card from "../components/Card";
import { Link, useLocation } from "react-router-dom";
import { products } from "../data/data";
import Button from "../components/Button";

const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const location = useLocation();
  const role = location.state?.role;
  console.log(role);
  const fetchProductos = async () => {
    try {
      const response = await fetch(
        "https://670f00b53e71518616564ce1.mockapi.io/yesi/productos"
      );
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);
  const handleAddProduct = () => {
    setModalData(null);
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setModalData(product);
    setShowModal(true);
  };
  const handleCancelModal = () => {
    setShowModal(false);
    setModalData(null);
  };
  const handleSaveModal = async (data) => {
    try {
      const response = await fetch(
        "https://670f00b53e71518616564ce1.mockapi.io/yesi/productos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const newProduct = await response.json();
        setProductos([...productos, newProduct]);
        console.log("Datos guardados:", newProduct);
      } else {
        console.error("Error al guardar el producto:", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud POST:", error);
    } finally {
      setShowModal(false);
      setModalData(null);
    }
  };
  return (
    <>
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
          <img
            src={limonadaChicharron}
            alt=""
            className=" rounded-r-3xl w-28"
          />
        </div>
        <h1 className="flex justify-center items-center font-medium text-2xl mt-4 tracking-[12px] ml-40">
          Restaurante Piscis
        </h1>
        {role == "admin" ? (
          <div className="px-10 mt-10">
            <Button className="w-full" onClick={handleAddProduct}>
              Agregar Producto
            </Button>
          </div>
        ) : (
          ""
        )}
        <div className="flex justify-center flex-wrap gap-10 mt-10">
          {productos.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              showActions={role == "admin"}
              onEdit={() => handleEditProduct(product)}
              onDelete={() => console.log("eliminando")}
            />
          ))}
        </div>
      </main>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-11/12 max-w-lg">
            <Modal
              onCancel={handleCancelModal}
              onSave={handleSaveModal}
              initialData={modalData}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
