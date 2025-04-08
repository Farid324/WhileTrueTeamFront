'use client';

import styles from './CodeVerificationModal.module.css';

const CodeVerificationModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Verificación de código</h2>
        <p className={styles.text}>Ingresa el código de verificación que se ha enviado a tu correo.</p>

        <input className={styles.input} type="text" placeholder="Código de verificación" maxLength={6} />

        <button className={styles.button}>Verificar</button>
        <button className={styles.close} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default CodeVerificationModal;
