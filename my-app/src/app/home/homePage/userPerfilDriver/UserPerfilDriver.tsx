"use client";
import React from "react";
import NavbarPerfilUsuario from "@/app/components/navbar/NavbarPerfilUsuario";
import PerfilIcon from "@/app/components/Icons/Perfil";

export default function UserPerfilDriver() {
  return (
    <>
      <NavbarPerfilUsuario />
      <div className="border-b border-gray-300" />

      <main className="min-h-screen bg-white px-16 py-12">
        {/* Título */}
        <h1 className="text-center text-2xl font-bold text-[#1E3A8A] uppercase mb-10">
          INFORMACION PERSONAL DRIVER
        </h1>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Imagen */}
          <div className="flex justify-start">
            <div className="w-36 h-36 bg-gray-100 rounded-3xl border border-black flex items-center justify-center shadow-sm">
              <PerfilIcon className="w-20 h-20 text-black" />
            </div>
          </div>

          {/* Campo Nombre Completo */}
          <div className="flex flex-col w-full md:w-2/3 gap-2">
            <label className="text-sm font-semibold text-gray-700">Nombre Completo:</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Example"
                className="w-full pl-10 py-2 border-2 border-gray-400 rounded shadow focus:outline-none placeholder:text-gray-400 font-semibold text-[#1E3A8A]"
                readOnly
              />
              <PerfilIcon className="absolute left-2 top-2.5 w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
