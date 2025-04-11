'use client';
import Inputlabel from "../../components/input/Inputlabel";
import Link from 'next/link';
import NavbarPerfilUsuario from "@/app/components/navbar/NavbarPerfilUsuario";

export default function UserPerfilPage() {
  return (
    <>
      <NavbarPerfilUsuario />

      <main className="min-h-screen p-8 bg-white text-gray-900">
        <h1 className="text-3xl font-bold mb-4">Perfil del Usuario</h1>
        <p className="mb-6">Aquí puedes editar los datos de tu perfil.</p>

        <form method="PUT" className="space-y-6 max-w-2xl">
          <Inputlabel id="Nombre" label="Nombre Completo" type="Text" placeholder="Example"/>
          <Inputlabel id="Email" label="Email" type="Text" placeholder="Example@gmail.com" />
          <Inputlabel id="Contraseña" label="Contraseña" type="Text" placeholder="*************" />
          <Inputlabel id="Documento ID" label="Documendo de Identidad" type="Text" placeholder="Example" />
          <Inputlabel id="Licencia" label="Licencia de Conducir" type="Text" placeholder="Example" />

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"

            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => window.history.back()} //Función arrow
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>

        
      </main>
    </>
  );
}
