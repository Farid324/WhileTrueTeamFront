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
            <ul className={styles.menu}>
              <li><a href="#introduccion" className={styles.menuItem}>Introducción</a></li>
              <li><a href="#registro" className={styles.menuItem}>Registro y Cuenta</a></li>
              <li><a href="#host" className={styles.menuItem}>Obligaciones del Host</a></li>
              <li><a href="#renter" className={styles.menuItem}>Obligaciones del Renter</a></li>
              <li><a href="#pagos" className={styles.menuItem}>Pagos y Comisiones</a></li>
              <li><a href="#cancelaciones" className={styles.menuItem}>Cancelaciones y Reembolsos</a></li>
              <li><a href="#seguro" className={styles.menuItem}>Seguro y Responsabilidad</a></li>
              <li><a href="#conducta" className={styles.menuItem}>Conducta Prohibida</a></li>
              <li><a href="#leyes" className={styles.menuItem}>Ley Aplicable y Resolución de Conflictos</a></li>
              <li><a href="#contacto" className={styles.menuItem}>Contacto</a></li>
            </ul>
          </aside>
          
          <div className={styles.content}>
            <h1 className={styles.title}>Servicios REDIBO</h1>
            <p className={styles.introduction}>
                REDIBO es un servicio en línea diseñado para conectar propietarios de vehículos ("Hosts") con personas interesadas en alquilar
                autos ("Renters"). Nuestra misión es proporcionar una experiencia segura, cómoda y eficiente para el alquiler de vehículos, 
                asegurando que todas las transacciones sean claras y equitativas para ambas partes. A través de nuestra tecnología 
                innovadora, facilitamos el proceso de reserva, pago y comunicación, asegurando que cada alquiler sea una experiencia 
                satisfactoria y confiable.
            </p>
            
            <section className={styles.termSection} id="registro">
              <h2>Registro y Cuenta</h2>
              <p><strong> Requisitos para Hosts:</strong></p>
             
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

              <p><strong>Mantenimiento del vehículo:</strong></p>
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
              <p>
                Los Renters deben utilizar los vehículos de forma responsable, respetando las leyes de tránsito y devolviéndolos en las condiciones acordadas. Está prohibido usar los vehículos para fines ilícitos o actividades riesgosas.
              </p>
              <p>
                En caso de daño o accidente, el Renter debe reportarlo inmediatamente al Host y a REDIBO. El Renter será responsable por cualquier daño causado si no se encuentra cubierto por el seguro correspondiente.
              </p>
            </section>

            <section className={styles.termSection} id="pagos">
              <h2>Pagos y Comisiones</h2>
              <p>
                REDIBO cobra una comisión por cada transacción completada en la plataforma. Los precios mostrados a los Renters incluyen esta comisión, que es destinada al mantenimiento, soporte y mejora continua del sistema.
              </p>
              <p>
                Todos los pagos se realizan mediante canales seguros habilitados por REDIBO. Los Hosts recibirán el pago correspondiente por el alquiler después de descontar la comisión y una vez verificada la finalización exitosa del servicio.
              </p>
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