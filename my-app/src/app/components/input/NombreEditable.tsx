'use client';
import { useState } from 'react';
import { MdiPencil } from '@/app/components/Icons/Pencil';
import { updateUserField } from '@/libs/userService'; // lo crearás luego
import UserIcon from '@/app/components/Icons/User';

interface Props {
  initialValue: string;
}

export default function NombreEditable({ initialValue }: Props) {
  const [valor, setValor] = useState(initialValue);
  const [editando, setEditando] = useState(false);
  const [valorTemporal, setValorTemporal] = useState(initialValue);
  const [feedback, setFeedback] = useState('');

  const handleGuardar = async () => {
    try {
      await updateUserField('nombre_completo', valorTemporal);
      setValor(valorTemporal);
      setEditando(false);
      setFeedback('Cambios guardados exitosamente.');
      setTimeout(() => setFeedback(''), 3000); // feedback por 3 segundos
    } catch (err) {
      setFeedback('Hubo un error al guardar.');
    }
  };

  const handleCancelar = () => {
    setValorTemporal(valor); // restaurar original
    setEditando(false);
  };

  return (
    <div className="relative mb-4 font-[var(--tamaña-bold)]">
      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
  
      {/* Contenedor solo del input + íconos */}
      <div className="relative">
        <input
          type="text"
          value={editando ? valorTemporal : valor}
          onChange={(e) => setValorTemporal(e.target.value)}
          readOnly={!editando}
          placeholder={editando ? "Ingresar nombre completo" : ""}
          className={`w-full border-2 rounded-md px-10 py-2 focus:outline-none focus:ring-1 shadow-[0_4px_10px_rgba(0,0,0,0.4)] ${
            editando ? 'bg-white border-[var(--azul-oscuro)] ring-[var(--azul-oscuro)]' : 'bg-gray-100 border-2 border-[var(--negro)]'
          }`}
        />
  
        {/* Ícono izquierdo */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#11295B]">
          <UserIcon />
        </div>
  
        {/* Ícono derecho (Pencil) */}
        {!editando && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
            onClick={() => setEditando(true)}
          >
            <MdiPencil />
          </div>
        )}
      </div>
  
      {/* Botones debajo del input */}
      {editando && (
        <div className="flex gap-2 mt-2 justify-end">
          <button
            onClick={handleGuardar}
            className="px-4 py-1 bg-[var(--naranja-46)] text-[var(--blanco)] rounded-lg hover:bg-[var(--naranja)] transition cursor-pointer shadow-[var(--sombra)]"
          >
            Guardar
          </button>
          <button
            onClick={handleCancelar}
            className="px-4 py-1 bg-gray-50 text-[var(--naranja)] rounded-lg hover:bg-[var(--blanco)] transition cursor-pointer shadow-[var(--sombra)]"
          >
            Cancelar
          </button>
        </div>
      )}
  
      {/* Mensaje feedback */}
      {feedback && (
        <p className="text-center mt-2 text-green-600 font-semibold">{feedback}</p>
      )}
    </div>
  );
}