import React from "react";
const LoginPage = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="border bg-white p-10 rounded-xl shadow-xl">
        <p className="font-semibold text-center text-2xl mb-8">
          Iniciar sesión a pisis.
        </p>
        <form action="">
          <label className="flex flex-col gap-4 mb-4">
            <span className="font-bold">ingrese correo</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-[#E5DDE1] "
              type="text"
              placeholder="jhondoe@gmail.com"
            />
          </label>
          <label className=" flex flex-col gap-2 mb-4">
            <span className="font-bold">Contraseña</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-[#E5DDE1]"
              type="password"
              placeholder="************"
            />
          </label>
        </form>
        <button className="rounded-full px-5 py-4 font-bold text-white w-full bg-[#EB421A] hover:bg-[#FDB6A6] duration-300">Continuar</button>
        <p className="text-[#A89497] mt-5">¿todavia no tienes una cuenta? <samp className="text-[#C7B8BC] hover:text-[#FDB6A6] duration-300 cursor-pointer">Registrate</samp></p>
      </div>
    </section>
  );
};

export default LoginPage;
