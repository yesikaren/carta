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
import {
  createProducto,
  deleteProducto,
  fetchProductos,
  updateProducto,
} from "../services/apiService";

const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const [userRole, setUserRole] = useState(location.state?.role || null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    setUserRole(null);
    setShowMenu(false);
  };

  const getProductos = async () => {
    try {
      const data = await fetchProductos();
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    getProductos();
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
      let updatedProduct;
      if (data.id && data.id !== "") {
        updatedProduct = await updateProducto(data.id, data);
      } else {
        updatedProduct = await createProducto(data);
      }
      getProductos();
      console.log("Datos guardados:", updatedProduct);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    } finally {
      setShowModal(false);
      setModalData(null);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProducto(id);
      getProductos();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };
  return (
    <>
      <main className="text-white relative">
        {showMenu && (
          <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 z-50">
            <button onClick={toggleMenu} className="mb-4 text-right w-full">
              X
            </button>
            {userRole === "admin" ? (
              <button onClick={handleLogout} className="w-full text-left">
                Cerrar sesión
              </button>
            ) : (
              <Link to="/login" className="w-full text-left">
                Iniciar sesión
              </Link>
            )}
          </div>
        )}
        <div className="bg-[#A89497] relative ">
          <div className="flex justify-between items-center px-6 pt-6">
            <img
              src={menu}
              alt="Menu"
              onClick={toggleMenu}
              className="cursor-pointer"
            />{" "}
            <Link to={"/login"}>
              {" "}
              <img src={user} alt="" />
            </Link>
          </div>
          <div className="flex justify-center items-center ">
            <img
              src={ImagenCeviche}
              alt="Imagen Ceviche"
              className="w-full max-h-[310px] object-contain mx-auto"
            />
          </div>
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
        {userRole == "admin" ? (
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
              showActions={userRole == "admin"}
              onEdit={() => handleEditProduct(product)}
              onDelete={() => handleDeleteProduct(product.id)}
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
