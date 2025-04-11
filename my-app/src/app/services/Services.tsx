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
              REDIBO ofrece soluciones integrales para conectar propietarios de vehículos con personas
              interesadas en alquilarlos, garantizando una experiencia segura y confiable para ambas partes.
              Descubre nuestros servicios diseñados para satisfacer tus necesidades.
            </p>
            
            <section className={styles.termSection} id="registro">
              <h2>Registro y Cuenta</h2>
              <p>
                Para utilizar REDIBO, los usuarios deben registrarse proporcionando información personal verídica. El usuario es responsable de mantener la confidencialidad de su cuenta y contraseña. Cualquier actividad sospechosa debe ser notificada de inmediato a REDIBO.
              </p>
              <p>
                No se permite la creación de cuentas falsas ni el uso de cuentas de terceros sin autorización. REDIBO se reserva el derecho de suspender cuentas que infrinjan nuestras políticas.
              </p>
            </section>

            <section className={styles.termSection} id="host">
              <h2>Obligaciones del Host</h2>
              <p>
                Los Hosts deben garantizar que los vehículos ofrecidos estén en buen estado mecánico, cuenten con todos los documentos requeridos por la normativa boliviana (incluyendo el SOAT vigente) y que la información publicada sea precisa.
              </p>
              <p>
                Asimismo, los Hosts deben responder con prontitud a solicitudes de alquiler, mantener sus calendarios actualizados y cumplir con las reservas aceptadas. Cualquier incumplimiento puede conllevar sanciones por parte de REDIBO.
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