import styles from './RegisterModal.module.css';

export default function RegisterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Registrarse</h2>

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

          <div className={styles.passwordRow}>
            <div className={styles.halfInput}>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.halfInput}>
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.birthRow}>
            <label>Fecha de Nacimiento</label>
            <div className={styles.birthInputs}>
              <select name="birthDay" required className={styles.select}>
                <option value="" className={styles.placeholder}>DD</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select name="birthMonth" required className={styles.select}>
                <option value="" className={styles.placeholder}>MM</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select name="birthYear" required className={styles.select}>
                <option value="" className={styles.placeholder}>AAAA</option>
                {[...Array(100)].map((_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year}>{year}</option>;
                })}
              </select>
            </div>
          </div>

          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ingrese número de teléfono"
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