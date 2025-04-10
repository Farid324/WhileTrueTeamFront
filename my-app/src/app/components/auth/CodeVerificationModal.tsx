'use client';   

import styles from './CodeVerificationModal.module.css';

const CodeVerificationModal = ({ onClose, onCodeVerificationSubmit }: { onClose: () => void, onCodeVerificationSubmit: () => void  }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Recupera tu contraseña de</h2>
        <h1 className={styles.Redibotitle}>Redibo</h1>
        <p className={styles.text}>Redibo envio un codigo de verificacion a tu correo. Ingresa el codigo por favor</p>

        <input className={styles.input} type="text" placeholder="___ ___ ___ ___ ___ ___" maxLength={6} />

        <button className={styles.button} onClick={onCodeVerificationSubmit}>Siguiente</button>
        <button className={styles.close} onClick={onClose}>Atras</button>
      </div>
    </div>
  );
};

export default CodeVerificationModal;

