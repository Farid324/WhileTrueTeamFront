import styles from './RegisterModal.module.css';
import { useState } from 'react';

export default function RegisterModal({ onClose }: { onClose: () => void }) {
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const form = e.target as HTMLFormElement;

    // Acceso seguro a los inputs
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const password = (form.elements.namedItem('password') as HTMLInputElement).value.trim();
    const confirmPassword = (form.elements.namedItem('confirmPassword') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const terms = (form.elements.namedItem('terms') as HTMLInputElement).checked;

    const birthDay = (form.elements.namedItem('birthDay') as HTMLSelectElement).value;
    const birthMonth = (form.elements.namedItem('birthMonth') as HTMLSelectElement).value;
    const birthYear = (form.elements.namedItem('birthYear') as HTMLSelectElement).value;

    // Validaciones frontend
    if (!email.includes('@')) {
      setError('El correo debe contener un @');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (!terms) {
      setError('Debes aceptar los términos y condiciones');
      return;
    }

    try {
      // Verificar correo duplicado
      const existing = await fetch(`http://localhost:3002/users?email=${email}`);
      const existingUsers = await existing.json();

      if (existingUsers.length > 0) {
        setError('Este correo ya está registrado');
        return;
      }

      const user = {
        name,
        email,
        password,
        phone,
        birthDate: `${birthDay}/${birthMonth}/${birthYear}`
      };

      const res = await fetch('http://localhost:3002/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });

      if (res.ok) {
        alert('¡Usuario registrado con éxito!');
        form.reset();
        onClose();
      } else {
        setError('Hubo un error al registrar. Intenta nuevamente.');
      }
    } catch (err) {
      setError('No se pudo conectar al servidor.');
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Registrarse</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
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
                <option value="">DD</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select name="birthMonth" required className={styles.select}>
                <option value="">MM</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select name="birthYear" required className={styles.select}>
                <option value="">AAAA</option>
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

          {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

          <button type="submit" className={styles.button}>Registrarse</button>
        </form>

        <button className={styles.close} onClick={onClose}>✕</button>
      </div>
    </div>
  );
}

