'use client';

import styles from './NewPasswordModal.module.css';

const NewPasswordModal = ({ onClose, onPasswordRecoverySubmit }: { onClose: () => void, onPasswordRecoverySubmit: () => void }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Título */}
        <h1 className={styles.tituloPrincipal}>
          Recupera tu contraseña de <br />
          <span className={styles.tituloRedibo}>REDIBO</span>
        </h1>
        <p className={styles.texto}>CÓDIGO DE VERIFICACIÓN CORRECTO. Por favor establece una nueva contraseña.</p>

        {/* Input: Nueva contraseña */}
        <div className={styles.textofuera}>
          <h4 className={styles.textoinputfuera}>Contraseña</h4>
          <input
            className={styles.input}
            type="password"
            placeholder="Nueva contraseña"
          />
        </div>

        {/* Input: Confirmar contraseña */}
        <div className={styles.textofuera}>
          <h4 className={styles.textoinputfuera}>Confirmar contraseña</h4>
          <input
            className={styles.input}
            type="password"
            placeholder="Confirmar contraseña"
          />
        </div>

        {/* Botones */}
        <button className={styles.button} onClick={onPasswordRecoverySubmit}>
          Confirmar
        </button>
        <button className={styles.close} onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default NewPasswordModal;
