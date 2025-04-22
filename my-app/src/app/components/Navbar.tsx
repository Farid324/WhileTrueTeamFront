import styles from './Navbar.module.css';

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export default function Navbar({ onLoginClick, onRegisterClick }: NavbarProps) {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>REDIBO</h1>
        <div className={styles.buttons}>
          <button>Botón1</button>
          <button>Botón1</button>
          <button>Botón1</button>
          <button>Botón1</button>
        </div>
        <div className={styles.auth}>
          <button className={styles.register} onClick={onRegisterClick}>Registrarse</button>
          <button className={styles.login} onClick={onLoginClick}>Iniciar Sesión</button>
        </div>
      </nav>
    </div>
  );
}