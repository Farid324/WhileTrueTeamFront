'use client';
import { useState, useRef } from 'react';

//foto de perfil
//import { uploadProfilePhoto } from '@/libs/userService';
interface Props {
  setImagePreviewUrl: (url: string | null) => void;
}
export default function FotoDePerfilEditable({setImagePreviewUrl }: Props) {
  const [feedback, setFeedback] = useState('');

  
  // ✅ Creamos la referencia para el input file
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // ✅ Al hacer click en el botón, activamos el input
  const handleCambiarFoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 💥 Esto abre el selector de archivos
    }
  };


  /*const handleCambiarFoto = () => {
    setFeedback('Funcionalidad para cambiar foto aún no implementada.');
    setTimeout(() => setFeedback(''), 3000);
  };*/

  /*const handleEliminarFoto = () => {
    setFeedback('Funcionalidad para eliminar foto aún no implementada.');
    setTimeout(() => setFeedback(''), 3000);
  };*/

  const handleEliminarFoto = () => {
    setImagePreviewUrl(null); // ✅ eliminamos la preview de la foto
    setFeedback('Foto de perfil eliminada.');
    setTimeout(() => setFeedback(''), 3000);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  
    if (file) {
      // Validación rápida: PNG y tamaño
      if (!file.type.includes('png')) {
        setFeedback('Formato de imagen no válido. Usa PNG.');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setFeedback('La imagen debe pesar menos de 2MB.');
        return;
      }
  
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
      setFeedback('Subiendo foto...');
  
      // 👉 Crear FormData para enviar el archivo
      const formData = new FormData();
      formData.append('foto_perfil', file);
  
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3001/api/upload-profile-photo', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setFeedback('Foto de perfil actualizada exitosamente.');
          console.log('Foto guardada en:', data.foto_perfil);
        } else {
          console.error(data.message);
          setFeedback(data.message || 'Error al subir la foto.');
        }
      } catch (error) {
        console.error('Error:', error);
        setFeedback('Error al subir la foto.');
      }
  
      setTimeout(() => setFeedback(''), 3000);
    }
  };

  return (
    <div className="flex flex-col w-50 mt-4 gap-3">
      <button
        onClick={handleCambiarFoto}
        className="bg-[var(--naranja)] text-[var(--blanco)] px-4 py-2 rounded-lg shadow hover:bg-[var(--naranja)] transition cursor-pointer w-full"
      >
        Cambiar foto de perfil
      </button>

      {/* ✅ Input oculto */}
      
      <input
        type="file"
        ref={fileInputRef}
        accept="image/png, image/jpeg, image/jpg"
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        onClick={handleEliminarFoto}
        className="bg-[var(--naranja)] text-[var(--blanco)] px-4 py-2 rounded-lg shadow hover:bg-[var(--rojo)] transition cursor-pointer w-full"
      >
        Eliminar foto de perfil
      </button>

      {feedback && (
        <p className="text-center mt-2 text-green-600 font-semibold">{feedback}</p>
      )}
    </div>
  );
}