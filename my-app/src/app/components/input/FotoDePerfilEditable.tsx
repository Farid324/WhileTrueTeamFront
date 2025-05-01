'use client';
import { useState } from 'react';

export default function FotoDePerfilEditable() {
  const [feedback, setFeedback] = useState('');

  const handleCambiarFoto = () => {
    setFeedback('Funcionalidad para cambiar foto aún no implementada.');
    setTimeout(() => setFeedback(''), 3000);
  };

  const handleEliminarFoto = () => {
    setFeedback('Funcionalidad para eliminar foto aún no implementada.');
    setTimeout(() => setFeedback(''), 3000);
  };

  return (
    <div className="flex flex-col w-50 mt-4 gap-3">
      <button
        onClick={handleCambiarFoto}
        className="bg-[var(--naranja)] text-[var(--blanco)] px-4 py-2 rounded-lg shadow hover:bg-[var(--naranja)] transition cursor-pointer w-full"
      >
        Cambiar foto de perfil
      </button>

      <button
        onClick={handleEliminarFoto}
        className="bg-[var(--naranja)] text-[var(--blanco)] px-4 py-2 rounded-lg shadow hover:bg-[var(--rojo)] transition cursor-pointer w-full"
      >
        Eliminar foto de perfil
      </button>

      {feedback && (
        <p className="text-center mt-2 text-green-600 font-semibold">{feedback}</p>
      )}
    </div>
  );
}
