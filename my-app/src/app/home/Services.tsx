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

      <header className={styles.headerFilters}>
        <div className={styles.filtersContainer}>
          <div className={styles.filters}>
            <span className={styles.filterItem}>Filtro 1</span>
            <span className={styles.filterItem}>Filtro 1</span>
            <span className={styles.filterItem}>Filtro 1</span>
            <span className={styles.filterItem}>Filtro 1</span>
            <span className={styles.filterItem}>Filtro 1</span>
            <span className={styles.filterItem}>Filtro 1</span>
            <span className={styles.filterItem}>Filtro 1</span>
            <span className={styles.filterItem}>Filtro 1</span>
          </div>
          <button className={styles.filtersButton}>Filtros</button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.contentLayout}>
          <aside className={styles.sidebar}>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>Introducción</li>
              <li className={styles.menuItem}>Registro y Cuenta</li>
              <li className={styles.menuItem}>Obligaciones del Host</li>
              <li className={styles.menuItem}>Obligaciones del renter</li>
              <li className={styles.menuItem}>Pagos y Comisiones</li>
              <li className={styles.menuItem}>Cancelaciones y Reembolsos</li>
              <li className={styles.menuItem}>Seguro y Responsabilidad</li>
              <li className={styles.menuItem}>Conducta prohibida</li>
              <li className={styles.menuItem}>Ley Aplicable y Resolución de conflictos</li>
              <li className={styles.menuItem}>Contacto</li>
            </ul>
          </aside>
          
          <div className={styles.content}>
            <h1 className={styles.title}>Servicios REDIBO</h1>
            <p className={styles.introduction}>
              REDIBO ofrece soluciones integrales para conectar propietarios de vehículos con personas
              interesadas en alquilarlos, garantizando una experiencia segura y confiable para ambas partes.
              Descubre nuestros servicios diseñados para satisfacer tus necesidades.
            </p>
            
            <section className={styles.serviceSection}>
              <h2>Alquiler de Vehículos</h2>
              <p>
                Nuestro servicio principal permite a los propietarios listar sus vehículos para alquiler
                y a los arrendatarios encontrar opciones que se ajusten a sus necesidades. Facilitamos
                todo el proceso desde la reserva hasta la devolución del vehículo.
              </p>
              <ul className={styles.features}>
                <li>Búsqueda personalizada de vehículos</li>
                <li>Sistema de reservas intuitivo</li>
                <li>Verificación de usuarios</li>
                <li>Proceso de pago seguro</li>
                <li>Evaluaciones y reseñas</li>
              </ul>
            </section>
            
            <section className={styles.serviceSection}>
              <h2>Administración de Flota</h2>
              <p>
                Para propietarios con múltiples vehículos, ofrecemos herramientas avanzadas de gestión
                que permiten monitorear el estado, disponibilidad y rentabilidad de cada unidad.
              </p>
              <ul className={styles.features}>
                <li>Panel de control centralizado</li>
                <li>Seguimiento GPS de vehículos</li>
                <li>Reportes de rendimiento</li>
                <li>Programación de mantenimiento</li>
                <li>Gestión de documentos</li>
              </ul>
            </section>
            
            <section className={styles.serviceSection}>
              <h2>Seguros y Asistencia</h2>
              <p>
                Proporcionamos cobertura integral y asistencia en carretera para garantizar
                tranquilidad durante todo el proceso de alquiler.
              </p>
              <ul className={styles.features}>
                <li>Seguros contra daños y robos</li>
                <li>Asistencia 24/7 en carretera</li>
                <li>Servicio de grúa</li>
                <li>Vehículo de reemplazo</li>
                <li>Gestión de incidentes</li>
              </ul>
            </section>

            <section className={styles.serviceSection}>
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

            <section className={styles.serviceSection}>
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
            
            <section className={styles.serviceSection}>
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

            <section className={styles.serviceSection}>
              <h2>Ley Aplicable y Resolución de Conflictos</h2>
              <p>
                Estos Términos y Condiciones se rigen por la normativa vigente en Bolivia, en especial el Código Civil
                y la Ley General de Transporte. Ante cualquier disputa, REDIBO fomentará la resolución mediante
                mediación. Si no se llega a un acuerdo, el caso podrá ser presentado ante los tribunales ordinarios
                bolivianos con jurisdicción en la ciudad de La Paz.
              </p>
            </section>

            <section className={styles.serviceSection}>
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