'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';

import NavbarInicioSesion from '@/app/components/navbar/NavbarInicioSesion';
import FiltersBar from '@/app/components/filters/FiltersBar';
import Footer from '@/app/components/footer/FooterLogin';
import LoginModal from '@/app/components/auth/authInicioSesion/LoginModal';
import RegisterModal from '@/app/components/auth/authregistro/RegisterModal';
import VehicleDataModal from '@/app/components/auth/authRegistroHost/VehicleDataModal'; // Nuevo modal importado

export default function MainHome() {
  const [activeModal, setActiveModal] = useState<
    'login' | 'register' | 'vehicleData' | null
  >(null);

  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-principal)]">
      <header className="border-t border-b border-[rgba(215, 30, 30, 0.1)] shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
        <NavbarInicioSesion onBecomeHost={() => setActiveModal('vehicleData')} />
      </header>

      <header className="/* headerFilters */">
        <FiltersBar />
      </header>

      <main className="flex-grow p-8">
        <div className="/* scrollContent */">
          <p>Contenido principal del usuario (tarjetas, información, etc.).</p>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

      {activeModal === 'login' && (
        <LoginModal
          onClose={() => setActiveModal(null)}
          onRegisterClick={() => setActiveModal('register')}
          onPasswordRecoveryClick={() => console.log('Recuperar contraseña')}
        />
      )}

      {activeModal === 'register' && (
        <RegisterModal
          onClose={() => setActiveModal(null)}
          onLoginClick={() => setActiveModal('login')}
        />
      )}

      {activeModal === 'vehicleData' && (
        <VehicleDataModal
          onNext={(data) => {
            console.log('Datos del vehículo:', data);
            // Aquí puedes pasar al siguiente modal o guardar en contexto global
            setActiveModal(null); // Cambiar a 'paymentModal' más adelante
          }}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}

