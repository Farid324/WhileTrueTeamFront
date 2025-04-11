/*
'use client';
import styles from './LoginModal.module.css';

export default function LoginModal({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <svg  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.close} onClick={onClose}>
          <path fill-rule="evenodd" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" clip-rule = "evenodd"/>
        </svg>

        <h1 className={styles.tituloPrincipal}>
          Bienvenido a <br />
          <span className={styles.tituloRedibo}>REDIBO</span> <br />
          <span className={styles.tituloAzul}>Iniciar sesión</span>
        </h1>

        <div className={styles.inputBase}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className = {styles.iconoCorreo} >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          <div className={styles.inputTexto}>
            <h4 className={styles.textoCC}>Correo</h4>
            <input
              className={styles.input}
              type="text"
              placeholder="Ingrese correo electrónico"
            />
          </div>
        </div>

        <div className={styles.inputBase}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.iconoContrasena}>
            <path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clip-rule="evenodd" />
          </svg>
          <div className={styles.inputTexto}>
          <h4 className={styles.textoCC}>Contraseña</h4>
          <input
            className={styles.input}
            type="password"
            placeholder="Ingrese contraseña"
          />
          </div>
        </div>

        <button className={styles.button}>Iniciar sesión</button>
        <button className={styles.recuperarContrasena} onClick={onClose}>Recuperar Contraseña</button>
        <h5 className={styles.text1}>¿No tienes una cuenta? <button className={styles.registrarse} onClick={onClose}>Registrarse</button></h5>
          Cerrar
        
      </div>
    </div>
  );
}
*/
'use client';

export default function LoginModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-black/20">
      <div className="w-[34rem] h-auto shadow-[0_0px_20px_rgba(0,0,0,0.72)] p-10 rounded-[35px] bg-[var(--blanco)]">
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="ml-auto block w-fit h-[30px] cursor-pointer text-[var(--azul-oscuro)] font-[var(--tamaño-black)]"
          onClick={onClose}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
          />
        </svg>
    
        <h1 className="text-center text-[var(--azul-oscuro)] text-[1.44rem] font-medium leading-normal mb-4" style={{ fontFamily: 'var(--fuente-principal)', textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>
          Bienvenido a <br />
          <span className="text-[var(--naranja)] font-[var(--tamaño-black)] text-[2.488rem]" style={{ fontFamily: 'var(--fuente-principal)', textShadow: '1px 2px 2px rgba(0,0,0,0.3)' }}>
            REDIBO
          </span>
          <br />
          <span className="text-[var(--azul-oscuro)] font-[var(--tamaño-regular)] text-[2.074rem] uppercase" style={{ fontFamily: 'var(--fuente-principal)', textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>
            Iniciar sesión
          </span>
        </h1>

        <div className="flex shadow-[2px_2px_4px_rgba(0,0,0,0.4)] mb-6 rounded-lg border-2 border-solid border-[var(--negro)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[var(--azul-oscuro)] w-[30px] h-[30px] ml-4 mr-0 my-4"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          <div className="flex flex-col w-full">
            <h4 className="text-[var(--azul-oscuro)] text-[0.8rem] font-[var(--tamaña-bold)] indent-[1rem] mt-2" style={{ fontFamily: 'var(--fuente-principal)' }}>
              Correo
            </h4>
            <input
              type="text"
              placeholder="Ingrese correo electrónico"
              className="w-full h-4 text-[var(--azul-oscuro)] p-4 rounded-lg"
              style={{ fontFamily: 'var(--fuente-principal)', fontWeight: 'var(--tamaña-bold)', outline: 'none' }}
            />
          </div>
        </div>

        <div className="flex shadow-[2px_2px_4px_rgba(0,0,0,0.4)] mb-6 rounded-lg border-2 border-solid border-[var(--negro)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[var(--azul-oscuro)] w-[30px] h-[30px] ml-4 mr-0 my-4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
            />
          </svg>
          <div className="flex flex-col w-full">
            <h4 className="text-[var(--azul-oscuro)] text-[0.8rem] font-[var(--tamaña-bold)] indent-[1rem] mt-2" style={{ fontFamily: 'var(--fuente-principal)' }}>
              Contraseña
            </h4>
            <input
              type="password"
              placeholder="Ingrese contraseña"
              className="w-full h-4 text-[var(--azul-oscuro)] p-4 rounded-lg"
              style={{ fontFamily: 'var(--fuente-principal)', fontWeight: 'var(--tamaña-bold)', outline: 'none' }}
            />
          </div>
        </div>

        <button className="w-full bg-[rgba(252,163,17,0.5)] shadow-[0_0px_4px_rgba(0,0,0,0.25)] text-[var(--blanco)] cursor-pointer mt-4 p-4 rounded-[40px] border-none font-[var(--tamaña-bold)]" style={{ fontFamily: 'var(--fuente-principal)' }}>
          Iniciar sesión
        </button>

        <button
          className="text-[var(--azul-oscuro)] underline cursor-pointer w-full transition-colors duration-200 my-4 border-none"
          onClick={onClose}
          style={{ background: 'none', fontFamily: 'var(--fuente-principal)' }}
          onMouseOver={(e) => (e.currentTarget.style.color = 'var(--naranja)')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'var(--azul-oscuro)')}
        >
          Recuperar Contraseña
        </button>

        <h5 className="text-center text-[var(--azul-oscuro)]" style={{ fontFamily: 'var(--fuente-principal)' }}>
          ¿No tienes una cuenta?{' '}
          <button
            className="underline cursor-pointer transition-colors duration-200"
            onClick={onClose}
            style={{ fontFamily: 'var(--fuente-principal)', color: 'var(--azul-oscuro)' }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--naranja)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--azul-oscuro)')}
          >
            Registrarse
          </button>
        </h5>
      </div>
    </div>
  );
}
