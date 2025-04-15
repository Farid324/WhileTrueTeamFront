'use client';

import { useState } from 'react';

const PasswordRecoveryModal = ({
  onClose,
  onPasswordRecoverySubmit,
}: {
  onClose: () => void;
  onPasswordRecoverySubmit: () => void;
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handlePasswordRecovery = async () => {
    setError('');

    if (!email) {
      setError('El correo es obligatorio');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/recover-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error desconocido');
      }

      console.log(data.message);

      // 🔥 Cambio de modal
      onPasswordRecoverySubmit(); 

    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message || 'Error al recuperar la contraseña');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 font-sans">
      <div className="bg-white p-10 rounded-[35px] w-[33rem] shadow-[0_4px_12px_rgba(0,0,0,0.72)]">
        
        <h2 className="text-center text-[#11295B] text-[1.44rem] font-medium leading-normal mb-4 drop-shadow-md">
          Recupera tu contraseña de <br />
          <span className="text-[#FCA311] font-black text-[2.074rem] drop-shadow-sm">
            REDIBO
          </span>
        </h2>

        <p className="text-center text-black text-sm mb-6">
          Ingresa el correo con el que te registraste en REDIBO.
        </p>

        <input
          className="w-full border border-black p-4 rounded-lg text-[0.95rem] font-bold text-[#11295B] placeholder:text-[#11295B]/50 focus:outline-none focus:ring-2 focus:ring-[#FCA311] font-sans"
          type="email"
          placeholder="usuario@dominio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={254}
        />

        {error && (
          <div className="text-[#F85959] text-sm mt-2 font-semibold">
            {error}
          </div>
        )}

        <button
          className="w-full mt-6 bg-[rgba(252,163,17,0.5)] hover:bg-[#eb5905] text-white font-semibold py-3 px-4 rounded-full shadow-md transition-colors"
          onClick={handlePasswordRecovery}
        >
          Siguiente
        </button>

        <button
          className="w-full mt-4 text-black/30 underline hover:text-[#11295B] font-medium transition-colors"
          onClick={onClose}
        >
          Atrás
        </button>
      </div>
    </div>
  );
};

export default PasswordRecoveryModal;

