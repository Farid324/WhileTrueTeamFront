"use client";

import React, { useState, useRef } from "react";
import { X, CreditCard, QrCode, Trash2, ZoomIn, DollarSign } from "lucide-react";

interface Props {
  onClose: () => Promise<void>;
  onNext: (data: {
    cardNumber?: string;
    expiration?: string;
    cvv?: string;
    cardHolder?: string;
    qrImage?: File | null;
    efectivoDetalle?: string;
  }) => void;
}

export default function PaymentRegistrationModal({ onClose, onNext }: Props) {
  const [selectedOption, setSelectedOption] = useState<"card" | "qr" | "cash" | null>(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [qrImage, setQrImage] = useState<File | null>(null);
  const [cashDetail, setCashDetail] = useState("");
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!termsAccepted) newErrors.terms = "Debes aceptar los términos";

    if (selectedOption === "card") {
      const num = cardNumber.replace(/\s/g, "");
      if (!/^[0-9]{16}$/.test(num)) newErrors.cardNumber = "Ingresa los 16 dígitos de su tarjeta sin espacios";
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) newErrors.expiryDate = "Fecha inválida (MM/YY)";
      if (!/^[0-9]{3,4}$/.test(cvv)) newErrors.cvv = "CVV inválido (3 o 4 dígitos)";
      if (!cardHolder.trim()) newErrors.cardHolder = "Nombre del titular requerido";
    } else if (selectedOption === "qr") {
      if (!qrImage) newErrors.qrImage = "Formato de imagen inválido.";
    } else if (selectedOption === "cash") {
      if (!cashDetail.trim()) newErrors.cashDetail = "Formato incorrecto, ingrese montos enteros";
    } else {
      newErrors.method = "Selecciona una forma de pago";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    if (selectedOption === "card") {
      onNext({ cardNumber, expiration: expiryDate, cvv, cardHolder });
    } else if (selectedOption === "qr") {
      onNext({ qrImage });
    } else if (selectedOption === "cash") {
      onNext({ efectivoDetalle: cashDetail });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setQrImage(file);
      setPreviewImg(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, qrImage: "" }));
    }
  };

  const handleQrImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setQrImage(file);
      setPreviewImg(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, qrImage: "" }));
    }
  };

  const handleDeleteImage = () => {
    setQrImage(null);
    setPreviewImg(null);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-xl w-full relative text-[#11295B]">
        <button onClick={onClose} className="absolute right-6 top-6 hover:text-red-500 transition">
          <X size={24} />
        </button>

        <h2 className="text-lg font-semibold text-center">Bienvenido a</h2>
        <h1 className="text-3xl font-bold text-center text-[#FCA311] mb-1">REDIBO</h1>
        <h3 className="text-xl font-semibold text-center mb-2">FORMAS DE PAGO</h3>
        <p className="text-center text-sm text-gray-600 mb-6">Elige cómo recibir el pago de tus rentas</p>

        <div className="space-y-6">
          {/* TARJETA */}
          <div className={`rounded-xl shadow-md border-[1.5px] ${selectedOption === "card" ? "border-[#11295B]" : "border-gray-300"}`}>
            <div className="flex items-center pl-4 py-3 border-b cursor-pointer" onClick={() => setSelectedOption("card")}> 
              <input type="radio" checked={selectedOption === "card"} readOnly className="mr-2 accent-[#11295B]" />
              <label className="text-sm font-medium flex items-center"><CreditCard size={16} className="mr-1" /> Número de tarjeta</label>
            </div>
            {selectedOption === "card" && (
              <div className="p-4 space-y-3">
                <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="1111 2222 3333 4444" className={`w-full border-[1.5px] rounded-lg px-4 py-3 text-sm outline-none ${errors.cardNumber ? "border-[#DC2626] text-[#DC2626] placeholder-[#DC2626]" : "border-[#11295B]"}`} />
                {errors.cardNumber && <p className="text-sm text-[#DC2626] text-center -mt-2">{errors.cardNumber}</p>}
                <div className="grid grid-cols-2 gap-2">
                  <input value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" className={`border-[1.5px] rounded-lg px-4 py-3 text-sm outline-none ${errors.expiryDate ? "border-[#DC2626] text-[#DC2626] placeholder-[#DC2626]" : "border-[#11295B]"}`} />
                  <input value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="CVV" className={`border-[1.5px] rounded-lg px-4 py-3 text-sm outline-none ${errors.cvv ? "border-[#DC2626] text-[#DC2626] placeholder-[#DC2626]" : "border-[#11295B]"}`} />
                </div>
                {errors.expiryDate && <p className="text-sm text-[#DC2626] text-center -mt-2">{errors.expiryDate}</p>}
                {errors.cvv && <p className="text-sm text-[#DC2626] text-center -mt-2">{errors.cvv}</p>}
                <input value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} placeholder="Nombre del titular" className={`w-full border-[1.5px] rounded-lg px-4 py-3 text-sm outline-none ${errors.cardHolder ? "border-[#DC2626] text-[#DC2626] placeholder-[#DC2626]" : "border-[#11295B]"}`} />
                {errors.cardHolder && <p className="text-sm text-[#DC2626] text-center -mt-2">{errors.cardHolder}</p>}
              </div>
            )}
          </div>

          {/* QR */}
          <div className={`rounded-xl shadow-md border-[1.5px] ${selectedOption === "qr" ? "border-[#11295B]" : "border-gray-300"}`}>
            <div className="flex items-center pl-4 py-3 border-b cursor-pointer" onClick={() => setSelectedOption("qr")}> 
              <input type="radio" checked={selectedOption === "qr"} readOnly className="mr-2 accent-[#11295B]" />
              <label className="text-sm font-medium flex items-center"><QrCode size={16} className="mr-1" /> Imagen de QR</label>
            </div>
            {selectedOption === "qr" && (
              <div className="p-4">
                <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} onClick={() => fileInputRef.current?.click()} className={`relative w-32 h-24 border-[1.5px] border-dashed rounded-xl bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 ${errors.qrImage ? "border-[#DC2626]" : "border-[#11295B]"}`}>
                  {previewImg ? (
                    <>
                      <img src={previewImg} alt="QR" className="w-full h-full object-contain rounded" />
                      <ZoomIn className="absolute bottom-1 right-1 text-white bg-black/50 rounded-full w-4 h-4" />
                    </>
                  ) : (
                    <QrCode size={24} className="text-gray-400" />
                  )}
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleQrImageChange} className="hidden" />
                {errors.qrImage && <p className="text-sm text-[#DC2626] text-center mt-2">{errors.qrImage}</p>}
              </div>
            )}
          </div>

          {/* EFECTIVO */}
          <div className={`rounded-xl shadow-md border-[1.5px] ${selectedOption === "cash" ? "border-[#11295B]" : "border-gray-300"}`}>
            <div className="flex items-center pl-4 py-3 border-b cursor-pointer" onClick={() => setSelectedOption("cash")}> 
              <input type="radio" checked={selectedOption === "cash"} readOnly className="mr-2 accent-[#11295B]" />
              <label className="text-sm font-medium flex items-center"><DollarSign size={16} className="mr-1" /> Dinero efectivo</label>
            </div>
            {selectedOption === "cash" && (
              <div className="p-4">
                <textarea value={cashDetail} onChange={(e) => setCashDetail(e.target.value)} placeholder="Descripcion" className={`w-full h-24 border-[1.5px] rounded-lg px-4 py-3 text-sm outline-none resize-none ${errors.cashDetail ? "border-[#DC2626] text-[#DC2626] placeholder-[#DC2626]" : "border-[#11295B]"}`} />
                {errors.cashDetail && <p className="text-sm text-[#DC2626] text-center mt-2">{errors.cashDetail}</p>}
              </div>
            )}
          </div>
        </div>

        {/* TÉRMINOS */}
        <div className="flex items-start mt-6">
          <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} className="mt-1 mr-2 accent-[#FCA311]" />
          <label className="text-xs text-gray-600">He leído y acepto los <span className="text-[#FCA311] font-medium">Términos y condiciones</span>.</label>
        </div>
        {errors.terms && <p className="text-sm text-[#DC2626] text-center mt-2">{errors.terms}</p>}
        {errors.method && <p className="text-sm text-[#DC2626] text-center mt-2">{errors.method}</p>}

        <div className="flex justify-between mt-8">
          <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-8 rounded-full">Cancelar</button>
          <button onClick={handleSubmit} className="bg-[#FCA311] hover:bg-[#e29510] text-white font-semibold py-2 px-8 rounded-full">Registrar</button>
        </div>
      </div>
    </div>
  );
}