import styles from './RegisterModal.module.css';

export default function RegisterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Registrarse</h2>
        
        {/* Botón de registro con Google */}
        <button className={styles.socialButton}>
          <span className={styles.googleIcon}>G</span>
          Registrarse con Google
        </button>

        <div className={styles.separator}>o</div>

        <div className={styles.terms}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">He leído y acepto los Términos y condiciones</label>
        </div>

        <button className={styles.registerButton}>Registrarse</button>

        <div className={styles.loginPrompt}>
          ¿Ya tienes una cuenta? <button className={styles.loginLink}>Iniciar sesión</button>
        </div>

        <button className={styles.close} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}