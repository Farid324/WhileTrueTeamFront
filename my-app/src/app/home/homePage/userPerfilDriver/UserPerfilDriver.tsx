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
        {/* Título centrado */}
        <h1 className="text-center text-2xl font-bold text-blue-900 uppercase mb-10">
          INFORMACION PERSONAL DRIVER
        </h1>

        {/* Imagen alineada a la izquierda */}
        <div className="flex justify-start">
          <div className="w-36 h-36 bg-gray-200 rounded-2xl flex items-center justify-center">
            <PerfilIcon className="w-20 h-20 text-black" />
          </div>
        </div>
      </main>
    </>
  );
}
