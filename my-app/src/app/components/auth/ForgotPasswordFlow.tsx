'use client';

import { useState } from 'react';
import PasswordRecoveryModal from './PasswordRecoveryModal';
import CodeVerificationModal from './CodeVerificationModal';
import NewPasswordModal from './NewPasswordModal';

export default function ForgotPasswordFlow() {
  const [step, setStep] = useState<'email' | 'code' | 'new-password'>('email');
  const [code, setCode] = useState(''); // 🔐 Guardamos el código verificado

  // Paso 1: Cuando se envía el correo correctamente
  const handleEmailSubmit = () => {
    setStep('code');
  };

  // Paso 2: Verificamos que el código sea válido antes de continuar
  const handleCodeVerified = (verifiedCode: string) => {
    console.log('✅ Código verificado recibido:', verifiedCode);
    if (!verifiedCode || verifiedCode.length !== 6) {
      console.error('❌ Código inválido recibido desde CodeVerificationModal');
      return;
    }

    setCode(verifiedCode);
    setStep('new-password');
  };

  // Volver al inicio del flujo
  const handleGoBack = () => {
    setStep('email');
    setCode('');
  };

  return (
    <>
      {step === 'email' && (
        <PasswordRecoveryModal
          onClose={() => {}}
          onPasswordRecoverySubmit={handleEmailSubmit}
        />
      )}
      {step === 'code' && (
        <CodeVerificationModal
          onClose={handleGoBack}
          onCodeVerificationSubmit={handleCodeVerified}
        />
      )}
      {step === 'new-password' && (
        <NewPasswordModal
          code={code}
          onPasswordResetSuccess={() => {
            alert('Contraseña actualizada correctamente.');
            setStep('email');
            setCode('');
          }}
        />
      )}
    </>
  );
}
