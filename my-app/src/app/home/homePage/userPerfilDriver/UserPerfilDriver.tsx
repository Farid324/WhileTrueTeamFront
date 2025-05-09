"use client";
import React from "react";
import NavbarPerfilUsuario from "@/app/components/navbar/NavbarPerfilUsuario";
import PerfilIcon from "@/app/components/Icons/Perfil";
import PhoneIcon from "@/app/components/Icons/Phone";
import LicenciaConductorIcon from "@/app/components/Icons/LicenciaConductor";
import CategoriaIcon from "@/app/components/Icons/Categoria";
import CalendarIcon from "@/app/components/Icons/Calendar";

export default function UserPerfilDriver() {
  return (
    <>
      <NavbarPerfilUsuario />
      <div className="border-b border-gray-300" />

      <main className="min-h-screen bg-white px-16 py-12">
        {/* Título */}
        <h1 className="text-center text-2xl font-bold text-[#11295B] uppercase mb-10">
          INFORMACION PERSONAL DRIVER
        </h1>

        {/* Contenedor principal: Imagen + campos */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Imagen de perfil */}
          <div className="flex justify-start">
            <div className="w-36 h-36 bg-gray-100 rounded-3xl border border-black flex items-center justify-center shadow-sm">
              <PerfilIcon className="w-20 h-20 text-black" />
            </div>
          </div>

          {/* Campos lado derecho */}
          <div className="flex flex-col w-full md:w-2/3 gap-4">
            {/* Nombre completo + sexo */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex-1">
                <label className="text-sm font-semibold text-[#11295B]">Nombre Completo:</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Example"
                    className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] placeholder:text-gray-400 font-semibold text-[#11295B]"
                    readOnly
                  />
                  <PerfilIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
                </div>
              </div>
              <div className="w-1/4">
                <label className="text-sm font-semibold text-[#11295B]">Sexo</label>
                <input
                  type="text"
                  placeholder="M o F"
                  className="w-full text-center py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] placeholder:text-gray-400 font-semibold text-[#11295B]"
                  readOnly
                />
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold text-[#11295B]">Teléfono</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="77777777"
                  className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] placeholder:text-gray-400 font-semibold text-[#11295B]"
                  readOnly
                />
                <PhoneIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
              </div>
            </div>

            {/* Licencia de Conducir */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold text-[#11295B]">Licencia de Conducir</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="12345678"
                  className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] placeholder:text-gray-400 font-semibold text-[#11295B]"
                  readOnly
                />
                <LicenciaConductorIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
              </div>
            </div>

            {/* Categoría */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold text-[#11295B]">Categoría</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="A, B, C, P"
                  className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] placeholder:text-gray-400 font-semibold text-[#11295B]"
                  readOnly
                />
                <CategoriaIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
              </div>
            </div>

            {/* Fecha de Emisión + Fecha de Vencimiento */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="w-full">
                <label className="text-sm font-semibold text-[#11295B]">Fecha de Emisión</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] font-semibold text-[#11295B]"
                    readOnly
                  />
                  <CalendarIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
                </div>
              </div>

              <div className="w-full">
                <label className="text-sm font-semibold text-[#11295B]">Fecha de Vencimiento</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full pl-10 py-2 border-2 border-black rounded shadow-[0_4px_2px_-2px_rgba(0,0,0,0.6)] font-semibold text-[#11295B]"
                    readOnly
                  />
                  <CalendarIcon className="absolute left-2 top-2.5 w-5 h-5 text-[#11295B]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
