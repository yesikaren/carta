import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (user == "" || password == "") {
      alert("Debe ingresar el usuario y contraseña");
      return;
    }
    console.log(user);
    console.log(password);
    if (user == "admin" && password == "1234") {
      console.log("ingresaste como admin");
      navigate("/home", { state: { role: "admin" } });       
    }else{
      console.log("usuario invalido")
    }
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="border bg-white p-10 rounded-xl shadow-xl w-11/12">
        <p className="font-semibold text-center text-2xl mb-8">
          Iniciar sesión.
        </p>
        <form action="">
          <label className="flex flex-col gap-4 mb-4">
            <span className="font-bold">Ingrese usuario</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-[#E5DDE1] "
              type="text"
              placeholder="jhondoe"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
          </label>
          <label className=" flex flex-col gap-2 mb-4">
            <span className="font-bold">Contraseña</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-[#E5DDE1]"
              type="password"
              placeholder="************"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </form>
        <button
          onClick={handleLogin}
          className="rounded-full px-5 py-4 font-bold text-white w-full bg-[#EB421A] hover:bg-[#FDB6A6] duration-300"
        >
          Ingresar
        </button>

      </div>
    </section>
  );
};

export default LoginPage;
