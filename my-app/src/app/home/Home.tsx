'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import FiltersBar from '../components/FiltersBar';
import Footer from '../components/Footer';
import LoginModal from './LoginModal';
import styles from './Home.module.css';
import RegisterModal from '../auth/RegisterModal';

export default function Home() {
  const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(null);

  return (
    <div className={styles.container}>
      <header className={styles.headerTop}>
        <Navbar 
          onLoginClick={() => setActiveModal('login')}
          onRegisterClick={() => setActiveModal('register')}
        />
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

      {activeModal === 'login' && (
        <LoginModal onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'register' && (
        <RegisterModal onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
}