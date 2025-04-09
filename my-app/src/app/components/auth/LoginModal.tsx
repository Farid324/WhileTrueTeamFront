'use client';
import styles from './LoginModal.module.css';

export default function LoginModal({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Título */}
        <h1 className={styles.tituloPrincipal}>
          Bienvenido a <br />
          <span className={styles.tituloRedibo}>REDIBO</span> <br />
          <span className={styles.tituloAzul}>Iniciar sesión</span>
        </h1>

        {/* Input: Correo */}
        <div className={styles.textofuera}>
          <h4 className={styles.textoinputfuera}>Correo</h4>
          <input
            className={styles.input}
            type="text"
            placeholder="Ingrese correo electrónico"
          />
        </div>

        {/* Input: Contraseña */}
        <div className={styles.textofuera}>
          <h4 className={styles.textoinputfuera}>Contraseña</h4>
          <input
            className={styles.input}
            type="password"
            placeholder="Ingrese contraseña"
          />
        </div>

        {/* Botón: Iniciar sesión */}
        <button className={styles.button}>Iniciar sesión</button>

        {/* Botón: Cerrar */}
        <button className={styles.close} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
