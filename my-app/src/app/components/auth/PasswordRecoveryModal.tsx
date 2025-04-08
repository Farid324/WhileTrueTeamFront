'use client';

import styles from './PasswordRecoveryModal.module.css';

const PasswordRecoveryModal = ({ onClose, onPasswordRecoverySubmit }: { onClose: () => void, onPasswordRecoverySubmit: () => void }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Recuperación de contraseña</h2>
        <p className={styles.text}>Ingresa tu correo para recuperar la contraseña.</p>

        <input className={styles.input} type="email" placeholder="Correo electrónico" />

        <button className={styles.button} onClick={onPasswordRecoverySubmit}>Siguiente</button>
        <button className={styles.close} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default PasswordRecoveryModal;



