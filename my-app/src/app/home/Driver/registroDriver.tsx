'use client';
import React, { useEffect, useState, useRef } from 'react';
import NavbarPerfilUsuario from '@/app/components/navbar/NavbarPerfilUsuario';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import User from '@/app/components/Icons/User';
import Phone from '@/app/components/Icons/Phone';
import LicenciaConductor from '@/app/components/Icons/LicenciaConductor';
import Pencil from '@/app/components/Icons/Pencil';
import Calendar from '@/app/components/Icons/Calendar';

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

  const [errorSexo, setErrorSexo] = useState(false);
  const [mensajeErrorSexo, setMensajeErrorSexo] = useState('');
  const [errorTelefono, setErrorTelefono] = useState(false);
  const [mensajeErrorTelefono, setMensajeErrorTelefono] = useState('');
  const [errorLicencia, setErrorLicencia] = useState(false);
  const [mensajeErrorLicencia, setMensajeErrorLicencia] = useState('');
  const [errorCategoria, setErrorCategoria] = useState(false);
  const [mensajeErrorCategoria, setMensajeErrorCategoria] = useState('');
  const [errorFechaEmision, setErrorFechaEmision] = useState(false);
  const [mensajeErrorFechaEmision, setMensajeErrorFechaEmision] = useState('');
  const [errorFechaVencimiento, setErrorFechaVencimiento] = useState(false);
  const [mensajeErrorFechaVencimiento, setMensajeErrorFechaVencimiento] = useState('');

  const router = useRouter();

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
    const regex = /^\d{8}$/; // 10 dígitos
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






    const validarCampos = () => {
    let valido = true;

    if (!sexo) {
      setErrorSexo(true);
      setMensajeErrorSexo('Seleccione una opción');
      valido = false;
    } else {
      setErrorSexo(false);
      setMensajeErrorSexo('');
    }    
    
    if (!telefonoUsuario) {
      setErrorTelefono(true);
      setMensajeErrorTelefono('Este campo no puede estar vacío');
      valido = false;
    } else if (!validarTelefono(telefonoUsuario)) {
      setErrorTelefono(true);
      setMensajeErrorTelefono('Ingresa un número de teléfono válido de 8 dígitos')
      valido = false;
    } else {
      setErrorTelefono(false);
      setMensajeErrorTelefono('');
    }

    if (!NroLicencia) {
      setErrorLicencia(true);
      setMensajeErrorLicencia('Este campo no puede estar vacío');
      valido = false;
    } else if (!validarNroLicencia(NroLicencia)) {
      setErrorLicencia(true);
      setMensajeErrorLicencia('Debe tener hasta 8 caracteres alfanuméricos');
      valido = false;
    } else {
      setErrorLicencia(false);
      setMensajeErrorLicencia('');
    }    

    if (!categoriaLicencia) {
      setErrorCategoria(true);
      setMensajeErrorCategoria('Seleccione una categoría de licencia');
      valido = false;
    } else {
      setErrorCategoria(false);
      setMensajeErrorCategoria('');
    }    

    if (!fechaEmision) {
      setErrorFechaEmision(true);
      setMensajeErrorFechaEmision('Seleccione una fecha');
      valido = false;
    } else if (!validarFechaEmision(fechaEmision)) {
      setErrorFechaEmision(true);
      setMensajeErrorFechaEmision('La fecha no puede ser posterior a hoy');
      valido = false;
    } else {
      setErrorFechaEmision(false);
      setMensajeErrorFechaEmision('');
    }    

    if (!fechaVencimiento) {
      setErrorFechaVencimiento(true);
      setMensajeErrorFechaVencimiento('Seleccione una fecha');
      valido = false;
    } else if (!validarFechaVencimiento(fechaVencimiento)) {
      setErrorFechaVencimiento(true);
      setMensajeErrorFechaVencimiento('La fecha debe ser posterior a hoy');
      valido = false;
    } else {
      setErrorFechaVencimiento(false);
      setMensajeErrorFechaVencimiento('');
    }    

    return valido;
  };


  {/*const handleSubmit = () => {
    const esValido = validarCampos();

    if (!esValido) {
      console.log("Hay errores en el formulario");
      return;
    }

    // Aquí iría la lógica para continuar, guardar datos o avanzar a otro paso
    console.log("Formulario válido. Listo para enviar.");
  };*/}
  const handleSubmit = () => {
    const esValido = validarCampos();
    if (!esValido) return;
  
    const data = {
      sexo: sexo,
      telefono: telefonoUsuario,
      nro_licencia: NroLicencia,
      categoria: categoriaLicencia,
      fecha_emision: fechaEmision,
      fecha_vencimiento: fechaVencimiento,
      anverso: anverso, // tipo File
      reverso: reverso  // tipo File
    };
  
    localStorage.setItem("registroDriverPaso1", JSON.stringify(data));
    router.push("/home/Driver/seleccionarRenter");
  };
  

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
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <User className="w-6 h-6 text-[#11295B]" />
                </div>
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
                <span className={`absolute left-3 top-[0.4rem] text-xs font-bold px-1 z-10 ${errorSexo ? 'text-red-500' : 'text-[#11295B]'}`}>
                  Sexo
                </span>
                <select
                  id="sexo"
                  name="sexo"
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  className={`w-full pt-6 pb-2 px-3 rounded-lg border focus:outline-none focus:ring-1 ${
                    errorSexo
                      ? 'border-red-500 text-red-500 focus:ring-red-500'
                      : 'border-[#11295B] text-[#11295B] focus:ring-[#11295B]'
                  }`}
                  required
                >
                  <option value="" disabled hidden>Seleccionar</option>
                  <option value="femenino">Femenino</option>
                  <option value="masculino">Masculino</option>
                </select>
                {errorSexo && mensajeErrorSexo && (
                  <p className="text-sm text-red-500 mt-1">{mensajeErrorSexo}</p>
                )}
              </div>
            </div>

            <div className="relative w-full mt-4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Phone className={`w-6 h-6 ${errorTelefono ? 'text-red-500' : 'text-[#11295B]'}`} />
              </div>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={telefonoUsuario}
                placeholder="77777777"
                onChange={(e) => setTelefonoUsuario(e.target.value)}
                className={`w-full pl-12 pr-4 pt-6 pb-2 rounded-lg border focus:outline-none focus:ring-1 ${
                  errorLicencia
                    ? 'border-red-500 text-red-500 placeholder:text-red-400 focus:ring-red-500'
                    : 'border-[#11295B] text-[#11295B] placeholder:text-[#11295B]/50 focus:ring-[#11295B]'
                }`}                
              />
              {errorTelefono && (
                <p className="text-sm text-red-500 mt-1">{mensajeErrorTelefono}</p>
              )}
              <span className={`absolute left-12 top-[0.4rem] text-xs font-bold px-1 ${errorTelefono ? 'text-red-500' : 'text-[#11295B]'}`}>
                Teléfono
              </span>
            </div>


            <div className="relative w-full mt-4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <LicenciaConductor className={`w-6 h-6 ${errorLicencia ? 'text-red-500' : 'text-[#11295B]'}`} />
              </div>
              <input
                type="text"
                id="NroLicencia"
                name="NroLicencia"
                value={NroLicencia}
                placeholder="00000000"
                onChange={(e) => setNroLicencia(e.target.value)}
                className={`w-full pl-12 pr-4 pt-6 pb-2 rounded-lg border focus:outline-none focus:ring-1 ${
                  errorLicencia
                    ? 'border-red-500 text-red-500 placeholder:text-red-400 focus:ring-red-500'
                    : 'border-[#11295B] text-[#11295B] placeholder:text-[#11295B]/50 focus:ring-[#11295B]'
                }`}
              />
              {errorLicencia && mensajeErrorLicencia && (
                <p className="text-sm text-red-500 mt-1">{mensajeErrorLicencia}</p>
              )}
              <span className={`absolute left-12 top-[0.4rem] text-xs font-bold px-1 ${errorLicencia ? 'text-red-500' : 'text-[#11295B]'}`}>
                Nro de licencia
              </span>
            </div>


            <div className="relative w-full mt-4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Pencil className={`w-6 h-6 ${errorCategoria ? 'text-red-500' : 'text-[#11295B]'}`} />
              </div>
              <span className={`absolute left-12 top-[0.4rem] text-xs font-bold px-1 z-10 ${errorCategoria ? 'text-red-500' : 'text-[#11295B]'}`}>
                Categoría
              </span>
              <select
                id="categoria"
                name="categoria"
                value={categoriaLicencia}
                onChange={(e) => setCategoriaLicencia(e.target.value)}
                className={`w-full pt-6 pb-2 pl-12 pr-3 rounded-lg border focus:outline-none focus:ring-1 ${
                  errorCategoria
                    ? 'border-red-500 text-red-500 focus:ring-red-500'
                    : 'border-[#11295B] text-[#11295B] focus:ring-[#11295B]'
                }`}
                required
              >
                <option value="" disabled hidden>Seleccionar</option>
                <option value="Particular(P)">Particular(P)</option>
                <option value="Profesional A">Profesional A</option>
                <option value="Profesional B">Profesional B</option>
                <option value="Profesional C">Profesional C</option>
                <option value="Motorista (T)">Motorista (T)</option>
              </select>
              {errorCategoria && mensajeErrorCategoria && (
                <p className="text-sm text-red-500 mt-1">{mensajeErrorCategoria}</p>
              )}
            </div>


            {/* Última fila */}
            <div className="flex w-full mt-4 gap-4">
              {/* Fecha de emisión */}
              <div className="w-1/2 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Calendar className={`w-6 h-6 ${errorFechaEmision ? 'text-red-500' : 'text-[#11295B]'}`} />
                </div>
                <input
                  type="date"
                  id="fechaEmision"
                  value={fechaEmision}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (validarFechaEmision(value)) {
                      setFechaEmisionState(value);
                      setErrorFechaEmision(false);
                    } else {
                      setErrorFechaEmision(true);
                    }
                  }}
                  className={`w-full pl-12 pr-4 pt-6 pb-2 rounded-lg border ${
                    errorFechaEmision
                      ? 'border-red-500 text-red-500 placeholder:text-red-400 focus:ring-red-500'
                      : 'border-[#11295B] text-[#11295B] placeholder:text-[#11295B]/50 focus:ring-[#11295B]'
                  } focus:outline-none focus:ring-1`}
                />
              {errorFechaEmision && mensajeErrorFechaEmision && (
                <p className="text-sm text-red-500 mt-1">{mensajeErrorFechaEmision}</p>
              )}
                <span className={`absolute left-12 top-[0.4rem] text-xs font-bold px-1 z-10 ${errorFechaEmision ? 'text-red-500' : 'text-[#11295B]'}`}>
                  Fecha de emisión
                </span>
              </div>


              {/* Fecha de vencimiento */}
              <div className="w-1/2 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Calendar className={`w-6 h-6 ${errorFechaVencimiento ? 'text-red-500' : 'text-[#11295B]'}`} />
                </div>
                <input
                  type="date"
                  id="fechaVencimiento"
                  name="fechaVencimiento"
                  value={fechaVencimiento}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (validarFechaVencimiento(value)) {
                      setFechaVencimientoState(value);
                      setErrorFechaVencimiento(false);
                    } else {
                      setErrorFechaVencimiento(true);
                    }
                  }}
                  className={`w-full pl-12 pr-4 pt-6 pb-2 rounded-lg border ${
                    errorFechaVencimiento
                      ? 'border-red-500 text-red-500 placeholder:text-red-400 focus:ring-red-500'
                      : 'border-[#11295B] text-[#11295B] placeholder:text-[#11295B]/50 focus:ring-[#11295B]'
                  } focus:outline-none focus:ring-1`}
                />
                {errorFechaVencimiento && mensajeErrorFechaVencimiento && (
                  <p className="text-sm text-red-500 mt-1">{mensajeErrorFechaVencimiento}</p>
                )}
                <span className={`absolute left-12 top-[0.4rem] text-xs font-bold px-1 z-10 ${errorFechaVencimiento ? 'text-red-500' : 'text-[#11295B]'}`}>
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
            
            <div className="flex justify-end mt-12 pr-6">
            <button
              onClick={handleSubmit}
              className="bg-[#FFD180] hover:bg-[#ffc86c] text-white font-semibold px-8 py-2 rounded-full transition duration-200 ease-in-out"
            >
              Continuar
            </button>
            </div>
          </div>
        </div>
      
      </div>
  </div>
  );
}
