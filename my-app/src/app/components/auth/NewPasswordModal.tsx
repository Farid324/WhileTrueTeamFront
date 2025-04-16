'use client';

import { useState } from 'react';

const NewPasswordModal = ({
  onClose,
  onPasswordRecoverySubmit,
}: {
  onClose: () => void;
  onPasswordRecoverySubmit: (newPassword: string) => void;
}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleConfirm = () => {
    setError('');

    if (!newPassword || !confirmPassword) {
      setError('Por favor completa ambos campos.');
      return;
    }

    if (newPassword.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    onPasswordRecoverySubmit(newPassword);
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

        {/* Nueva contraseña */}
        <div className="border-2 border-solid border-[#11295B] flex flex-col mb-4 rounded-lg">
          <input
            className="w-full h-16 p-4 font-bold text-[#11295B] rounded-2xl outline-none placeholder:text-[#11295B]/50"
            type="password"
            placeholder="Nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        {/* Confirmar contraseña */}
        <div className="border-2 border-solid border-[#11295B] flex flex-col mb-2 rounded-lg">
          <input
            className="w-full h-16 p-4 font-bold text-[#11295B] rounded-2xl outline-none placeholder:text-[#11295B]/50"
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Error */}
        {error && (
          <div className="text-[#F85959] text-sm font-semibold mb-4 text-center">
            {error}
          </div>
        )}

        {/* Confirmar */}
        <button
          className="w-full bg-[rgba(252,163,17,0.5)] shadow-[0_0px_4px_rgba(0,0,0,0.25)] text-white cursor-pointer mt-4 p-4 rounded-[40px] border-none hover:bg-[#eb5905] transition-colors"
          onClick={handleConfirm}
        >
          Confirmar
        </button>

        {/* Cancelar */}
        <button
          className="w-full text-[#11295B] underline cursor-pointer my-4 hover:text-[#11295B] transition-colors"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default NewPasswordModal;