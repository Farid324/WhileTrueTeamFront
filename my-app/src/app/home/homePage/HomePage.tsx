'use client';
import { useState } from 'react';
import NavbarInicioSesion from '@/app/components/navbar/NavbarInicioSesion';
import FiltersBar from '@/app/components/filters/FiltersBar';
import Footer from '@/app/components/footer/Footer';
import LoginModal from '@/app/components/auth/authInicioSesion/LoginModal';
import RegisterModal from '@/app/components/auth/authregistro/RegisterModal';
import styles from '@/app/home/homePage/HomePage.module.css';


export default function MainHome() {
  const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(null);

  return (
    <div className={styles.container}>
      <header className={styles.headerTop}>
        <NavbarInicioSesion/>
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