'use client';
import { useState } from 'react';
import { MdiPencil } from '@/app/components/Icons/Pencil';
import { updateUserField } from '@/libs/userService';
import PhoneIcon from '@/app/components/Icons/Phone';

interface Props {
  initialValue: string;
  campoEnEdicion: string | null;
  setCampoEnEdicion: (campo: string | null) => void;
}

export default function TelefonoEditable({ initialValue, campoEnEdicion, setCampoEnEdicion }: Props) {
  const [valor, setValor] = useState(initialValue);
  const [editando, setEditando] = useState(false);
  const [valorTemporal, setValorTemporal] = useState(initialValue);
  const [feedback, setFeedback] = useState('');
  const [errorMensaje, setErrorMensaje] = useState('');

  const validarTelefono = (telefono: string) => {
    const soloNumeros = /^[0-9]*$/;

    if (!soloNumeros.test(telefono)) {
      setErrorMensaje('Formato inválido, ingrese solo números.');
      return false;
    }

    if (telefono.length !== 8) {
      setErrorMensaje('El teléfono debe ser de 8 dígitos.');
      return false;
    }

    // ✅ Nueva validación: debe comenzar con 6 o 7
    if (!/^[67]/.test(telefono)) {
      setErrorMensaje('El teléfono debe comenzar con 6 o 7.');
      return false;
    }

    // Si todo está bien
    setErrorMensaje('');
    return true;
  };

  const handleGuardar = async () => {
    if (!validarTelefono(valorTemporal)) {
      return;
    }

    try {
      await updateUserField('telefono', valorTemporal);
      setValor(valorTemporal);
      setEditando(false);
      setCampoEnEdicion(null); // 👈 Limpiamos el campo en edición
      setFeedback('Teléfono actualizado exitosamente.');
      setTimeout(() => setFeedback(''), 3000);
    } catch (err) {
      setFeedback('Hubo un error al guardar.');
    }
  };

  const handleCancelar = () => {
    setValorTemporal(valor);
    setErrorMensaje('');
    setEditando(false);
    setCampoEnEdicion(null); // 👈 Limpiamos el campo en edición
  };

  return (
    <div className="relative mb-4 font-[var(--tamaña-bold)]">
      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>

      <div className="relative">
        <input
          type="text"
          value={editando ? valorTemporal : valor}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length <= 8) {
              setValorTemporal(value);
              validarTelefono(value); // Valida mientras se escribe
            }
          }}
          readOnly={!editando}
          placeholder={editando ? "Ingresar número de teléfono" : ""}
          className={`w-full border-2 rounded-md px-10 py-2 focus:outline-none focus:ring-1 shadow-[0_4px_10px_rgba(0,0,0,0.4)] ${
            editando
              ? 'bg-white border-[var(--azul-oscuro)] ring-[var(--azul-oscuro)]'
              : 'bg-gray-100 border-2 border-[var(--azul-oscuro)]'
          }`}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#11295B]">
          <PhoneIcon />
        </div>
        {!editando && (
          <div
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer ${
              campoEnEdicion && campoEnEdicion !== 'telefono' ? 'opacity-50 pointer-events-none' : ''
            }`}
            onClick={() => {
              if (!campoEnEdicion) {
                setEditando(true);
                setCampoEnEdicion('telefono');
              }
            }}
          >
            <MdiPencil />
          </div>
        )}
      </div>

      {/* Mensajes de error o éxito */}
      {errorMensaje && (
        <p className="text-red-500 text-sm mt-1">{errorMensaje}</p>
      )}
      {!errorMensaje && feedback && (
        <p className="text-green-600 text-sm mt-1 font-semibold">{feedback}</p>
      )}

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
