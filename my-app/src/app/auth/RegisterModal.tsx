import styles from './RegisterModal.module.css';

export default function RegisterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Registrarse</h2>

        <form action="/api/register" method="POST" className={styles.form}>
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre completo"
            className={styles.input}
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            className={styles.input}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            className={styles.input}
            required
          />

          <div className={styles.terms}>
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">He leído y acepto los Términos y condiciones</label>
          </div>

          <button type="submit" className={styles.button}>Registrarse</button>
        </form>

        <button className={styles.close} onClick={onClose}>✕</button>
      </div>
    </div>
  );
}
