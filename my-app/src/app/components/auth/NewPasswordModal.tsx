'use client';

import { useState } from 'react';

const NewPasswordModal = ({
  code,
  onPasswordResetSuccess,
}: {
  code: string;
  onPasswordResetSuccess: () => void;
}) => {
  console.log('🧠 Código recibido en NewPasswordModal:', code);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleConfirm = async () => {
    setError('');

    if (!code || code.length !== 6) {
      setError('Código no válido. Intenta nuevamente.');
      return;
    }

    if (!newPassword || !confirmPassword) {
      setError('Por favor completa ambos campos.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    try {
      console.log('📤 Enviando al backend:', { code, newPassword });
      console.log('📦 Código recibido en NewPasswordModal:', code);

      const response = await fetch('http://localhost:3001/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al actualizar la contraseña');
      }

      alert('¡Contraseña actualizada correctamente!');
      onPasswordResetSuccess();

    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Error al cambiar la contraseña');
    }
  };

  return (
    <div className="fixed w-full h-full flex justify-center items-center z-[9999] left-0 top-0 bg-black/50 font-sans">
      <div className="w-[33rem] h-auto bg-white p-10 rounded-[35px] shadow-[0_0px_20px_rgba(0,0,0,0.72)]">
        <h1 className="text-center text-[#11295B] text-[1.44rem] font-medium leading-normal mb-4 drop-shadow-md">
          Recupera tu contraseña de <br />
          <span className="text-[#FCA311] font-black text-[2.074rem] drop-shadow-sm">
            REDIBO
          </span>
        </h1>

        <p className="text-[0.9rem] text-black mb-6 text-center">
          CÓDIGO DE VERIFICACIÓN CORRECTO. Por favor establece una nueva contraseña.
        </p>

        {/* -------- Nueva contraseña -------- */}
        <div className="relative border-2 border-solid border-[#11295B] flex flex-col mb-4 rounded-lg">
          <input
            className="w-full h-16 pl-12 pr-4 font-bold text-[#11295B] rounded-2xl outline-none placeholder:text-[#11295B]/50"
            type={showPassword ? 'text' : 'password'}
            placeholder="Nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#11295B]"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img
              src="https://www.svgrepo.com/download/526542/eye.svg"
              alt="Mostrar contraseña"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* -------- Confirmar contraseña -------- */}
        <div className="relative border-2 border-solid border-[#11295B] flex flex-col mb-2 rounded-lg">
          <input
            className="w-full h-16 pl-12 pr-4 font-bold text-[#11295B] rounded-2xl outline-none placeholder:text-[#11295B]/50"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#11295B]"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <img
              src="https://www.svgrepo.com/download/526542/eye.svg"
              alt="Mostrar contraseña"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* -------- Mensaje de error -------- */}
        {error && (
          <div className="text-[#F85959] text-sm font-semibold mb-4 text-center">
            {error}
          </div>
        )}

        <button
          className="w-full bg-[rgba(252,163,17,0.5)] hover:bg-[#FCA311] text-white mt-4 p-4 rounded-[40px] border-none transition-colors"
          onClick={handleConfirm}
        >
          Confirmar
        </button>

        <button
          className="w-full text-[#11295B] underline cursor-pointer my-4 hover:text-[#11295B] transition-colors"
          onClick={() => window.location.reload()}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default NewPasswordModal;
