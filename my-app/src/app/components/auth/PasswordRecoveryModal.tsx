'use client';

import { useState } from 'react';
import styles from './PasswordRecoveryModal.module.css';

const PasswordRecoveryModal = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/recover-password', { // <-- URL corregida
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }), // <-- enviamos el email
      });

      const data = await response.json();
      console.log(data.message);
      alert(data.message); // <-- puedes cambiar esto luego por un toast bonito
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>
          Recupera tu contraseña de <span className={styles.brand}>REDIBO</span>
        </h2>
        <p className={styles.text}>
          Ingresa el correo con el que te registraste en REDIBO.
        </p>

        <input
          className={styles.input}
          type="email"
          placeholder="usuario@dominio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // <-- capturamos lo que el usuario escribe
          required
        />

        <button className={styles.button} onClick={handlePasswordRecovery}>
          Siguiente
        </button>

        <button className={styles.close} onClick={onClose}>
          Atrás
        </button>
      </div>
    </div>
  );
};

export default PasswordRecoveryModal;
