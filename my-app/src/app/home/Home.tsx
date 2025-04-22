'use client';
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import FiltersBar from '../components/filters/FiltersBar';
import Footer from '../components/footer/Footer';
import LoginModal from '../components/auth/authInicioSesion/LoginModal';
import styles from './Home.module.css';
import RegisterModal from '../components/auth/authregistro/RegisterModal';


export default function HomePage() {
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
        <LoginModal onClose={() => setActiveModal(null)} onRegisterClick={() =>setActiveModal('register')} />
      )}

      {activeModal === 'register' && (
        <RegisterModal onClose={() => setActiveModal(null)} onLoginClick={() => setActiveModal('login')}/>
      )}
    </div>
  );
}