"use client";

import React, { useState, useRef } from "react";

interface Props {
  onNext: (data: {
    placa: string;
    soat: string;
    imagenes: File[];
  }) => void;
  onClose: () => void;
}

const VehicleDataModal: React.FC<Props> = ({ onNext, onClose }) => {
  const [placa, setPlaca] = useState("");
  const [soat, setSoat] = useState("");
  const [imagenes, setImagenes] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const validarPlaca = (valor: string) =>
    /^[A-Z]{3}[0-9]{3}$|^[0-9]{3,4}[A-Z]{3}$/.test(valor);

  const validarSOAT = (valor: string) =>
    /^[A-Z0-9]{6,10}$/.test(valor);

  const handleImagenesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter((file) => {
      const esValido =
        ["image/jpeg", "image/png"].includes(file.type) &&
        file.size <= 5 * 1024 * 1024;
      return esValido;
    });

    setImagenes((prev) => [...prev, ...validFiles].slice(0, 6));
  };

  const handleSubmit = () => {
    const errores: string[] = [];

    if (!placa.trim()) {
      errores.push("La placa es obligatoria");
    } else if (!validarPlaca(placa)) {
      errores.push("Formato de placa inválido (ej: AAA111 o 1234AAA)");
    }

    if (!soat.trim()) {
      errores.push("El número de seguro (SOAT) es obligatorio");
    } else if (!validarSOAT(soat)) {
      errores.push("El número de SOAT debe tener entre 6 y 10 caracteres alfanuméricos");
    }

    if (imagenes.length < 3) {
      errores.push("Debes subir al menos 3 imágenes del auto (frontal, lateral y trasera)");
    }

    if (imagenes.length > 6) {
      errores.push("Solo puedes subir hasta 6 imágenes del auto");
    }

    setErrors(errores);

    if (errores.length === 0) {
      onNext({ placa, soat, imagenes });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center modal-overlay bg-black/50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white text-[#11295B] p-8 rounded-3xl shadow-2xl max-w-lg w-full z-[10000]">
        <h2 className="text-xl font-bold text-center mb-4">Registrar vehículo</h2>
        <p className="text-sm text-center text-gray-600 mb-6">Completa los datos del vehículo que deseas alquilar</p>

        {/* Campo Placa */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Placa (ej: AAA111 o 1234AAA)"
            value={placa}
            onChange={(e) => setPlaca(e.target.value.toUpperCase())}
            className="w-full border border-[#11295B] rounded px-4 py-2 outline-none"
          />
        </div>

        {/* Campo SOAT */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Número de seguro (SOAT)"
            value={soat}
            onChange={(e) => setSoat(e.target.value.toUpperCase())}
            className="w-full border border-[#11295B] rounded px-4 py-2 outline-none"
          />
        </div>

        {/* Subida de imágenes */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Imágenes del auto</label>
          <div
            className="border border-dashed rounded p-4 text-center cursor-pointer bg-gray-100"
            onClick={() => fileInputRef.current?.click()}
          >
            Subir imagen / Arrastra aquí
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/jpeg, image/png"
            onChange={handleImagenesChange}
            className="hidden"
          />
          <div className="text-xs text-gray-500 mt-1">*Mínimo 3, máximo 6 imágenes (.jpg, .png)</div>
          <div className="flex flex-wrap mt-2 gap-2">
            {imagenes.map((img, idx) => (
              <div key={idx} className="w-16 h-16 overflow-hidden rounded border border-gray-300">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`imagen-${idx}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Errores */}
        {errors.length > 0 && (
          <div className="bg-red-100 text-red-700 text-sm p-3 rounded mb-3">
            {errors.map((err, idx) => (
              <div key={idx}>• {err}</div>
            ))}
          </div>
        )}

        {/* Botones */}
        <div className="flex justify-between gap-4">
          <button
            className="w-1/2 bg-gray-300 hover:bg-gray-400 text-[#11295B] py-2 px-4 rounded-xl font-semibold"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="w-1/2 bg-[#FCA311] hover:bg-[#e29510] text-white py-2 px-4 rounded-xl font-semibold"
            onClick={handleSubmit}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDataModal;

