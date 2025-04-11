'use client';

import { useState, useRef } from 'react';
import styles from './CodeVerificationModal.module.css';

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
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1 className={styles.tituloPrincipal}>
          Recupera tu contraseña de <br />
          <span className={styles.tituloRedibo}>REDIBO</span>
        </h1>
        <p className={styles.text2}>
          Redibo envió un código de verificación a tu correo. Ingresa el código por favor
        </p>
        <h5 className={styles.text}>Código de verificación</h5>
        {/* Código de entrada con subrayado */}
        <div className={styles.codeWrapper} onClick={handleFocus}>
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            className={styles.hiddenInput}
            value={code}
            onChange={handleChange}
          />
          <div className={styles.fakeDigits}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div className={styles.digitBox} key={i}>
                <span className={styles.digit}>{code[i] || ' '}</span>
                <span className={styles.underscore}>__</span>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.button} onClick={onCodeVerificationSubmit} disabled={code.length !== 6}>
          Siguiente
        </button>
        <button className={styles.close} onClick={onClose}>
          Atrás
        </button>
      </div>
    </div>
  );
};

export default CodeVerificationModal;
