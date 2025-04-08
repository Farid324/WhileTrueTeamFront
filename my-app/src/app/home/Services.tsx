import React from 'react';
import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <header className={styles.headerTop}>
        <div className={styles.logo}>REDIBO</div>
        <nav className={styles.navigation}>
          <div className={styles.buttons}>
            <button className={styles.navButton}>Botón1</button>
            <button className={styles.navButton}>Botón1</button>
            <button className={styles.navButton}>Botón1</button>
            <button className={styles.navButton}>Botón1</button>
            <button className={styles.navButton}>Botón1</button>
          </div>
          <div className={styles.authButtons}>
            <Link href="/registro">
              <button className={styles.registerButton}>Registrarse</button>
            </Link>
            <Link href="/login">
              <button className={styles.loginButton}>Iniciar Sesión</button>
            </Link>
          </div>
        </nav>
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
              <li className={styles.menuItem}>Catálogo de Servicios</li>
              <li className={styles.menuItem}>Alquiler de Vehículos</li>
              <li className={styles.menuItem}>Administración de Flota</li>
              <li className={styles.menuItem}>Seguros y Asistencia</li>
              <li className={styles.menuItem}>Mantenimiento</li>
              <li className={styles.menuItem}>Servicios Premium</li>
              <li className={styles.menuItem}>Soporte Técnico</li>
              <li className={styles.menuItem}>Preguntas Frecuentes</li>
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
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.termsContainer}>
          <Link href="/terminos">
            <span className={styles.footerLink}>Términos y condiciones</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}