"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface Props {
  onComplete: () => void;
  onClose: () => void;
  vehicleData: {
    placa: string;
    soat: string;
    imagenes: File[];
  };
  paymentData: {
    cardNumber: string;
    expiration: string;
    cvv: string;
    cardHolder: string;
  };
}

const CompleteProfileModal: React.FC<Props> = ({ 
  onComplete, 
  onClose, 
  vehicleData, 
  paymentData 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleComplete = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simular envío de datos al backend (reemplazar con tu lógica real)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Éxito
      setSuccess(true);
      
      // Cerrar después de mostrar éxito
      setTimeout(() => {
        onComplete();
      }, 2000);
      
    } catch (err) {
      setError("Error al completar el registro. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      onClose();
    }
  };

  // Mostrar solo los últimos 4 dígitos de la tarjeta
  const maskedCardNumber = paymentData.cardNumber.replace(/\s/g, "").replace(/\d(?=\d{4})/g, "•");

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center modal-overlay bg-black/40"
      onClick={handleOverlayClick}
    >
      <div className="bg-white text-[#11295B] p-10 rounded-3xl shadow-2xl max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-2xl text-[#11295B]"
          disabled={isLoading}
        >
          <X />
        </button>

        <h2 className="text-lg font-semibold text-center text-[#11295B]">Bienvenido a</h2>
        <h1 className="text-3xl font-bold text-center text-[#FCA311] drop-shadow-sm mb-2">REDIBO</h1>
        <h3 className="text-xl text-center font-semibold text-[#11295B] mb-1">CONFIRMAR REGISTRO DE HOST</h3>
        <p className="text-center text-sm text-gray-600 mb-6">Revisa tus datos antes de finalizar</p>

        {success ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">¡Registro completado!</h3>
            <p className="text-gray-600">Tu cuenta de host ha sido creada exitosamente.</p>
          </div>
        ) : (
          <>
            {/* Resumen de datos del vehículo */}
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[#11295B]">Datos del vehículo</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-gray-500 text-sm">Placa</p>
                  <p className="font-semibold">{vehicleData.placa}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Número de seguro</p>
                  <p className="font-semibold">{vehicleData.soat}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500 text-sm">Imágenes</p>
                  <p className="font-semibold">{vehicleData.imagenes.length} imágenes cargadas</p>
                </div>
              </div>
            </div>

            {/* Resumen de datos de pago */}
            <div className="mb-8 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[#11295B]">Método de pago</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-2">
                  <p className="text-gray-500 text-sm">Tarjeta</p>
                  <p className="font-semibold">{maskedCardNumber}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Expiración</p>
                  <p className="font-semibold">{paymentData.expiration}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Titular</p>
                  <p className="font-semibold">{paymentData.cardHolder}</p>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleComplete}
              disabled={isLoading}
              className={`w-full text-white py-3 rounded-xl font-semibold text-lg transition-all duration-200 
                ${isLoading ? "bg-[#FCA311]/60 cursor-wait" : "bg-[#FCA311] hover:bg-[#e29510]"}`}
            >
              {isLoading ? "Procesando..." : "Confirmar y finalizar"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CompleteProfileModal;