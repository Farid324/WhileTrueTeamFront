"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Camera, CheckCircle, CreditCard, DollarSign, QrCode, Trash2 } from "lucide-react";

// Agregamos una prop para la función onClose
interface Props {
  onClose: () => void;
}

export default function PaymentRegistrationModal({ onClose }: Props) {
  const [selectedOption, setSelectedOption] = useState<"card" | "other" | "qr">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [otherOption, setOtherOption] = useState("");
  const [qrImage, setQrImage] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [errors, setErrors] = useState<{
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
    cardHolder?: string;
    otherOption?: string;
    qrImage?: string;
    terms?: string;
  }>({});
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Agregar manejador para la tecla Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isLoading) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, isLoading]);

  // Manejador para hacer clic fuera del modal
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !isLoading) {
      onClose();
    }
  };

  // Formatear número de tarjeta (añadir espacios cada 4 dígitos)
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const limited = cleaned.substring(0, 16);
    const formatted = limited.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formatted;
  };

  // Formatear fecha de expiración (MM/YY)
  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const limited = cleaned.substring(0, 4);
    
    if (limited.length > 2) {
      return `${limited.substring(0, 2)}/${limited.substring(2)}`;
    }
    return limited;
  };

  // Validaciones
  const validateCardNumber = (number: string) => {
    const digits = number.replace(/\s/g, "");
    return /^\d{16}$/.test(digits);
  };

  const validateExpiryDate = (date: string) => {
    if (!/^\d{2}\/\d{2}$/.test(date)) return false;
    
    const [month, year] = date.split("/").map(Number);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    if (month < 1 || month > 12) return false;
    if (year < currentYear) return false;
    if (year === currentYear && month < currentMonth) return false;
    
    return true;
  };

  const validateCVV = (cvv: string) => {
    return /^\d{3,4}$/.test(cvv);
  };

  const validateCardHolder = (name: string) => {
    return name.trim().length >= 3;
  };

  // Manejadores de cambios en los inputs
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
    
    if (formatted && !validateCardNumber(formatted)) {
      setErrors(prev => ({ ...prev, cardNumber: "Número de tarjeta inválido" }));
    } else {
      setErrors(prev => ({ ...prev, cardNumber: undefined }));
    }
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiryDate(formatted);
    
    if (formatted.includes("/") && !validateExpiryDate(formatted)) {
      setErrors(prev => ({ ...prev, expiryDate: "Fecha inválida" }));
    } else {
      setErrors(prev => ({ ...prev, expiryDate: undefined }));
    }
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 4);
    setCvv(value);
    
    if (value && !validateCVV(value)) {
      setErrors(prev => ({ ...prev, cvv: "CVV inválido" }));
    } else {
      setErrors(prev => ({ ...prev, cvv: undefined }));
    }
  };

  const handleCardHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardHolder(value);
    
    if (value && !validateCardHolder(value)) {
      setErrors(prev => ({ ...prev, cardHolder: "Nombre inválido" }));
    } else {
      setErrors(prev => ({ ...prev, cardHolder: undefined }));
    }
  };

  const handleQrImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setErrors(prev => ({ ...prev, qrImage: "Formato de imagen inválido" }));
        return;
      }
      
      setQrImage(file);
      setPreviewImg(URL.createObjectURL(file));
      setErrors(prev => ({ ...prev, qrImage: undefined }));
    }
  };

  // Eliminar imagen QR
  const handleDeleteImage = () => {
    setQrImage(null);
    setPreviewImg(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Validar todos los campos antes de enviar
  const validateForm = () => {
    const newErrors: typeof errors = {};
    let isValid = true;
    
    if (selectedOption === "card") {
      if (!cardNumber) {
        newErrors.cardNumber = "Campo requerido";
        isValid = false;
      } else if (!validateCardNumber(cardNumber)) {
        newErrors.cardNumber = "Número de tarjeta inválido";
        isValid = false;
      }
      
      if (!expiryDate) {
        newErrors.expiryDate = "Campo requerido";
        isValid = false;
      } else if (!validateExpiryDate(expiryDate)) {
        newErrors.expiryDate = "Fecha inválida";
        isValid = false;
      }
      
      if (!cvv) {
        newErrors.cvv = "Campo requerido";
        isValid = false;
      } else if (!validateCVV(cvv)) {
        newErrors.cvv = "CVV inválido";
        isValid = false;
      }
      
      if (!cardHolder) {
        newErrors.cardHolder = "Campo requerido";
        isValid = false;
      } else if (!validateCardHolder(cardHolder)) {
        newErrors.cardHolder = "Nombre inválido";
        isValid = false;
      }
    }
    
    if (selectedOption === "other" && !otherOption.trim()) {
      newErrors.otherOption = "Campo requerido";
      isValid = false;
    }
    
    if (selectedOption === "qr" && !qrImage) {
      newErrors.qrImage = "Imagen requerida";
      isValid = false;
    }
    
    if (!termsAccepted) {
      newErrors.terms = "Debes aceptar los términos y condiciones";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  // Procesar el envío del formulario
  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mostrar mensaje de éxito y mantener el modal abierto
      setShowSuccessMessage(true);
      setIsLoading(false);
      
      // No cerramos el modal automáticamente para que el usuario pueda ver el mensaje
    } catch (error) {
      console.error("Error en el registro:", error);
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={handleOverlayClick}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-3xl shadow-xl w-full max-w-md relative p-6 text-[#11295B]"
      >
        {/* Botón de cerrar */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-[#11295B] hover:text-red-500 transition-colors"
          disabled={isLoading}
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>

        {/* Cabecera */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-center text-[#11295B]">Bienvenido a</h2>
          <h1 className="text-3xl font-bold text-center text-[#FCA311] mb-2">REDIBO</h1>
          <p className="text-center text-sm text-gray-600">Elige cómo recibir el pago de tus rentas</p>
        </div>

        {showSuccessMessage ? (
          <div className="flex flex-col items-center py-4">
            <CheckCircle size={36} className="text-green-500 mb-1" />
            <h3 className="text-base font-semibold text-[#11295B]">¡Registro exitoso!</h3>
            <p className="text-xs text-gray-600">Tu método de pago ha sido registrado.</p>
          </div>
        ) : (
          <>
          {/* Opciones de pago */}
          <div className="space-y-4">
            {/* Opción de tarjeta */}
            <div className="relative">
              <div className={`border ${errors.cardNumber ? "border-red-500" : "border-gray-300"} rounded-lg`}>
                <div className="flex items-center pl-4 py-3 border-b border-gray-200">
                  <input
                    type="radio"
                    id="cardOption"
                    checked={selectedOption === "card"}
                    onChange={() => setSelectedOption("card")}
                    className="mr-2"
                  />
                  <label htmlFor="cardOption" className="text-sm font-medium flex items-center">
                    <CreditCard size={16} className="mr-1" />
                    Número de tarjeta
                  </label>
                </div>
                
                <div className={`${selectedOption !== "card" ? "opacity-60" : ""} p-4 space-y-3`}>
                  {/* Número de tarjeta */}
                  <input
                    type="text"
                    placeholder="1111 1111 1111 1111"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    disabled={selectedOption !== "card"}
                    className={`w-full border rounded-lg px-4 py-2 outline-none text-sm placeholder:text-gray-400
                      ${errors.cardNumber ? "border-red-500" : "border-gray-300"}
                      ${selectedOption !== "card" ? "bg-gray-100" : "bg-white"}`}
                  />
                  {errors.cardNumber && (
                    <p className="text-xs text-red-500">{errors.cardNumber}</p>
                  )}
                  
                  <div className="grid grid-cols-2 gap-2">
                    {/* Fecha de expiración */}
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      disabled={selectedOption !== "card"}
                      className={`border rounded-lg px-4 py-2 outline-none text-sm placeholder:text-gray-400
                        ${errors.expiryDate ? "border-red-500" : "border-gray-300"}
                        ${selectedOption !== "card" ? "bg-gray-100" : "bg-white"}`}
                    />
                    
                    {/* CVV */}
                    <input
                      type="text"
                      placeholder="CVV"
                      value={cvv}
                      onChange={handleCVVChange}
                      disabled={selectedOption !== "card"}
                      className={`border rounded-lg px-4 py-2 outline-none text-sm placeholder:text-gray-400
                        ${errors.cvv ? "border-red-500" : "border-gray-300"}
                        ${selectedOption !== "card" ? "bg-gray-100" : "bg-white"}`}
                    />
                  </div>
                  
                  {/* Errores de fecha y CVV */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      {errors.expiryDate && (
                        <p className="text-xs text-red-500">{errors.expiryDate}</p>
                      )}
                    </div>
                    <div>
                      {errors.cvv && (
                        <p className="text-xs text-red-500">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Nombre del titular */}
                  <input
                    type="text"
                    placeholder="Nombre del titular"
                    value={cardHolder}
                    onChange={handleCardHolderChange}
                    disabled={selectedOption !== "card"}
                    className={`w-full border rounded-lg px-4 py-2 outline-none text-sm placeholder:text-gray-400
                      ${errors.cardHolder ? "border-red-500" : "border-gray-300"}
                      ${selectedOption !== "card" ? "bg-gray-100" : "bg-white"}`}
                  />
                  {errors.cardHolder && (
                    <p className="text-xs text-red-500">{errors.cardHolder}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Opción de otros métodos */}
            <div className="relative">
              <div className={`border ${errors.otherOption ? "border-red-500" : "border-gray-300"} rounded-lg`}>
                <div className="flex items-center pl-4 py-3 border-b border-gray-200">
                  <input
                    type="radio"
                    id="otherOption"
                    checked={selectedOption === "other"}
                    onChange={() => setSelectedOption("other")}
                    className="mr-2"
                  />
                  <label htmlFor="otherOption" className="text-sm font-medium flex items-center">
                    <DollarSign size={16} className="mr-1" />
                    Dinero efectivo
                  </label>
                </div>
                
                <div className="p-4">
                  <input
                    type="text"
                    placeholder="Ingrese los detalles para el pago en efectivo"
                    value={otherOption}
                    onChange={(e) => {
                      setOtherOption(e.target.value);
                      if (!e.target.value.trim()) {
                        setErrors(prev => ({ ...prev, otherOption: "Campo requerido" }));
                      } else {
                        setErrors(prev => ({ ...prev, otherOption: undefined }));
                      }
                    }}
                    disabled={selectedOption !== "other"}
                    className={`w-full border rounded-lg px-4 py-2 outline-none text-sm placeholder:text-gray-400
                      ${errors.otherOption ? "border-red-500" : "border-gray-300"}
                      ${selectedOption !== "other" ? "bg-gray-100" : "bg-white"}`}
                  />
                  {errors.otherOption && (
                    <p className="text-xs text-red-500 mt-1">{errors.otherOption}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Opción de imagen QR */}
            <div className="relative">
              <div className={`border ${errors.qrImage ? "border-red-500" : "border-gray-300"} rounded-lg`}>
                <div className="flex items-center pl-4 py-3 border-b border-gray-200">
                  <input
                    type="radio"
                    id="qrOption"
                    checked={selectedOption === "qr"}
                    onChange={() => setSelectedOption("qr")}
                    className="mr-2"
                  />
                  <label htmlFor="qrOption" className="text-sm font-medium flex items-center">
                    <QrCode size={16} className="mr-1" />
                    Imagen de QR
                  </label>
                </div>
                
                <div className="p-4">
                  <div className="flex">
                    <div 
                      className="w-32 h-24 border border-dashed rounded bg-gray-100 flex items-center justify-center cursor-pointer relative"
                      onClick={() => selectedOption === "qr" && fileInputRef.current?.click()}
                    >
                      {previewImg ? (
                        <img src={previewImg} alt="QR" className="w-full h-full object-contain" />
                      ) : (
                        <QrCode size={24} className="text-gray-400" />
                      )}
                    </div>
                    
                    <div className="ml-4 flex flex-col justify-center">
                      <button
                        type="button"
                        onClick={() => selectedOption === "qr" && fileInputRef.current?.click()}
                        className="bg-[#FCA311] text-white px-4 py-1 rounded-lg text-sm mb-2"
                        disabled={selectedOption !== "qr"}
                      >
                        Confirmar
                      </button>
                      
                      <div 
                        className="bg-[#11295B] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                        onClick={handleDeleteImage}
                      >
                        <Trash2 size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={handleQrImageChange}
                    className="hidden"
                  />
                  
                  {errors.qrImage && (
                    <p className="text-xs text-red-500 mt-2">{errors.qrImage}</p>
                  )}
                  {previewImg && (
                    <p className="text-xs text-gray-500 mt-2">Formato de imagen válido.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Términos y condiciones */}
          <div className="flex items-start my-6">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={() => {
                setTermsAccepted(!termsAccepted);
                if (termsAccepted) {
                  setErrors(prev => ({ ...prev, terms: undefined }));
                }
              }}
              className="mt-1 mr-2"
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              He leído y acepto los <span className="text-[#FCA311] font-medium cursor-pointer">Términos y condiciones</span> del Host de la página.
            </label>
          </div>
          {errors.terms && (
            <p className="text-xs text-red-500 -mt-4 mb-4">{errors.terms}</p>
          )}

          {/* Botones de acción */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-8 rounded-full transition-colors"
            >
              Cancelar
            </button>
            
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading || showSuccessMessage}
              className={`${
                isLoading 
                  ? "bg-[#FCA311]/60 cursor-wait" 
                  : showSuccessMessage
                    ? "bg-[#FCA311]/60 cursor-default"
                    : termsAccepted 
                      ? "bg-[#FCA311] hover:bg-[#e29510]" 
                      : "bg-[#FCA311]/60 cursor-not-allowed"
              } text-white font-medium py-2 px-8 rounded-full transition-colors`}
            >
              {isLoading ? "Procesando..." : "Registrar"}
            </button>
          </div>
          </>
        )}
      </div>
    </div>
  );
}