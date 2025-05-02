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

  // ✅ Validación en tiempo real
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoValor = e.target.value;

    // No dejar escribir más de 50 caracteres
    if (nuevoValor.length > 50) {
      setErrorMensaje('El nombre no puede superar los 50 caracteres.');
      return;
    }

    setValorTemporal(nuevoValor);

    // Validación mínimo 3 caracteres
    if (nuevoValor.length > 0 && nuevoValor.length < 3) {
      setErrorMensaje('El nombre debe tener al menos 3 caracteres.');
      return;
    }

    // Validación solo letras y espacios
    const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
    if (!soloLetrasRegex.test(nuevoValor)) {
      setErrorMensaje('El nombre solo puede contener letras y espacios.');
      return;
    }

    // Validar múltiples espacios consecutivos
    if (/\s{2,}/.test(nuevoValor)) {
      setErrorMensaje('El nombre no debe contener más de un espacio entre palabras.');
      return;
    }

    // Validar si empieza o termina con espacio
    if (/^\s|\s$/.test(nuevoValor)) {
      setErrorMensaje('El nombre no debe comenzar ni terminar con espacios.');
      return;
    }

    // Todo válido ✅
    setErrorMensaje('');
  };

  const handleGuardar = async () => {
    const nombreAValidar = valorTemporal.trim();

    // --- Replicar validaciones antes de enviar ---
    if (nombreAValidar.length < 3) {
      setErrorMensaje('El nombre debe tener al menos 3 caracteres.');
      return;
    }

    const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
    if (!soloLetrasRegex.test(nombreAValidar)) {
      setErrorMensaje('El nombre solo puede contener letras y espacios.');
      return;
    }

    if (/\s{2,}/.test(nombreAValidar)) {
      setErrorMensaje('El nombre no debe contener más de un espacio entre palabras.');
      return;
    }

    if (/^\s|\s$/.test(valorTemporal)) {
      setErrorMensaje('El nombre no debe comenzar ni terminar con espacios.');
      return;
    }

    // --- Si todo está bien ---
    try {
      await updateUserField('nombre_completo', nombreAValidar);
      setValor(nombreAValidar);
      setEditando(false);
      setFeedback('Nombre actualizado exitosamente.');
      setTimeout(() => setFeedback(''), 3000);
    } catch (err) {
      setErrorMensaje('Hubo un error al guardar.');
    }
  };

  const handleCancelar = () => {
    setValorTemporal(valor); // Restaurar original
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
      {feedback && !errorMensaje && (
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
