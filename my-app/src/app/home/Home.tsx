'use client';

import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import FiltersBar from '../components/filters/FiltersBar';
import Footer from '../components/footer/Footer';
import LoginModal from '../components/auth/LoginModal';
import PasswordRecoveryModal from '../components/auth/PasswordRecoveryModal';
import CodeVerificationModal from '../components/auth/CodeVerificationModal';
import NewPasswordModal from '../components/auth/NewPasswordModal';
import styles from './Home.module.css';

export default function Home() {
  // Controla qué modal se debe mostrar
  const [modalState, setModalState] = useState<'login' | 'passwordRecovery' | 'codeVerification' | 'newPassword' | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false); // Para el mensaje de usuario bloqueado


  const handleLoginSubmit = () => {
    setModalState('passwordRecovery');
  };

  const handlePasswordRecoverySubmit = () => {
    setModalState('codeVerification');
  };

  const handleCodeVerificationSubmit = () => {
    setModalState('newPassword');
  };

  const handleClose = () => {
    setModalState('login'); // Si se presiona "Atrás" en cualquier modal, se regresa al Login
  };

  const handleBackToPasswordRecovery = () => {
    setModalState('passwordRecovery'); // Regresa al PasswordRecoveryModal desde el CodeVerificationModal
  };

  return (
    
    <div className={styles.container}>
      <header className={styles.headerTop}>
        <Navbar onLoginClick={() => setModalState('login')} />
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

      {/* Mostrar los modales según el estado */}
      {modalState === 'login' && (
        <LoginModal onClose={handleClose} onLoginSubmit={handleLoginSubmit} />
      )}
      {modalState === 'passwordRecovery' && (
        <PasswordRecoveryModal
          onClose={handleClose}
          onPasswordRecoverySubmit={handlePasswordRecoverySubmit}
        />
      )}
      {modalState === 'codeVerification' && (
        <CodeVerificationModal
        onClose={handleBackToPasswordRecovery}
        onCodeVerificationSubmit={handleCodeVerificationSubmit}
        onBlocked={() => {
          setModalState('login')
          setShowToast2(true); // muestra el pop-up

            // Ocultar el toast automáticamente después de 3 segundos
            setTimeout(() => setShowToast2(false), 10000);
        }} // ✅ Redirige al login si el backend dice "bloqueado"
      />
      )}
      {modalState === 'newPassword' && (
        <NewPasswordModal
          onClose={handleClose} // Redirige al Login al cancelar o finalizar
          code="exampleCode" // Replace "exampleCode" with the actual code value
          onNewPasswordSubmit={() => {
            setModalState('login') // Redirige al Login al finalizar
            setShowToast(true); // muestra el pop-up

            // Ocultar el toast automáticamente después de 3 segundos
            setTimeout(() => setShowToast(false), 10000);
          }} 
          
        />
      )}
      {showToast && (
      <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-[9999]">
        ¡Contraseña actualizada correctamente!
      </div>
    )}
    {showToast2 && (
      <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-[9999]">
        Usuario bloqueado temporalmente. Intenta nuevamente más tarde.
      </div>
    )}
    </div>
  );
}
