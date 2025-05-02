'use client';
import { useState } from 'react';
import { MdiPencil } from '@/app/components/Icons/Pencil';
import { updateUserField } from '@/libs/userService';
import UserIcon from '@/app/components/Icons/User';

interface Props {
  initialValue: string;
}

export default function NombreEditable({ initialValue }: Props) {
  const [valor, setValor] = useState(initialValue);
  const [editando, setEditando] = useState(false);
  const [valorTemporal, setValorTemporal] = useState(initialValue);
  const [feedback, setFeedback] = useState('');
  const [errorMensaje, setErrorMensaje] = useState('');

  // ✅ Manejar cambios en el input y validar en tiempo real
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoValor = e.target.value;

    // Validar longitud
    if (nuevoValor.length > 50) {
      setErrorMensaje('El nombre no puede superar los 50 caracteres.');
      return; // 🚫 No dejamos escribir más
    }

    setValorTemporal(nuevoValor); // ✅ Actualizamos el valor temporal

    // Mostrar error si es menor a 3 caracteres
    if (nuevoValor.length > 0 && nuevoValor.length < 3) {
      setErrorMensaje('El nombre debe tener al menos 3 caracteres.');
    } else {
      setErrorMensaje(''); // ✔ Limpiamos error si todo está bien
    }
  };

  const handleGuardar = async () => {
    // Validación antes de enviar
    if (valorTemporal.trim().length < 3) {
      setErrorMensaje('El nombre debe tener al menos 3 caracteres.');
      return;
    }

    try {
      await updateUserField('nombre_completo', valorTemporal.trim());
      setValor(valorTemporal.trim());
      setEditando(false);
      setFeedback('Nombre actualizado exitosamente.');
      setTimeout(() => setFeedback(''), 3000); // feedback por 3 segundos
    } catch (err) {
      setErrorMensaje('Hubo un error al guardar.');
    }
  };

  const handleCancelar = () => {
    setValorTemporal(valor); // restaurar original
    setEditando(false);
    setErrorMensaje('');
    setFeedback('');
  };

  return (
    <div className="relative mb-4 font-[var(--tamaña-bold)]">
      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>

      {/* Contenedor solo del input + íconos */}
      <div className="relative">
        <input
          type="text"
          value={editando ? valorTemporal : valor}
          onChange={handleInputChange}
          readOnly={!editando}
          placeholder={editando ? 'Ingresar nombre completo' : ''}
          className={`w-full border-2 rounded-md px-10 py-2 focus:outline-none focus:ring-1 shadow-[0_4px_10px_rgba(0,0,0,0.4)] ${
            editando
              ? 'bg-white border-[var(--azul-oscuro)] ring-[var(--azul-oscuro)]'
              : 'bg-gray-100 border-2 border-[var(--azul-oscuro)]'
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

      {/* Mensajes debajo del input */}
      {errorMensaje && (
        <p className="text-red-500 text-sm mt-1">{errorMensaje}</p>
      )}
      {feedback && (
        <p className="text-green-600 text-sm mt-1">{feedback}</p>
      )}

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
    </div>
  );
}
