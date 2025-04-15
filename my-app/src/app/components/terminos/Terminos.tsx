'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Terminos() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -60% 0px',
        threshold: 0.2
      }
    );
  
    sections.forEach(section => observer.observe(section));
  
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
  

  return (
    <div className="flex flex-col min-h-screen font-family: var(--fuente-principal)">
      <header className="bg-[var(--blanco)] px-[10rem] py-4 border-b-[2px] border-black/5 fixed top-0 left-0 right-0 z-[1000]">
        <div className="flex justify-between items-center">
          <div
            className="text-[2.1rem] text-[var(--naranja)] font-[var(--tamaño-black)]"
            style={{
              fontFamily: 'var(--fuente-principal)',
              textShadow: '1px 2px 2px rgba(0,0,0,0.3)'
            }}
          >
            REDIBO
          </div>


          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                className={`text-[var(--azul-oscuro)] font-[var(--tamaño-regular)] py-[0.2rem] px-[2.8rem] border-2 border-[#00000033] bg-[var(--blanco)] cursor-pointer relative
                  ${i === 0 ? 'rounded-l-full border-r-0 after:absolute after:top-[25%] after:right-0 after:h-[50%] after:w-px after:bg-[#00000033]' : ''}
                  ${i > 0 && i < 4 ? 'border-x-0 relative before:absolute before:top-[25%] before:left-0 before:h-[50%] before:w-px before:bg-[#00000033] after:absolute after:top-[25%] after:right-0 after:h-[50%] after:w-px after:bg-[#00000033]' : ''}
                  ${i === 4 ? 'rounded-r-full border-l-0 relative before:absolute before:top-[25%] before:left-0 before:h-[50%] before:w-px before:bg-[#00000033]' : ''}
                `}
              >
                Botón{i + 1}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button className="bg-[var(--naranja-46)] text-[var(--azul-oscuro)] font-[var(--tamaño-regular)] rounded-l-[20px] py-2 px-8 border-none cursor-pointer">
              Registrarse
            </button>
            <button className="bg-[#FCA311] text-[var(--blanco)] font-[var(--tamaña-bold)] rounded-r-[20px] py-2 px-4 border-none cursor-pointer">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </header>

      
      <main className="flex-1 bg-[var(--blanco)] pt-[4.5rem] px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-start gap-8 max-w-[1200px] mx-auto">
          <aside className="flex-none w-full md:w-[260px] bg-[var(--hueso)] p-[2.2rem] md:ml-[-70px] sticky top-[100px] h-fit rounded-[8px] shadow-[var(--sombra)]">
            <nav>
              <ul className="list-none p-0 m-0">
                {[
                  ['introduccion', 'Introducción'],
                  ['registro', 'Registro y Cuenta'],
                  ['host', 'Obligaciones del Host'],
                  ['renter', 'Obligaciones del Renter'],
                  ['pagos', 'Pagos y Comisiones'],
                  ['cancelaciones', 'Cancelaciones y Reembolsos'],
                  ['seguro', 'Seguro y Responsabilidad'],
                  ['conducta', 'Conducta Prohibida'],
                  ['leyes', 'Ley Aplicable y Resolución de Conflictos'],
                  ['contacto', 'Contacto']
                ].map(([id, label]) => (
                  <li
                    key={id}
                    className={`py-[0.4rem] px-[0.75rem] mb-[0.3rem] text-[0.95rem] leading-[1.2] rounded-[4px] transition-colors ${
                      activeSection === id
                        ? 'bg-[var(--naranja-46)] font-[var(--tamaña-bold)] underline'
                        : 'text-[var(--azul-oscuro)] hover:bg-[var(--naranja-46)]'
                    }`}
                  >
                    <a href={`#${id}`} className="text-inherit no-underline hover:underline block">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

              
          
          <div className="flex-1 bg-[var(--blanco)] p-8 rounded-md">
            <h1 className="text-[2.4rem] font-[var(--tamaña-bold)] text-center text-[var(--negro)] mb-4">Términos y Condiciones REDIBO</h1>
            <p className="text-sm text-[var(--negro)] font-[var(--tamaño-regular)] mb-6">Última Actualización: 10 Marzo 2025</p>
             
               
          
            <section id="descripcion" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Descripción de la Plataforma</h2>
              <p className="text-[var(--negro)] leading-relaxed mb-4 font-[var(--tamaño-regular)]">
                REDIBO es un servicio en línea diseñado para conectar propietarios de vehículos ("Hosts") con personas interesadas en alquilar
                autos ("Renters"). Nuestra misión es proporcionar una experiencia segura, cómoda y eficiente para el alquiler de vehículos, 
                asegurando que todas las transacciones sean claras y equitativas para ambas partes. A través de nuestra tecnología 
                innovadora, facilitamos el proceso de reserva, pago y comunicación, asegurando que cada alquiler sea una experiencia 
                satisfactoria y confiable.
              </p>
            </section>

            <section id="introduccion" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Introducción</h2>
              <p className="text-[var(--negro)] leading-relaxed mb-4">
                Estos Términos y Condiciones establecen las reglas y regulaciones para el uso de REDIBO.
                Al acceder o utilizar nuestros servicios, los usuarios acuerdan cumplir con todas las disposiciones aquí descritas.
                El incumplimiento de estos términos puede resultar en la suspensión o terminación de la cuenta del usuario,
                además de otras acciones legales según corresponda.
              </p>
              <p className="text-[var(--negro)] leading-relaxed mb-4">
                REDIBO es la Plataforma de una empresa registrada en Bolivia que opera como una plataforma intermediaria que facilita
                la conexión entre Hosts y Arrendatarios. No somos responsables por la calidad, seguridad o legalidad de los vehículos
                listados, ni garantizamos la exactitud de la información proporcionada por los usuarios.
              </p>
            </section>

            <section id="registro" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Registro y Cuenta</h2>
              <p className="font-semibold text-[var(--negro)] mb-2">Requisitos para Hosts:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Ser mayor de 21 años</li>
                <li>Poseer un vehículo con documentación en regla</li>
                <li>Contar con SOAT vigente</li>
                <li>Presentar cédula de identidad o pasaporte válido</li>
                <li>Proporcionar documentación que acredite la propiedad del vehículo</li>
              </ul>

              <p className="font-semibold text-[var(--negro)] mb-2">Requisitos para Renters:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Ser mayor de 21 años</li>
                <li>Licencia de conducir válida con al menos 2 años de antigüedad</li>
                <li>Documento de identidad oficial (cédula o pasaporte)</li>
                <li>Método de pago válido registrado en la plataforma</li>
              </ul>

              <p className="text-[var(--negro)] leading-relaxed mb-4">
                <strong className="font-semibold">Veracidad de la Información:</strong> Todos los usuarios se comprometen a proporcionar
                información veraz y actualizada. REDIBO se reserva el derecho de verificar la identidad y documentación de los usuarios,
                pudiendo solicitar documentación adicional cuando lo considere necesario.
              </p>

              <p className="text-[var(--negro)] leading-relaxed mb-4">
                <strong className="font-semibold">Protección de Cuenta:</strong> Cada usuario es responsable de mantener la confidencialidad
                de sus credenciales de acceso y de todas las actividades realizadas bajo su cuenta.
              </p>
            </section>


            <section id="host" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Obligaciones del Host</h2>

              <p className="font-semibold text-[var(--negro)] mb-2">Precisión en la información del vehículo:</p>
              <p className="text-[var(--negro)] leading-relaxed mb-2">El Host debe proporcionar información precisa y actualizada sobre su vehículo, incluyendo:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Marca, modelo y año</li>
                <li>Características principales y estado del vehículo</li>
                <li>Kilometraje actual</li>
                <li>Fotografías recientes y representativas</li>
                <li>Requisitos específicos de uso</li>
              </ul>

              <p className="font-semibold text-[var(--negro)] mb-2">Mantenimiento del vehículo:</p>
              <p className="text-[var(--negro)] leading-relaxed mb-2">El Host debe garantizar que su vehículo:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Está en condiciones óptimas de funcionamiento</li>
                <li>Cumple con todas las normativas técnicas vigentes</li>
                <li>Ha recibido mantenimiento regular según especificaciones del fabricante</li>
                <li>Cuenta con seguro obligatorio vigente (SOAT)</li>
              </ul>

              <p className="font-semibold text-[var(--negro)] mb-2">Entrega y documentación:</p>
              <p className="text-[var(--negro)] leading-relaxed mb-2">El Host debe:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Ser puntual en la entrega y recepción del vehículo</li>
                <li>Realizar una inspección documentada del estado del vehículo con el Renter</li>
                <li>Entregar el vehículo con el tanque de combustible lleno</li>
                <li>Proporcionar toda la documentación necesaria para circular legalmente</li>
              </ul>

              <p className="text-[var(--negro)] leading-relaxed mb-4">
                <strong className="font-semibold">Disponibilidad y comunicación:</strong> El Host debe mantener actualizado su calendario
                de disponibilidad y responder a las solicitudes y mensajes en un plazo máximo de 24 horas.
              </p>
            </section>

              
            <section id="renter" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Obligaciones del Renter</h2>

              <p className="font-semibold text-[var(--negro)] mb-2">Uso adecuado del vehículo:</p>
              <p className="text-[var(--negro)] leading-relaxed mb-2">El Renter se compromete a:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Utilizar el vehículo solo para los fines acordados</li>
                <li>No exceder el límite de kilometraje establecido (si aplica)</li>
                <li>No permitir que personas no autorizadas conduzcan el vehículo</li>
                <li>No transportar más pasajeros que los permitidos por el fabricante</li>
                <li>No utilizar el vehículo para actividades ilegales o peligrosas</li>
              </ul>

              <p className="font-semibold text-[var(--negro)] mb-2">Cuidado del vehículo:</p>
              <p className="text-[var(--negro)] leading-relaxed mb-2">El Renter debe:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Mantener el vehículo limpio y en buen estado</li>
                <li>Estacionar en lugares seguros</li>
                <li>Notificar inmediatamente al Host y a REDIBO de cualquier problema mecánico</li>
                <li>No realizar modificaciones al vehículo</li>
                <li>Devolver el vehículo con el mismo nivel de combustible que lo recibió</li>
              </ul>

              <p className="font-semibold text-[var(--negro)] mb-2">Respeto a las normas de tránsito:</p>
              <p className="text-[var(--negro)] leading-relaxed mb-2">El Renter es responsable de:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Cumplir todas las leyes y regulaciones de tránsito</li>
                <li>Pagar cualquier multa o sanción derivada de infracciones cometidas durante el periodo de alquiler</li>
                <li>Utilizar el cinturón de seguridad y asegurar que todos los pasajeros lo utilicen</li>
              </ul>

              <p className="text-[var(--negro)] leading-relaxed mb-4">
                <strong className="font-semibold">Devolución puntual:</strong> El Renter debe devolver el vehículo en la fecha, hora y lugar acordados,
                salvo acuerdo explícito con el Host para extender el periodo.
              </p>
            </section>

            
            <section id="pagos" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Pagos y Comisiones</h2>

              <p className="font-semibold text-[var(--negro)] mb-2">Estructura de precios:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Los Hosts establecen libremente el precio diario de alquiler de sus vehículos</li>
                <li>REDIBO cobra una comisión del 15% sobre el precio total del alquiler al Host</li>
                <li>Los Renters pagan una tarifa de servicio del 10% adicional al precio establecido</li>
              </ul>

              <p className="font-semibold text-[var(--negro)] mb-2">Método de pago:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Todos los pagos se realizan a través de la plataforma REDIBO</li>
                <li>Se aceptan tarjetas de crédito, débito y transferencias bancarias</li>
                <li>No se permiten pagos directos entre Host y Renter</li>
              </ul>

              <p className="font-semibold text-[var(--negro)] mb-2">Depósito de seguridad:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>Se requiere un depósito de seguridad para cada alquiler</li>
                <li>El monto es determinado por el valor del vehículo y la duración del alquiler</li>
                <li>Se bloquea en la tarjeta del Renter al momento de la reserva</li>
                <li>Se libera automáticamente 7 días después de finalizado el alquiler si no hay reclamaciones</li>
              </ul>

              <p className="font-semibold text-[var(--negro)] mb-2">Facturación:</p>
              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2 mb-4">
                <li>REDIBO emitirá factura electrónica por el servicio de intermediación</li>
                <li>Los Hosts son responsables de cumplir con sus obligaciones fiscales por los ingresos generados</li>
              </ul>
            </section>

            
            <section id="cancelaciones" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Cancelaciones y Reembolsos</h2>

              <p className="text-[var(--negro)] leading-relaxed mb-4">
                En REDIBO entendemos que pueden surgir imprevistos. Por ello, ofrecemos políticas claras de cancelación.
                Los Renters pueden cancelar sus reservas hasta 48 horas antes del inicio del alquiler con un reembolso
                completo, excluyendo la comisión de servicio. Cancelaciones dentro de las 48 horas previas recibirán
                un 50% de reembolso, y si la cancelación ocurre en las últimas 12 horas, no se otorgará reembolso salvo
                casos justificados como emergencias verificadas.
              </p>
              <p className="text-[var(--negro)] leading-relaxed mb-4">
                Los Hosts también deben actuar con responsabilidad. Si cancelan sin motivo justificado, pueden recibir
                sanciones como menor visibilidad en la plataforma o suspensión. Los reembolsos se procesan en un plazo
                de 3 a 7 días hábiles, dependiendo del método de pago utilizado.
              </p>
            </section>


            <section id="seguro" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Seguro y Responsabilidad</h2>

              <p className="text-[var(--negro)] leading-relaxed mb-4">
                Todos los vehículos publicados en REDIBO deben contar con SOAT vigente. Además, recomendamos a los Hosts
                contar con seguro complementario contra daños y robos. El Renter es responsable por el uso correcto del
                vehículo y debe respetar todas las normativas de tránsito vigentes en Bolivia.
              </p>
              <p className="text-[var(--negro)] leading-relaxed mb-4">
                En caso de accidente, el Renter debe reportar inmediatamente a Tránsito, al Host y a REDIBO. La
                responsabilidad financiera ante daños será evaluada según el informe oficial y el tipo de seguro
                contratado por el Host. REDIBO actúa como intermediario, pero no cubre daños ni actúa como aseguradora.
              </p>
            </section>

            
            <section id="conducta" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Conducta Prohibida</h2>

              <p className="text-[var(--negro)] leading-relaxed mb-4">
                Para asegurar una experiencia segura, REDIBO prohíbe estrictamente las siguientes conductas:
                uso de información falsa, uso de vehículos para fines ilícitos, daño intencional al vehículo,
                conducta ofensiva hacia otros usuarios, y evasión de pagos o políticas.
              </p>
              <p className="text-[var(--negro)] leading-relaxed mb-4">
                Cualquier usuario que infrinja estas normas puede ser suspendido temporal o permanentemente,
                y en casos graves será reportado a las autoridades competentes del Estado Plurinacional de Bolivia.
              </p>
            </section>


            <section id="leyes" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Ley Aplicable y Resolución de Conflictos</h2>

              <p className="text-[var(--negro)] leading-relaxed mb-4">
                Estos Términos y Condiciones se rigen por la normativa vigente en Bolivia, en especial el Código Civil
                y la Ley General de Transporte. Ante cualquier disputa, REDIBO fomentará la resolución mediante
                mediación. Si no se llega a un acuerdo, el caso podrá ser presentado ante los tribunales ordinarios
                bolivianos con jurisdicción en la ciudad de La Paz.
              </p>
            </section>


            <section id="contacto" className="mb-8 scroll-mt-[104.4px]">
              <h2 className="text-[1.8rem] font-[var(--tamaña-bold)] text-left text-[var(--negro)] mb-4 mt-8">Contacto</h2>

              <p className="text-[var(--negro)] leading-relaxed mb-4">
                Si tienes consultas, sugerencias o deseas reportar un problema, puedes comunicarte con nosotros a través de los siguientes medios oficiales:
              </p>

              <ul className="list-disc pl-6 text-[var(--negro)] space-y-2">
                <li>
                  📧 Correo: <a href="mailto:soporte@redibo.com.bo" className="underline text-[var(--azul-oscuro)] hover:text-[var(--naranja)]">
                    soporte@redibo.com.bo
                  </a>
                </li>
                <li>
                  📞 WhatsApp: <a href="https://wa.me/59170000000" target="_blank" rel="noopener noreferrer" className="underline text-[var(--azul-oscuro)] hover:text-[var(--naranja)]">
                    (+591) 70000000
                  </a>
                </li>
                <li>
                  📍 Dirección: <a href="https://www.google.com/maps?q=Edificio+REDIBO,+Cochabamba,+Bolivia" target="_blank" rel="noopener noreferrer" className="underline text-[var(--azul-oscuro)] hover:text-[var(--naranja)]">
                    América, Edificio REDIBO, Cochabamba - Bolivia
                  </a>
                </li>
                <li>⏰ Horario: Lunes a viernes de 08:30 a 18:30</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      
      <footer className="p-4 bg-[var(--hueso)] text-right font-[var(--fuente-principal)]">
        <Link href="/terminos">
          <span className="underline cursor-pointer text-[var(--negro)]">Términos y condiciones</span>
        </Link>
      </footer>
    </div>
  );
}