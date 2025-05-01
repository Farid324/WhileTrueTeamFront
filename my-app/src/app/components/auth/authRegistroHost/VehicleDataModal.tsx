"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Upload } from "lucide-react";

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
  const [errors, setErrors] = useState<{
    placa?: string;
    soat?: string;
    imagenes?: string;
  }>({});
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Validaciones mejoradas combinando ambos enfoques
  const validarPlaca = (valor: string) =>
    /^[A-Z]{3}[0-9]{3}$|^[A-Z]{3}[0-9]{4}$|^[0-9]{3,4}[A-Z]{3}$/.test(valor);

  const validarSOAT = (valor: string) => /^[A-Z0-9]{8,12}$/.test(valor);

  const camposValidos = () =>
    validarPlaca(placa) &&
    validarSOAT(soat) &&
    imagenes.length >= 3 &&
    imagenes.length <= 6 &&
    imagenes.every((file) => ["image/jpeg", "image/png"].includes(file.type));

  const validarYActualizarPlaca = (valor: string) => {
    const upperValue = valor.toUpperCase();
    setPlaca(upperValue);
    if (upperValue.length > 0 && !validarPlaca(upperValue)) {
      setErrors((prev) => ({ ...prev, placa: "Formato de placa inválido (ej: ABC123)" }));
    } else {
      setErrors((prev) => ({ ...prev, placa: undefined }));
    }
  };

  const validarYActualizarSOAT = (valor: string) => {
    const upperValue = valor.toUpperCase();
    setSoat(upperValue);
    if (upperValue.length > 0 && !validarSOAT(upperValue)) {
      setErrors((prev) => ({ ...prev, soat: "Formato de seguro inválido" }));
    } else {
      setErrors((prev) => ({ ...prev, soat: undefined }));
    }
  };

  const handleImagenesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => {
      return ["image/jpeg", "image/png"].includes(file.type) && file.size <= 5 * 1024 * 1024;
    });

    if (validFiles.length !== files.length) {
      setErrors((prev) => ({
        ...prev,
        imagenes: "Solo se permiten imágenes JPG/PNG de hasta 5MB"
      }));
    }

    const totalImagenes = [...imagenes, ...validFiles];

    if (totalImagenes.length > 6) {
      setErrors((prev) => ({
        ...prev,
        imagenes: "Solo puedes subir hasta 6 imágenes del auto",
      }));
      return;
    }

    setImagenes(totalImagenes);

    if (totalImagenes.length < 3) {
      setErrors((prev) => ({
        ...prev,
        imagenes: "Debes subir al menos 3 imágenes del auto (frontal, lateral y trasera)",
      }));
    } else {
      setErrors((prev) => ({ ...prev, imagenes: undefined }));
    }
    
    // Reset input value to allow uploading the same file again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = (index: number) => {
    const nuevasImagenes = imagenes.filter((_, i) => i !== index);
    setImagenes(nuevasImagenes);

    if (nuevasImagenes.length < 3) {
      setErrors((prev) => ({
        ...prev,
        imagenes: "Debes subir al menos 3 imágenes del auto (frontal, lateral y trasera)",
      }));
    } else {
      setErrors((prev) => ({ ...prev, imagenes: undefined }));
    }
  };

  const handleSubmit = () => {
    const nuevosErrores: {
      placa?: string;
      soat?: string;
      imagenes?: string;
    } = {};

    if (!validarPlaca(placa)) {
      nuevosErrores.placa = "Formato de placa inválido";
    }

    if (!validarSOAT(soat)) {
      nuevosErrores.soat = "Formato de seguro inválido";
    }

    if (imagenes.length > 6) {
      nuevosErrores.imagenes = "Solo puedes subir hasta 6 imágenes del auto";
    } else if (imagenes.some(img => !["image/jpeg", "image/png"].includes(img.type))) {
      nuevosErrores.imagenes = "Formato de imagen inválido";
    } else if (imagenes.length < 3) {
      nuevosErrores.imagenes = "Debes subir al menos 3 imágenes del auto (frontal, lateral y trasera)";
    }

    setErrors(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      onNext({ placa, soat, imagenes });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      onClose();
    }
  };

  // Limpieza de URLs de objetos al desmontar el componente
  useEffect(() => {
    return () => {
      imagenes.forEach((img) => {
        const url = URL.createObjectURL(img);
        URL.revokeObjectURL(url);
      });
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center modal-overlay bg-black/40"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-white text-[#11295B] p-10 rounded-3xl shadow-2xl max-w-xl w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-2xl text-[#11295B]"
        >
          <X />
        </button>

        <h2 className="text-lg font-semibold text-center text-[#11295B]">Bienvenido a</h2>
        <h1 className="text-3xl font-bold text-center text-[#FCA311] drop-shadow-sm mb-2">REDIBO</h1>
        <h3 className="text-xl text-center font-semibold text-[#11295B] mb-1">REGISTRARSE COMO HOST</h3>
        <p className="text-center text-sm text-gray-600 mb-6">Ingresa datos de tu vehiculo</p>

        {/* Placa */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Placa del vehículo"
            value={placa}
            onChange={(e) => validarYActualizarPlaca(e.target.value)}
            className={`w-full border-2 rounded-lg px-4 py-3 outline-none text-lg placeholder:text-[#11295B]/50 font-semibold
              ${errors.placa ? "border-red-500 text-red-500 placeholder-red-400" : "border-[#11295B]"}`}
          />
          {errors.placa && <p className="text-sm text-red-500 mt-1">{errors.placa}</p>}
        </div>

        {/* SOAT */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Número de seguro"
            value={soat}
            onChange={(e) => validarYActualizarSOAT(e.target.value)}
            className={`w-full border-2 rounded-lg px-4 py-3 outline-none text-lg placeholder:text-[#11295B]/50 font-semibold
              ${errors.soat ? "border-red-500 text-red-500 placeholder-red-400" : "border-[#11295B]"}`}
          />
          {errors.soat && <p className="text-sm text-red-500 mt-1">{errors.soat}</p>}
        </div>

        {/* Imágenes */}
        <div className={`mb-4 bg-gray-100 rounded-xl p-4 ${errors.imagenes ? "border-2 border-red-500" : ""}`}>
          <label className="block font-semibold mb-1 text-[#11295B]">Imágenes del auto</label>
          <p className="text-sm text-gray-600 mb-2">Asegúrate de tomar las fotos en un lugar bien iluminado</p>
          
          <div
            className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="mx-auto mb-2 w-6 h-6" />
            <p className="font-medium">Subir imágenes del vehículo</p>
            <p className="text-xs text-gray-500">Haz clic o arrastra aquí tus imágenes</p>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/jpeg, image/png"
            onChange={handleImagenesChange}
            className="hidden"
          />
          
          {errors.imagenes ? (
            <p className="text-sm text-red-500 mt-2">{errors.imagenes}</p>
          ) : (
            <p className="text-xs text-gray-500 mt-2">*Mínimo 3 fotos del vehículo: frontal, lateral y trasera</p>
          )}

          {/* Vista previa de imágenes */}
          {imagenes.length > 0 && (
            <div className="flex flex-wrap mt-3 gap-3">
              {imagenes.map((img, idx) => {
                const src = URL.createObjectURL(img);
                return (
                  <div key={`${idx}-${img.name}`} className="relative w-20 h-20">
                    <img
                      src={src}
                      alt={`imagen-${idx}`}
                      onClick={() => setPreviewImg(src)}
                      className="object-cover w-full h-full rounded border border-gray-300 cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage(idx);
                      }}
                      title="Eliminar imagen"
                      className="absolute -top-2 -right-2 bg-[#11295B] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                    >
                      <X size={12} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Botón siguiente */}
        <button
          onClick={handleSubmit}
          className={`w-full text-white py-3 rounded-xl font-semibold text-lg mt-2 transition-all duration-200 ${
            camposValidos()
              ? "bg-[#FCA311] hover:bg-[#e29510]"
              : "bg-[#FCA311]/60 cursor-not-allowed"
          }`}
          disabled={!camposValidos()}
        >
          Siguiente
        </button>
      </div>

      {/* Previsualización */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/60 z-[10000] flex items-center justify-center"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative max-w-3xl w-full mx-4">
            <img
              src={previewImg}
              alt="Previsualización"
              className="w-full h-auto rounded-xl shadow-xl"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPreviewImg(null);
              }}
              title="Cerrar imagen"
              className="absolute top-2 right-2 text-white text-xl bg-[#11295B]/70 hover:bg-[#11295B] rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleDataModal;