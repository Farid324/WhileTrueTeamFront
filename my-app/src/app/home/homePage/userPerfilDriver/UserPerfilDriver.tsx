"use client";

import React, { useState } from "react";
import NavbarPerfilUsuario from "@/app/components/navbar/NavbarPerfilUsuario";
import PerfilIcon from "@/app/components/Icons/Perfil";
import UserIcon from "@/app/components/Icons/User";
import PhoneIcon from "@/app/components/Icons/Phone";
import LicenciaConductorIcon from "@/app/components/Icons/LicenciaConductor";
import CategoriaIcon from "@/app/components/Icons/Categoria";
import CalendarIcon from "@/app/components/Icons/Calendar";
import { SolarGalleryOutline } from "@/app/components/Icons/Gallery";

export default function UserPerfilDriver() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <NavbarPerfilUsuario />

      <main className="min-h-screen bg-white text-[#11295B] px-10 py-10">
        <h1 className="text-center text-2xl font-bold mb-10">
          INFORMACION PERSONAL DRIVER
        </h1>

        <div className="flex flex-col md:flex-row justify-start gap-10">
          {/* Imagen de perfil */}
          <div className="bg-gray-100 border border-black rounded-2xl flex items-center justify-center w-[160px] h-[160px] ml-4">
            <PerfilIcon className="w-24 h-24 text-black" />
          </div>

          {/* Formulario */}
          <div className="flex flex-col gap-6 w-full max-w-3xl ml-10">
            {/* Nombre y sexo */}
            <div className="flex gap-4">
              <div className="w-full">
                <label className="text-sm font-semibold" htmlFor="nombre">
                  Nombre Completo:
                </label>
                <div className="relative">
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Example"
                    className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] text-[#11295B] font-semibold placeholder:text-gray-400"
                    readOnly
                  />
                  <UserIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
                </div>
              </div>
              <div className="w-48">
                <label className="text-sm font-semibold" htmlFor="sexo">
                  Sexo
                </label>
                <input
                  id="sexo"
                  type="text"
                  placeholder="M o F"
                  className="w-full py-2 px-4 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] text-[#11295B] font-semibold placeholder:text-gray-400"
                  readOnly
                />
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label className="text-sm font-semibold">Teléfono</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="77777777"
                  className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] text-[#11295B] font-semibold placeholder:text-gray-400"
                  readOnly
                />
                <PhoneIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
              </div>
            </div>

            {/* Licencia de Conducir + botón galería */}
            <div className="flex gap-2 items-end">
              <div className="w-full">
                <label className="text-sm font-semibold">
                  Licencia de Conducir
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Example"
                    className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] text-[#11295B] font-semibold placeholder:text-gray-400"
                    readOnly
                  />
                  <LicenciaConductorIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
                </div>
              </div>
              <button
                onClick={() => setShowGallery(true)}
                className="p-2 border-2 border-black rounded hover:bg-gray-100"
              >
                <SolarGalleryOutline className="w-6 h-6 text-[#11295B]" />
              </button>
            </div>

            {/* Categoría */}
            <div>
              <label className="text-sm font-semibold">Categoría</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="A,B,C,P"
                  className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] text-[#11295B] font-semibold placeholder:text-gray-400"
                  readOnly
                />
                <CategoriaIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
              </div>
            </div>

            {/* Fechas */}
            <div className="flex gap-4">
              <div className="w-full">
                <label className="text-sm font-semibold">Fecha de Emisión</label>
                <div className="relative">
                  <input
                    type="date"
                    placeholder="dd/mm/aaaa"
                    className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] text-[#11295B] font-semibold"
                    readOnly
                  />
                  <CalendarIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
                </div>
              </div>
              <div className="w-full">
                <label className="text-sm font-semibold">Fecha de Vencimiento</label>
                <div className="relative">
                  <input
                    type="date"
                    placeholder="dd/mm/aaaa"
                    className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] text-[#11295B] font-semibold"
                    readOnly
                  />
                  <CalendarIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Galería */}
        {showGallery && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-4xl">
              <h2 className="text-xl font-bold mb-4 text-[#11295B]">
                Galería de Licencia
              </h2>
              <div className="flex justify-around">
                <div className="w-60 h-60 bg-gray-200 flex items-center justify-center text-gray-400 text-4xl">
                  IMG
                </div>
                <div className="w-60 h-60 bg-gray-200 flex items-center justify-center text-gray-400 text-4xl">
                  IMG
                </div>
              </div>
              <div className="text-right mt-4">
                <button
                  className="px-4 py-2 bg-[#11295B] text-white rounded hover:bg-blue-900"
                  onClick={() => setShowGallery(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
