'use client';

import styles from './NewPasswordModal.module.css';

const NewPassrwordModal = ({ onClose, onPasswordRecoverySubmit }: { onClose: () => void, onPasswordRecoverySubmit: () => void }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Recupera tu contraseña de <span className={styles.brand}>REDIBO</span>
        </h2>
        <p className={styles.text}>CÓDIGO DE VERIFICACIÓN CORRECTO.Por favor estableca una nueva contraseña .</p>

        <input className={styles.input} type="nueva contraseña" placeholder="Nueva contraseña" />
        <input className={styles.input} type="confirmar contraseña" placeholder="Confirmar contraseña" />

        <button className={styles.button} onClick={onPasswordRecoverySubmit}>Siguiente</button>
        <button className={styles.close} onClick={onClose}>Atrás</button>
      </div>
    </div>
  );
};

export default NewPassrwordModal;
