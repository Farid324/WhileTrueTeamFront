"use client";

import { useEffect, useState } from "react"; // <-- Necesitas estado y efecto
import Inputlabel from "../../components/input/Inputlabel";
import NavbarPerfilUsuario from "@/app/components/navbar/NavbarPerfilUsuario";
import Button from "@/app/components/botons/botons";
import UserIcon from "@/app/components/Icons/User";
import MailIcon from "@/app/components/Icons/Email";
import CalendarIcon from "@/app/components/Icons/Calendar";
import PhoneIcon from "@/app/components/Icons/Phone";
import PerfilIcon from "@/app/components/Icons/Perfil";
import Padlock from "@/app/components/Icons/Candado";

export default function UserPerfilPage() {
  const [perfil, setPerfil] = useState({
    nombre_completo: "",
    email: "",
    contraseña: "****", // Siempre oculto o con placeholder
    fecha_nacimiento: "",
    telefono: "",
  });

  const id_usuario = 1; // Aquí pones el ID del usuario (puede ser dinámico si usas JWT)

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const res = await fetch(/api/profile/${id_usuario});
        const data = await res.json();
        if (res.ok) {
          setPerfil({
            nombre_completo: data.nombre_completo || "",
            email: data.email || "",
            contraseña: "****", // Nunca devuelvas la real
            fecha_nacimiento: data.fecha_nacimiento?.split("T")[0] || "", // Formato YYYY-MM-DD
            telefono: data.telefono || "",
          });
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error al obtener perfil:", error);
      }
    };

    fetchPerfil();
  }, []);

  return (
    <>
      <NavbarPerfilUsuario />
      <div className="border-b border-gray-300"></div>
      <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row w-full max-w-5xl items-start gap-10">
          <div className="flex justify-center md:justify-start w-full md:w-1/3">
            <div className="w-40 h-40 rounded-xl border-2 border-gray-400 bg-gray-100 flex items-center justify-center">
              <PerfilIcon className="w-32 h-32 text-black" />
            </div>
          </div>

          <form method="PUT" className="space-y-6 w-full md:w-2/3">
            <Inputlabel
              id="Nombre"
              label="Nombre Completo"
              type="Text"
              placeholder="Example"
              icono={<UserIcon />}
              value={perfil.nombre_completo} // <-- Aquí llenas el valor
              className="focus:ring-[#11295B] border-[#11295B]"
            />

            <Inputlabel
              id="Email"
              label="Email"
              type="Text"
              placeholder="example@gmail.com"
              icono={<MailIcon />}
              value={perfil.email}
              className="focus:ring-[#11295B] border-[#11295B]"
            />

            <Inputlabel
              id="Contraseña"
              label="Contraseña"
              type="password"
              placeholder="***"
              icono={<Padlock />}
              value={perfil.contraseña}
              className="focus:ring-[#11295B] border-[#11295B]"
            />

            <div className="flex flex-row gap-x-4">
              <div className="flex-grow">
                <Inputlabel
                  id="Fecha"
                  label="Fecha de Nacimiento"
                  type="date"
                  placeholder="DD/MM/YY"
                  icono={<CalendarIcon />}
                  value={perfil.fecha_nacimiento}
                  className="focus:ring-[#11295B] border-[#11295B]"
                />
              </div>

              <div className="w-1/2">
                <Inputlabel
                  id="Telefono"
                  label="Teléfono"
                  type="number"
                  placeholder="3842944"
                  icono={<PhoneIcon />}
                  value={perfil.telefono}
                  className="focus:ring-[#11295B] border-[#11295B]"
                />
              </div>
            </div>

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