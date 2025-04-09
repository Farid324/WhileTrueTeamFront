'use client';

import styles from './PasswordRecoveryModal.module.css';

const PasswordRecoveryModal = ({ onClose, onPasswordRecoverySubmit }: { onClose: () => void, onPasswordRecoverySubmit: () => void }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Recupera tu contraseña de <span className={styles.brand}>REDIBO</span>
        </h2>
        <p className={styles.text}>Ingresa el correo con el que te registraste en REDIBO.</p>

        <input className={styles.input} type="email" placeholder="usuario@dominio.com" />

        <button className={styles.button} onClick={onPasswordRecoverySubmit}>Siguiente</button>
        <button className={styles.close} onClick={onClose}>Atrás</button>
      </div>
    </div>
  );
};

export default PasswordRecoveryModal;



