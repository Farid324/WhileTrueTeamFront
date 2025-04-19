'use client';

import { useState } from 'react';

const NewPasswordModal = ({
  onPasswordRecoverySubmit,  // Asegúrate de pasar esta función al componente
}: {
  onPasswordRecoverySubmit: (newPassword: string) => void;
}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validatePassword = (password: string) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,25}$/;  

    if (!passwordPattern.test(password)) {
      setError('La contraseña debe tener entre 8 y 25 caracteres, al menos una letra mayúscula y un número.');
      return false;
    }
    setError('');  // Si pasa la validación, se limpia el error
    return true;
  };

  const handleConfirm = () => {
    setError('');

    if (!newPassword || !confirmPassword) {
      setError('Por favor completa ambos campos.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (!validatePassword(newPassword)) {
      return;
    }

    setSuccessMessage('Contraseña actualizada con éxito!');
    setTimeout(() => {
      setSuccessMessage(''); // Ocultar el pop-up después de 2 segundos
    }, 2000);


    onPasswordRecoverySubmit(newPassword);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setNewPassword(password);
    validatePassword(password);;
  };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
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

{/*//-------------------------------------------*/}

        {/* Nueva contraseña */}
        <div className="relative border-2 border-solid border-[#11295B] flex flex-col mb-4 rounded-lg">
          <input
            className="w-full h-16 pl-12 pr-4 font-bold text-[#11295B] rounded-2xl outline-none placeholder:text-[#11295B]/50"
            type={showPassword ? 'text' : 'password'}
            placeholder="Nueva contraseña"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />

          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className ="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#11295B]"
          >
            <path 
              fill-rule="evenodd" 
              d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" 
              clip-rule="evenodd" 
            />
          </svg>
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#11295B]"
            onClick={() => setShowPassword(!showPassword)}  // Cambia el estado de visibilidad
            disabled={!setNewPassword}
          >
              <img
                src="https://www.svgrepo.com/download/526542/eye.svg"
                alt="Mostrar contraseña"
                className="w-6 h-6"
              />
          </button>
        </div>
        

        {/* Confirmar contraseña */}
        <div className="relative border-2 border-solid border-[#11295B] flex flex-col mb-2 rounded-lg">
          <input
            className="w-full h-16 pl-12 pr-4 font-bold text-[#11295B] rounded-2xl outline-none placeholder:text-[#11295B]/50"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className ="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#11295B]"
          >
            <path 
              fill-rule="evenodd" 
              d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" 
              clip-rule="evenodd" />
          </svg>

          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#11295B]"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}  // Cambia el estado de visibilidad
            disabled={!confirmPassword}
          >
            <img
              src="https://www.svgrepo.com/download/526542/eye.svg"
              alt="Mostrar contraseña"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="text-[#F85959] text-sm font-semibold mb-4 text-center">
            {error}
          </div>
        )}

        {/* Confirmar */}
        <button
          className="w-full bg-[rgba(252,163,17,0.5)] hover:bg-[#FCA311] shadow-[0_0px_4px_rgba(0,0,0,0.25)] text-white cursor-pointer mt-4 p-4 rounded-[40px] border-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleConfirm}
        >
          Confirmar
        </button>

        {/* Cancelar */}
        <button
          className="w-full text-[#11295B] underline cursor-pointer my-4 hover:text-[#11295B] transition-colors"
          //onClick={onClose}
        >
          Cancelar
        </button>
      </div>
      {successMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default NewPasswordModal;
