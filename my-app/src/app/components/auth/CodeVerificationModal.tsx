'use client';

import { useState, useRef } from 'react';

const CodeVerificationModal = ({
  onClose,
  onCodeVerificationSubmit,
}: {
  onClose: () => void;
  onCodeVerificationSubmit: () => void;
}) => {
  const [code, setCode] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(value);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="fixed w-full h-full flex justify-center items-center z-[9999] left-0 top-0 bg-black/50 font-sans">
      <div className="w-[33rem] h-auto bg-white p-10 rounded-[35px] shadow-[0_0px_20px_rgba(0,0,0,0.72)]">
        
        {/* Título */}
        <h1 className="text-center text-[#11295B] text-[1.44rem] font-medium leading-normal mb-4 drop-shadow-md">
          Recupera tu contraseña de <br />
          <span className="text-[#FCA311] font-black text-[2.074rem] drop-shadow-sm">
            REDIBO
          </span>
        </h1>

        <p className="text-center text-base text-black mb-6">
          Redibo envió un código de verificación a tu correo. Ingresa el código por favor
        </p>

        <h5 className="text-base text-[#023197] mb-4 text-left">
          Código de verificación
        </h5>

        {/* Input oculto para el código */}
        <div className="relative w-full max-w-[450px] cursor-text bg-white mx-0 my-4 pb-6 p-3 rounded-lg border-2 border-solid border-black" onClick={handleFocus}>
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            className="absolute opacity-0 pointer-events-auto w-full h-full z-[1]"
            value={code}
            onChange={handleChange}
          />
          <div className="flex gap-2.5 justify-start z-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="flex flex-col items-center w-[30px]" key={i}>
                <span className="text-[22px] font-bold h-6 text-black">
                  {code[i] || ' '}
                </span>
                <span className="text-[22px] text-[#aaa] leading-[0]">
                  __
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Botón siguiente */}
        <button
          className="w-full bg-[rgba(252,163,17,0.5)] hover:bg-[#FCA311] shadow-[0_0px_4px_rgba(0,0,0,0.25)] text-white cursor-pointer mt-4 p-4 rounded-[40px] border-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onCodeVerificationSubmit}
          disabled={code.length !== 6} // Solo habilita cuando tiene 6 dígitos
        >
          Siguiente
        </button>

        {/* Botón atrás */}
        <button
          className="text-[#11295B] underline cursor-pointer w-full transition-colors duration-200 my-4 border-none bg-none"
          onClick={onClose}
        >
          Atrás
        </button>
      </div>
    </div>
  );
};

export default CodeVerificationModal;
