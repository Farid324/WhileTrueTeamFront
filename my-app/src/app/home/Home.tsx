'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import FiltersBar from '../components/FiltersBar';
import Footer from '../components/Footer';
import LoginModal from './LoginModal';
import styles from './Home.module.css';

export default function Home() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.headerTop}>
        <Navbar onLoginClick={() => setMostrarModal(true)} />
      </header>

      <header className={styles.headerFilters}>
        <FiltersBar />
      </header>

      <main className={styles.body}>
        <div className={styles.scrollContent}>
          <p>Contenido principal del usuario (tarjetas, información, etc.).</p>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

      {mostrarModal && <LoginModal onClose={() => setMostrarModal(false)} />}
    </div>
  );
}