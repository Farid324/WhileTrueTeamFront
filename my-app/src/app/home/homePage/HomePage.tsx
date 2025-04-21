'use client';
import { useState } from 'react';
import NavbarInicioSesion from '@/app/components/navbar/NavbarInicioSesion';
import FiltersBar from '@/app/components/filters/FiltersBar';
import Footer from '@/app/components/footer/Footer';
import LoginModal from '@/app/components/auth/authInicioSesion/LoginModal';
import RegisterModal from '@/app/components/auth/authregistro/RegisterModal';

export default function MainHome() {
  const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-principal)]">
      <header className="px-8 py-4 bg-[var(--blanco)]">
        <NavbarInicioSesion />
      </header>

      <header className="px-8 py-4 bg-[var(--gris-claro)] border-b border-[#ccc]">
        <FiltersBar />
      </header>

      <main className="flex-grow p-8">
        <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
          <p>Contenido principal del usuario (tarjetas, información, etc.).</p>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

      {activeModal === 'login' && (
        <LoginModal onClose={() => setActiveModal(null)} onRegisterClick={() => setActiveModal('register')} />
      )}

      {activeModal === 'register' && (
        <RegisterModal onClose={() => setActiveModal(null)} onLoginClick={() => setActiveModal('login')} />
      )}
    </div>
  );
}
