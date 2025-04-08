'use client';

import styles from './LoginModal.module.css';

const LoginModal = ({ onClose, onLoginSubmit }: { onClose: () => void, onLoginSubmit: () => void }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Iniciar sesión</h2>
        <p className={styles.text}>Ingresa tu nombre de usuario</p>

        <input className={styles.input} type="text" placeholder="Usuario" />

        <button className={styles.button} onClick={onLoginSubmit}>Siguiente</button>
        <button className={styles.close} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default LoginModal;

