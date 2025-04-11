'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <header className={styles.headerTop}>
        <div className={styles.navigation}>
          <div className={styles.logo}>REDIBO</div>
          <div className={styles.buttons}>
            <button className={styles.navButton}>Botón1</button>
            <button className={styles.navButton}>Botón1</button>
            <button className={styles.navButton}>Botón1</button>
            <button className={styles.navButton}>Botón1</button>
            <button className={styles.navButton}>Botón1</button>
          </div>
          <div className={styles.authButtons}>
            <button className={styles.registerButton}>Registrarse</button>
            <button className={styles.loginButton}>Iniciar Sesión</button>
          </div>
        </div>
      </header>
      
      <main className={styles.main}>
        <div className={styles.contentLayout}>
          {/* SIDEBAR */}
          <aside className={styles.sidebar}>
            <nav>
              <ul className={styles.menu}>
                <li className={styles.menuItem}><a href="#introduccion">Introducción</a></li>
                <li className={styles.menuItem}><a href="#registro">Registro y Cuenta</a></li>
                <li className={styles.menuItem}><a href="#host">Obligaciones del Host</a></li>
                <li className={styles.menuItem}><a href="#renter">Obligaciones del Renter</a></li>
                <li className={styles.menuItem}><a href="#pagos">Pagos y Comisiones</a></li>
                <li className={styles.menuItem}><a href="#cancelaciones">Cancelaciones y Reembolsos</a></li>
                <li className={styles.menuItem}><a href="#seguro">Seguro y Responsabilidad</a></li>
                <li className={styles.menuItem}><a href="#conducta">Conducta Prohibida</a></li>
                <li className={styles.menuItem}><a href="#leyes">Ley Aplicable y Resolución de Conflictos</a></li>
                <li className={styles.menuItem}><a href="#contacto">Contacto</a></li>
              </ul>
            </nav>
          </aside>
              
          
          <div className={styles.content}>
            <h1 className={styles.title}>Términos y Condiciones REDIBO</h1>
            <p><strong>Última Actualización: 10 Marzo 2025</strong></p>

             
           
        
          
            <section className={styles.termSection} id="descripcion">
            <h2>Descripcion de la Plataforma</h2>

              <p>
                REDIBO es un servicio en línea diseñado para conectar propietarios de vehículos ("Hosts") con personas interesadas en alquilar
                autos ("Renters"). Nuestra misión es proporcionar una experiencia segura, cómoda y eficiente para el alquiler de vehículos, 
                asegurando que todas las transacciones sean claras y equitativas para ambas partes. A través de nuestra tecnología 
                innovadora, facilitamos el proceso de reserva, pago y comunicación, asegurando que cada alquiler sea una experiencia 
                satisfactoria y confiable.
              </p>
            </section>




            
            <section className={styles.termSection} id="introduccion">
              <h2>Introducción</h2>
              <p>
                Estos Términos y Condiciones establecen las reglas y regulaciones para el uso de REDIBO. Al acceder o utilizar nuestros servicios, los usuarios acuerdan cumplir con todas las disposiciones aquí descritas. El incumplimiento de estos términos puede resultar en la suspensión o terminación de la cuenta del usuario, además de otras acciones legales según corresponda.
              </p>
              <p>
                REDIBO es la Plataforma de una empresa registrada en Bolivia que opera como una plataforma intermediaria que facilita la conexión entre Hosts y Arrendatarios. No somos responsables por la calidad, seguridad o legalidad de los vehículos listados, ni garantizamos la exactitud de la información proporcionada por los usuarios.
              </p>
            </section>
            
            <section className={styles.termSection} id="registro">
              <h2>Registro y Cuenta</h2>
              <p><strong>Requisitos para Hosts:</strong></p>
             
              <ul className={styles.features}>
                <li>Ser mayor de 21 años</li>
                <li>Poseer un vehículo con documentación en regla</li>
                <li>Contar con SOAT vigente</li>
                <li>Presentar cédula de identidad o pasaporte válido</li>
                <li>Proporcionar documentación que acredite la propiedad del vehículo</li>
              </ul>
              <p><strong>Requisitos para Renters:</strong></p>

              <ul className={styles.features}>
                <li>Ser mayor de 21 años</li>
                <li>Licencia de conducir válida con al menos 2 años de antigüedad</li>
                <li>Documento de identidad oficial (cédula o pasaporte)</li>
                <li>Método de pago válido registrado en la plataforma</li>
              </ul>
              
              <p>
                <strong>Veracidad de la Información:</strong> Todos los usuarios se comprometen a proporcionar información 
                veraz y actualizada. REDIBO se reserva el derecho de verificar la identidad y documentación de los 
                usuarios, pudiendo solicitar documentación adicional cuando lo considere necesario.
              </p>
              
              <p>
                <strong>Protección de Cuenta:</strong> Cada usuario es responsable de mantener la confidencialidad
                de sus credenciales de acceso y de todas las actividades realizadas bajo su cuenta.
              </p>
            </section>

            <section className={styles.termSection} id="host">
              <h2>Obligaciones del Host</h2>
              <p><strong>Precisión en la información del vehículo:</strong></p>
              <p>El Host debe proporcionar información precisa y actualizada sobre su vehículo, incluyendo:</p>
              <ul className={styles.features}>
              <li>Marca, modelo y año</li>
              <li>Características principales y estado del vehículo</li>
              <li>Kilometraje actual</li>
              <li>Fotografías recientes y representativas</li>
              <li>Requisitos específicos de uso</li>
             </ul>
              
             <p><strong>Mantenimiento del vehículo:</strong></p>
              <p>El Host debe garantizar que su vehículo:</p>
              <ul className={styles.features}>
                <li>Está en condiciones óptimas de funcionamiento</li>
                <li>Cumple con todas las normativas técnicas vigentes</li>
                <li>Ha recibido mantenimiento regular según especificaciones del fabricante</li>
                <li>Cuenta con seguro obligatorio vigente (SOAT)</li>
                </ul>

              <p><strong>Entrega y documentación:</strong></p>
              <p>El Host debe:</p>
              <ul className={styles.features}>
              <li>Ser puntual en la entrega y recepción del vehículo</li>
                <li>Realizar una inspección documentada del estado del vehículo con el Renter</li>
                <li>Entregar el vehículo con el tanque de combustible lleno</li>
                <li>Proporcionar toda la documentación necesaria para circular legalmente</li>
                </ul>
                <p>
                <strong>Disponibilidad y comunicación:</strong> El Host debe mantener actualizado su calendario
                de disponibilidad y responder a las solicitudes y mensajes en un plazo máximo de 24 horas.
              </p>
            </section>
              
            <section className={styles.termSection} id="renter">
              
            <h2>Obligaciones del Renter</h2>
            <p><strong>Uso adecuado del vehículo:</strong></p>
             <p>El Renter se compromete a:</p>
              <ul className={styles.features}>
                <li>Utilizar el vehículo solo para los fines acordados</li>
                <li>No exceder el límite de kilometraje establecido (si aplica)</li>
                <li>No permitir que personas no autorizadas conduzcan el vehículo</li>
                <li>No transportar más pasajeros que los permitidos por el fabricante</li>
                <li>No utilizar el vehículo para actividades ilegales o peligrosas</li>
              </ul>
              
              <p><strong>Cuidado del vehículo:</strong></p>
              <p>El Renter debe:</p>
              <ul className={styles.features}>
                <li>Mantener el vehículo limpio y en buen estado</li>
                <li>Estacionar en lugares seguros</li>
                <li>Notificar inmediatamente al Host y a REDIBO de cualquier problema mecánico</li>
                <li>No realizar modificaciones al vehículo</li>
                <li>Devolver el vehículo con el mismo nivel de combustible que lo recibió</li>
              </ul>
              
              <p><strong>Respeto a las normas de tránsito:</strong></p>
              <p>El Renter es responsable de:</p>
              <ul className={styles.features}>
                <li>Cumplir todas las leyes y regulaciones de tránsito</li>
                <li>Pagar cualquier multa o sanción derivada de infracciones cometidas durante el periodo de alquiler</li>
                <li>Utilizar el cinturón de seguridad y asegurar que todos los pasajeros lo utilicen</li>
              </ul>
              
              <p>
                <strong>Devolución puntual:</strong> El Renter debe devolver el vehículo en la fecha, hora y lugar acordados,
                salvo acuerdo explícito con el Host para extender el periodo.
              </p>
            </section>
            <section className={styles.termSection} id="pagos">
            
              <h2>Pagos y Comisiones</h2>
              <p><strong>Estructura de precios:</strong></p>
              <ul className={styles.features}>
                <li>Los Hosts establecen libremente el precio diario de alquiler de sus vehículos</li>
                <li>REDIBO cobra una comisión del 15% sobre el precio total del alquiler al Host</li>
                <li>Los Renters pagan una tarifa de servicio del 10% adicional al precio establecido</li>
              </ul>
              
              <p><strong>Método de pago:</strong></p>
              <ul className={styles.features}>
                <li>Todos los pagos se realizan a través de la plataforma REDIBO</li>
                <li>Se aceptan tarjetas de crédito, débito y transferencias bancarias</li>
                <li>No se permiten pagos directos entre Host y Renter</li>
              </ul>
              
              <p><strong>Depósito de seguridad:</strong></p>
              <ul className={styles.features}>
                <li>Se requiere un depósito de seguridad para cada alquiler</li>
                <li>El monto es determinado por el valor del vehículo y la duración del alquiler</li>
                <li>Se bloquea en la tarjeta del Renter al momento de la reserva</li>
                <li>Se libera automáticamente 7 días después de finalizado el alquiler si no hay reclamaciones</li>
              </ul>
              
              <p><strong>Facturación:</strong></p>
              <ul className={styles.features}>
                <li>REDIBO emitirá factura electrónica por el servicio de intermediación</li>
                <li>Los Hosts son responsables de cumplir con sus obligaciones fiscales por los ingresos generados</li>
              </ul>
            </section>
            
        

            <section className={styles.termSection} id="cancelaciones">
              <h2>Cancelaciones y Reembolsos</h2>
              <p>
                En REDIBO entendemos que pueden surgir imprevistos. Por ello, ofrecemos políticas claras de cancelación.
                Los Renters pueden cancelar sus reservas hasta 48 horas antes del inicio del alquiler con un reembolso
                completo, excluyendo la comisión de servicio. Cancelaciones dentro de las 48 horas previas recibirán
                un 50% de reembolso, y si la cancelación ocurre en las últimas 12 horas, no se otorgará reembolso salvo
                casos justificados como emergencias verificadas.
              </p>
              <p>
                Los Hosts también deben actuar con responsabilidad. Si cancelan sin motivo justificado, pueden recibir
                sanciones como menor visibilidad en la plataforma o suspensión. Los reembolsos se procesan en un plazo
                de 3 a 7 días hábiles, dependiendo del método de pago utilizado.
              </p>
            </section>

            <section className={styles.termSection} id="seguro">
              <h2>Seguro y Responsabilidad</h2>
              <p>
                Todos los vehículos publicados en REDIBO deben contar con SOAT vigente. Además, recomendamos a los Hosts
                contar con seguro complementario contra daños y robos. El Renter es responsable por el uso correcto del
                vehículo y debe respetar todas las normativas de tránsito vigentes en Bolivia.
              </p>
              <p>
                En caso de accidente, el Renter debe reportar inmediatamente a Tránsito, al Host y a REDIBO. La
                responsabilidad financiera ante daños será evaluada según el informe oficial y el tipo de seguro
                contratado por el Host. REDIBO actúa como intermediario, pero no cubre daños ni actúa como aseguradora.
              </p>
            </section>
            
            <section className={styles.termSection} id="conducta">
              <h2>Conducta Prohibida</h2>
              <p>
                Para asegurar una experiencia segura, REDIBO prohíbe estrictamente las siguientes conductas:
                uso de información falsa, uso de vehículos para fines ilícitos, daño intencional al vehículo,
                conducta ofensiva hacia otros usuarios, y evasión de pagos o políticas.
              </p>
              <p>
                Cualquier usuario que infrinja estas normas puede ser suspendido temporal o permanentemente,
                y en casos graves será reportado a las autoridades competentes del Estado Plurinacional de Bolivia.
              </p>
            </section>

            <section className={styles.termSection} id="leyes">
              <h2>Ley Aplicable y Resolución de Conflictos</h2>
              <p>
                Estos Términos y Condiciones se rigen por la normativa vigente en Bolivia, en especial el Código Civil
                y la Ley General de Transporte. Ante cualquier disputa, REDIBO fomentará la resolución mediante
                mediación. Si no se llega a un acuerdo, el caso podrá ser presentado ante los tribunales ordinarios
                bolivianos con jurisdicción en la ciudad de La Paz.
              </p>
            </section>

            <section className={styles.termSection} id="contacto">
              <h2>Contacto</h2>
              <p>
                Si tienes consultas, sugerencias o deseas reportar un problema, puedes comunicarte con nosotros a través de los siguientes medios oficiales:
              </p>
              <ul className={styles.features}>
                <li>📧 Correo: <a href="mailto:soporte@redibo.com.bo">soporte@redibo.com.bo</a></li>
                <li>📞 WhatsApp: <a href="https://wa.me/59170000000" target="_blank" rel="noopener noreferrer">(+591) 70000000</a></li>
                <li>📍 Dirección: <a href="https://www.google.com/maps?q=Edificio+REDIBO,+Cochabamba,+Bolivia" target="_blank" rel="noopener noreferrer">
                  America, Edificio REDIBO, Cochabamba - Bolivia</a>
                </li>
                <li>⏰ Horario: Lunes a viernes de 08:30 a 18:30</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <Link href="/terminos">
          <span className={styles.footerLink}>Términos y condiciones</span>
        </Link>
      </footer>
    </div>
  );
}