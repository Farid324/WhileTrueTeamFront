'use client';

import { useState } from 'react';
import styles from './Home.module.css';
import LoginModal from './LoginModal';

export default function Home() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a la página Home 🏠</h1>

      <button className={styles.loginBtn} onClick={() => setMostrarModal(true)}>
        Iniciar sesión
      </button>

      {mostrarModal && <LoginModal onClose={() => setMostrarModal(false)} />}
    </div>
  );
}