'use client';
import React, { useEffect, useState, useRef } from 'react';
import NavbarPerfilUsuario from '@/app/components/navbar/NavbarPerfilUsuario';
import { X } from 'lucide-react';

export default function registroDriver() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [anverso, setAnverso] = useState<File | null>(null);
  const [reverso, setReverso] = useState<File | null>(null);
  const [perfil, setPerfil] = useState<File | null>(null);
  const [errorPerfil, setErrorPerfil] = useState<string | null>(null);
  const [errorAnverso, setErrorAnverso] = useState<string | null>(null);
  const [errorReverso, setErrorReverso] = useState<string | null>(null);
  const [nombreUsuario, setNombreUsuario] = useState<string>('');
  const [sexo, setSexo] = useState<string>('');
  const [telefonoUsuario, setTelefonoUsuario] = useState<string>('');
  const [NroLicencia, setNroLicencia] = useState<string>('');
  const [categoriaLicencia, setCategoriaLicencia] = useState<string>('');
  const [fechaVencimiento, setFechaVencimientoState] = useState<string>('');
  const [fechaEmision, setFechaEmisionState] = useState<string>('');

  const anversoRef = useRef<HTMLInputElement>(null);
  const reversoRef = useRef<HTMLInputElement>(null);
  const perfilRef = useRef<HTMLInputElement>(null);



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
    tipo: 'anverso' | 'reverso' | 'perfil'
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

    if (tipo === 'perfil') {
      setPerfil(file);
      setErrorPerfil(null);
    }
  };

  const removeFile = (tipo: 'anverso' | 'reverso' | 'perfil') => {
    if (tipo === 'anverso') {
      setAnverso(null);
      setErrorAnverso(null);
    } else if (tipo === 'reverso'){
      setReverso(null);
      setErrorReverso(null);
    } else {
      setPerfil(null);
      setErrorPerfil(null);
    }
  };

  const renderImagePreview = (file: File | null, tipo: 'anverso' | 'reverso' | 'perfil') => {
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

  const validarTelefono = (telefono: string): boolean => {
    const regex = /^\d{10}$/; // 10 dígitos
    return regex.test(telefono);
  };

  const validarNroLicencia = (nroLicencia: string): boolean => {
    const regex = /^[A-Z0-9]{5,10}$/; // 5 a 10 caracteres alfanuméricos
    return regex.test(nroLicencia);
  }

  {/*const validarFechaEmision = (fecha: string): boolean => {
    if (fecha > new Date()) {
      return;
  };*/}
  const validarFechaEmision = (fecha: string): boolean => {
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(fecha);
    return fechaSeleccionada <= fechaActual;
  }
  const validarFechaVencimiento = (fecha: string): boolean => {
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(fecha);
    return fechaSeleccionada >= fechaActual;
  }

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error: No tienes permiso para acceder a esta página.</div>;

  function setFechaEmision(value: string): void {
    throw new Error('Function not implemented.');
  }

  function setFechaVencimiento(value: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="bg-[var(--blanco)] min-h-screen flex flex-col"> 
      <div className="fixed top-0 w-full z-50 bg-white shadow-none border-b border-gray-200">
        <NavbarPerfilUsuario />
      </div>

      <div className="mt-28 px-8 w-full flex justify-center">
        <div className="max-w-[1300px] w-full">
          <h2 className="text-[1.8rem] font-bold mb-4 text-[#11295B] text-center">REGISTRO COMO DRIVER</h2>
          <p className="text-base text-[#333] leading-relaxed text-left max-w-[1100px] mx-auto">
            Conviértete en driver y ayuda a otros usuarios a llegar a sus destinos. Regístrate y activa tu disponibilidad para empezar a recibir solicitudes de viaje.
            <br />
            En este paso te pediremos una foto de perfil, datos personales para que los usuarios se relacionen con tu perfil, también añadirás fotos de tu licencia de conducir. Finalmente tendrás las opciones para elegir un método de pago.
          </p>
        </div>
      </div>


      <div className="mt-7 w-full flex justify-center">
        <div className="p-8 w-full max-w-[1300px] flex gap-8">
          
          {/* Columna izquierda - Datos personales */}
          <div className="w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-[#11295B] mb-6">DATOS PERSONALES Y DE LICENCIA</h2>

            {/* Fila 1: Nombre y sexo */}
            <div className="flex w-full gap-4">
                <div className="w-2/3 relative">
                <img
                  src="/userIcon.svg" // Cambia esto por la ruta de tu icono
                  alt="Icono user"
                  className="absolute left-4 top-1/4  w-6 h-6"
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={nombreUsuario}
                  placeholder="Nombre del usuario"
                  readOnly
                  className="w-full pl-12 pr-4 pt-6 pb-2 rounded-lg border border-[#11295B] text-[#11295B] placeholder:text-[#11295B]/50 focus:outline-none focus:ring-1 focus:ring-[#11295B]"
                />
                <span className="absolute left-12 top-[0.4rem] text-xs text-[#11295B] font-bold  px-1">
                  Nombre completo
                </span>
              </div>
                {/* Sexo */}
              <div className="w-1/3 relative">
              <span className="absolute left-3 top-[0.4rem] text-xs text-[#11295B] font-bold px-1 z-10">
                Sexo
              </span>
              <select
                id="sexo"
                name="sexo"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
                className="w-full pt-6 pb-2 px-3 rounded-lg border border-[#11295B] text-[#11295B] focus:outline-none focus:ring-1 focus:ring-[#11295B]"
                required
              >
                <option value="" disabled hidden>Seleccionar</option>
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
              </select>
            </div>
            </div>
              <div className="relative w-full mt-4">
            <img
                  src="/userIcon.svg" // Cambia esto por la ruta de tu icono
                  alt="Icono user"
                  className="absolute left-4 top-1/4  w-6 h-6"
                />
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  value={telefonoUsuario}
                  placeholder="77777777"
                  onChange={(e) => setTelefonoUsuario(e.target.value)}
                  className="w-full pl-12 pr-4 pt-6 pb-2 rounded-lg border border-[#11295B] text-[#11295B] placeholder:text-[#11295B]/50 focus:outline-none focus:ring-1 focus:ring-[#11295B]"
                />
                <span className="absolute left-12 top-[0.4rem] text-xs text-[#11295B] font-bold  px-1">
                  Telefono
                </span>
            </div>

            <div className="relative w-full mt-4">
            <img
                  src="/userIcon.svg" // Cambia esto por la ruta de tu icono
                  alt="Icono user"
                  className="absolute left-4 top-1/4  w-6 h-6"
                />
                <input
                  type="NroLicencia"
                  id="NroLicencia"
                  name="NroLicencia"
                  value={NroLicencia}
                  placeholder="00000000"
                  onChange={(e) => setNroLicencia(e.target.value)}
                  className="w-full pl-12 pr-4 pt-6 pb-2 rounded-lg border border-[#11295B] text-[#11295B] placeholder:text-[#11295B]/50 focus:outline-none focus:ring-1 focus:ring-[#11295B]"
                />
                <span className="absolute left-12 top-[0.4rem] text-xs text-[#11295B] font-bold  px-1">
                  Nro de licencia
                </span>
            </div>

              <div className="relative w-full mt-4">
                <img
                  src="/licenciaIcon.svg" // Cambia por el ícono que quieras usar
                  alt="Icono licencia"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <span className="absolute left-12 top-[0.4rem] text-xs text-[#11295B] font-bold  px-1">
                  Categoria
                </span>
                <select
                  id="categoria"
                  name="categoria"
                  value={categoriaLicencia}
                  onChange={(e) => setCategoriaLicencia(e.target.value)}
                  className="w-full pt-6 pb-2 pl-12 pr-3 rounded-lg border border-[#11295B] text-[#11295B] focus:outline-none focus:ring-1 focus:ring-[#11295B]"
                  required
                >
                  <option value="" disabled hidden>Seleccionar</option>
                  <option value="Particular(P)">Particular(P)</option>
                  <option value="Profesional A">Profesional A</option>
                  <option value="Profesional B">Profesional B</option>
                  <option value="Profesional C">Profesional C</option>
                  <option value="Motorista (T)">Motorista (T)</option>
                </select>
            </div>
              {/* Ultima fila */}
              <div className="flex w-full mt-4 gap-4">
            {/* Fecha de emisión */}
            <div className="w-1/2 relative">
              <img
                src="/userIcon.svg"
                alt="Icono user"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="date"
                id="fechaEmision"
                value={fechaEmision}
                onChange={(e) => {
                  const value = (e.target as HTMLInputElement).value;
                  if (validarFechaEmision(value)) {
                    setFechaEmisionState(value);
                  } else {
                    alert('La fecha de emisión no puede ser futura.');
                  }
                }}
                className="w-full pl-12 pr-4 pt-6 pb-2 rounded-lg border border-[#11295B] text-[#11295B] placeholder:text-[#11295B]/50 focus:outline-none focus:ring-1 focus:ring-[#11295B]"
              />
              <span className="absolute left-12 top-[0.4rem] text-xs text-[#11295B] font-bold px-1 z-10">
                Fecha de emisión
              </span>
            </div>

            {/* Fecha de vencimiento */}
            <div className="w-1/2 relative">
              <img
                src="/userIcon.svg"
                alt="Icono user"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="date"
                id="fechaVencimiento"
                name="fechaVencimiento"
                value={fechaVencimiento}
                onChange={(e) => {
                  const value = (e.target as HTMLInputElement).value;
                  if (validarFechaVencimiento(value)) {
                    setFechaVencimientoState(value);
                  } else {
                    alert('La fecha de vencimiento debe ser igual o posterior a la fecha actual.');
                  }
                }}
                className="w-full pl-12 pr-4 pt-6 pb-2 rounded-lg border border-[#11295B] text-[#11295B] placeholder:text-[#11295B]/50 focus:outline-none focus:ring-1 focus:ring-[#11295B]"
              />
              <span className="absolute left-12 top-[0.4rem] text-xs text-[#11295B] font-bold px-1 z-10">
                Fecha de vencimiento
              </span>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imágenes */}
          <div className="w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-[#11295B] mb-2">DATOS PERSONALES Y DE LICENCIA</h2>

            {/* Imagen anverso */}
            <div className="bg-gray-100 p-4 rounded-xl">
              <label className="font-semibold text-[#11295B]">Imagen anverso de la Licencia</label>
              <p className="text-sm text-gray-600">Toma la foto en un lugar bien iluminado</p>
              <div
                className="mt-2 border border-dashed border-gray-400 bg-gray-200 rounded text-center cursor-pointer hover:bg-gray-300 flex items-center justify-center h-15"
                onClick={() => anversoRef.current?.click()}
              >
                <span className="text-[#11295B] font-semibold z-10 relative">
                  {anverso ? 'Cambiar imagen' : 'Subir imagen / Arrastrar aquí'}
                </span>
              </div>
              <input ref={anversoRef} type="file" accept="image/jpeg, image/png" className="hidden" onChange={(e) => handleFileChange(e, 'anverso')} />
              {renderImagePreview(anverso, 'anverso')}
            </div>

            {/* Imagen reverso */}
            <div className="bg-gray-100 p-4 rounded-xl">
              <label className="font-semibold text-[#11295B]">Imagen reverso de la Licencia</label>
              <p className="text-sm text-gray-600">Toma la foto en un lugar bien iluminado</p>
              <div
                className="mt-2 border border-dashed border-gray-400 bg-gray-200 rounded text-center cursor-pointer hover:bg-gray-300 flex items-center justify-center h-15"
                onClick={() => reversoRef.current?.click()}
              >
                <span className="text-[#11295B] font-semibold z-10 relative">
                  {reverso ? 'Cambiar imagen' : 'Subir imagen / Arrastrar aquí'}
                </span>
              </div>
              <input ref={reversoRef} type="file" accept="image/jpeg, image/png" className="hidden" onChange={(e) => handleFileChange(e, 'reverso')} />
              {renderImagePreview(reverso, 'reverso')}
            </div>
          </div>
        </div>
      
      </div>
  </div>
  );
}
