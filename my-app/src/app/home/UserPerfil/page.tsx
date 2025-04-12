"use client";

import Inputlabel from "../../components/input/Inputlabel";
import NavbarPerfilUsuario from "@/app/components/navbar/NavbarPerfilUsuario";
import Button from "@/app/components/botons/botons";
import UserIcon from "@/app/components/Icons/User";
import MailIcon from "@/app/components/Icons/Email";
import CalendarIcon from "@/app/components/Icons/Calendar";
import PhoneIcon from "@/app/components/Icons/Phone";
import PerfilIcon from "@/app/components/Icons/Perfil"; 
import Padlock from "@/app/components/Icons/Candado";
/* import { IdIcon } from "@/app/components/Icons/Doc_Identidad"; */

export default function UserPerfilPage() {
  return (
    <>
      <NavbarPerfilUsuario />

      {/* Línea horizontal debajo del Navbar */}
      <div className="border-b border-gray-300"></div>

      <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-8">
        {/* Contenedor principal: Avatar a la izquierda, Formulario a la derecha */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl items-start gap-10">
          
          {/* Avatar con sombra */}
          <div className="flex justify-center md:justify-start w-full md:w-1/3">
            <div className="w-40 h-40 rounded-xl border-2 border-gray-400 bg-gray-100 flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
              <PerfilIcon className="w-32 h-32 text-black" />
            </div>
          </div>

          {/* Formulario */}
          <form method="PUT" className="space-y-6 w-full md:w-2/3">

            {/* Input Nombre */}
            <Inputlabel
              id="Nombre"
              label="Nombre Completo"
              type="text"
              placeholder="Example"
              icono={<UserIcon />}
              className="focus:ring-[#11295B] border-[#11295B]"
              readOnly={true}
            />

            {/* Input Email */}
            <Inputlabel
              id="Email"
              label="Email"
              type="text"
              placeholder="example@gmail.com"
              icono={<MailIcon />}
              className="focus:ring-[#11295B] border-[#11295B]"
              readOnly={true}
            />

            {/* Input Contraseña */}
            <Inputlabel
              id="Contraseña"
              label="Contraseña"
              type="password"
              placeholder="*************"
              icono={<Padlock />}
              className="focus:ring-[#11295B] border-[#11295B]"
              readOnly={true}
            />

            {/* Inputs de Fecha y Teléfono */}
            <div className="flex flex-row gap-x-4">
              {/* Fecha más ancha */}
              <div className="w-2/3">
                <Inputlabel
                  id="Fecha"
                  label="Fecha de Nacimiento"
                  type="date"
                  placeholder="DD/MM/YY"
                  icono={<CalendarIcon />}
                  className="focus:ring-[#11295B] border-[#11295B]"
                  readOnly={true}
                />
              </div>

              {/* Teléfono más corto */}
              <div className="w-1/3">
                <Inputlabel
                  id="Telefono"
                  label="Teléfono"
                  type="number"
                  placeholder="3842944"
                  icono={<PhoneIcon />}
                  className="focus:ring-[#11295B] border-[#11295B]"
                  readOnly={true}
                />
              </div>
            </div>

            {/* Botón cancelar */}
            <div className="flex justify-center gap-6 pt-4 w-full">
              <Button
                id="Cancelar Perfil"
                color="bg-white text-[#FCA311] border-2 border-gray-300 px-6 py-3 rounded-md hover:bg-[#FCA311] hover:text-white shadow-[0_4px_10px_rgba(0,0,0,0.4)] transition-all w-full md:w-52"
                type="button"
                Guardar="Cancelar"
                deshabilitado={false}
              />
            </div>

          </form>
        </div>
      </main>
    </>
  );
}
