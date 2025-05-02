'use client';
import React, { useEffect, useState, useRef } from 'react';
import NavbarPerfilUsuario from '@/app/components/navbar/NavbarPerfilUsuario';
import { X } from 'lucide-react';

export default function registroDriver() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [anverso, setAnverso] = useState<File | null>(null);
  const [reverso, setReverso] = useState<File | null>(null);
  const [errorAnverso, setErrorAnverso] = useState<string | null>(null);
  const [errorReverso, setErrorReverso] = useState<string | null>(null);

  const anversoRef = useRef<HTMLInputElement>(null);
  const reversoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsError(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  const validateFile = (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    return validTypes.includes(file.type) && file.size <= maxSize;
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    tipo: 'anverso' | 'reverso'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!validateFile(file)) {
      const errorMsg = 'Formato inválido o tamaño mayor a 5MB';
      tipo === 'anverso' ? setErrorAnverso(errorMsg) : setErrorReverso(errorMsg);
      return;
    }

    if (tipo === 'anverso') {
      setAnverso(file);
      setErrorAnverso(null);
    } else {
      setReverso(file);
      setErrorReverso(null);
    }
  };

  const removeFile = (tipo: 'anverso' | 'reverso') => {
    if (tipo === 'anverso') {
      setAnverso(null);
      setErrorAnverso(null);
    } else {
      setReverso(null);
      setErrorReverso(null);
    }
  };

  const renderImagePreview = (file: File | null, tipo: 'anverso' | 'reverso') => {
    if (!file) return null;
    const src = URL.createObjectURL(file);
    return (
      <div className="relative w-40 h-28 mt-2">
        <img src={src} alt={tipo} className="object-cover w-full h-full rounded" />
        <button
          onClick={() => removeFile(tipo)}
          className="absolute -top-2 -right-2 bg-[#11295B] text-white rounded-full w-5 h-5 flex items-center justify-center"
        >
          <X size={12} />
        </button>
      </div>
    );
  };

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error: No tienes permiso para acceder a esta página.</div>;

  return (
    <div className="bg-[var(--blanco)] min-h-screen flex flex-col">
      <NavbarPerfilUsuario />

      {/* Espacio reservado para la parte de tu compañera */}
      <div className="h-[1000px] md:h-[600px] bg-white w-full flex items-center justify-center">
        <p className="text-gray-400">[ Meli]</p>
      </div>

      {/* Tu sección de carga de imágenes de licencia */}
      <div className="p-8 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-[#11295B]">Fotos de Licencia de Conducir</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen anverso */}
          <div className="bg-gray-100 p-4 rounded-xl">
            <label className="font-semibold text-[#11295B]">Imagen anverso de la licencia</label>
            <p className="text-sm text-gray-600">Toma la foto en un lugar bien iluminado</p>
            <div
              className="mt-2 border border-dashed border-gray-400 p-4 bg-gray-200 rounded text-center cursor-pointer hover:bg-gray-300"
              onClick={() => anversoRef.current?.click()}
            >
              {anverso ? 'Cambiar imagen' : 'Subir imagen / Arrastra aquí'}
            </div>
            <input
              ref={anversoRef}
              type="file"
              accept="image/jpeg, image/png"
              className="hidden"
              onChange={(e) => handleFileChange(e, 'anverso')}
            />
            {errorAnverso && <p className="text-sm text-red-500 mt-1">{errorAnverso}</p>}
            {renderImagePreview(anverso, 'anverso')}
          </div>

          {/* Imagen reverso */}
          <div className="bg-gray-100 p-4 rounded-xl">
            <label className="font-semibold text-[#11295B]">Imagen reverso de la licencia</label>
            <p className="text-sm text-gray-600">Toma la foto en un lugar bien iluminado</p>
            <div
              className="mt-2 border border-dashed border-gray-400 p-4 bg-gray-200 rounded text-center cursor-pointer hover:bg-gray-300"
              onClick={() => reversoRef.current?.click()}
            >
              {reverso ? 'Cambiar imagen' : 'Subir imagen / Arrastra aquí'}
            </div>
            <input
              ref={reversoRef}
              type="file"
              accept="image/jpeg, image/png"
              className="hidden"
              onChange={(e) => handleFileChange(e, 'reverso')}
            />
            {errorReverso && <p className="text-sm text-red-500 mt-1">{errorReverso}</p>}
            {renderImagePreview(reverso, 'reverso')}
          </div>
        </div>
      </div>
    </div>
  );
}
