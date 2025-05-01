'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';

import NavbarInicioSesion from '@/app/components/navbar/NavbarInicioSesion';
import FiltersBar from '@/app/components/filters/FiltersBar';
import Footer from '@/app/components/footer/FooterLogin';
import LoginModal from '@/app/components/auth/authInicioSesion/LoginModal';
import RegisterModal from '@/app/components/auth/authregistro/RegisterModal';
import VehicleDataModal from '@/app/components/auth/authRegistroHost/VehicleDataModal';
import PaymentModal from '@/app/components/auth/authRegistroHost/PaymentModal';

import CompleteProfileModal from '@/app/components/auth/authRegistroHost/CompleteProfileModal';

export default function MainHome() {
  // Estado de los modales
  const [activeModal, setActiveModal] = useState<
    'login' | 'register' | 'vehicleData' | 'paymentData' | 'completeProfile' | null
  >(null);
  
  // Estados para mantener los datos entre modales
  const [vehicleData, setVehicleData] = useState<{
    placa: string;
    soat: string;
    imagenes: File[];
  } | null>(null);
  
  const [paymentData, setPaymentData] = useState<{
    cardNumber: string;
    expiration: string;
    cvv: string;
    cardHolder: string;
  } | null>(null);
  
  // Estado para notificaciones toast
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  
  const router = useRouter();
  const user = useUser();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
    }
  }, [user, router]);
  
  // Manejador para mostrar mensajes toast
  const displayToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  
  // Manejadores para cada paso del flujo de registro de host
  const handleVehicleDataSubmit = (data: { placa: string; soat: string; imagenes: File[] }) => {
    setVehicleData(data);
    setActiveModal('paymentData');
  };
  
  const handlePaymentDataSubmit = (data: { cardNumber: string; expiration: string; cvv: string; cardHolder: string }) => {
    setPaymentData(data);
    setActiveModal('completeProfile');
  };
  
  const handleRegistrationComplete = () => {
    setActiveModal(null);
    displayToast('¡Tu registro como host fue completado exitosamente!');
    // Aquí podrías realizar alguna acción adicional después del registro exitoso
  };

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
      
      {/* Modales */}
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
          onNext={handleVehicleDataSubmit}
          onClose={() => setActiveModal(null)}
        />
      )}
      
      {activeModal === 'paymentData' && vehicleData && (
        <PaymentModal
          onNext={handlePaymentDataSubmit}
          onClose={() => setActiveModal(null)}
          onBack={() => setActiveModal('vehicleData')}
        />
      )}
      
      {activeModal === 'completeProfile' && vehicleData && paymentData && (
        <CompleteProfileModal
          vehicleData={vehicleData}
          paymentData={paymentData}
          onComplete={handleRegistrationComplete}
          onClose={() => setActiveModal('paymentData')}
        />
      )}
      
      {/* Toast de notificación */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-[9999]">
          {toastMessage}
        </div>
      )}
    </div>
  );
}