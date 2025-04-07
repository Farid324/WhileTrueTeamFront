// === src/app/components/Navbar.tsx ===
import styles from './Navbar.module.css';

export default function Navbar({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>REDIBO</h1>
        <div className={styles.buttons}>
          <button>Botón1</button>
          <button>Botón1</button>
          <button>Botón1</button>
          <button>Botón1</button>
          <button>Botón1</button>
        </div>
        <div className={styles.auth}>
          <button className={styles.register}>Registrarse</button>
          <button className={styles.login} onClick={onLoginClick}>Iniciar Sesión</button>
        </div>
      </nav>
    </div>
  );
}