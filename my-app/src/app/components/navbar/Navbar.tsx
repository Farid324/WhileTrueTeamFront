import styles from './Navbar.module.css';

export default function Navbar({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <div className={`${styles.navbarWrapper} px-10 md:px-40 py-4 border-b border-[rgba(0,0,0,0.05)]`}>
      <nav className="flex justify-between items-center">
        <h1 className={`${styles.logo} text-4xl`}>REDIBO</h1>

        <div className="flex relative">
          {[1, 2, 3, 4, 5].map((n, i) => (
            <button
              key={i}
              className={`${styles.buttons} relative px-12 py-[0.2rem] border border-[#00000033] 
                ${i === 0 ? 'rounded-l-full border-r-0' : ''} 
                ${i === 4 ? 'rounded-r-full border-l-0' : ''} 
                ${i !== 0 && i !== 4 ? 'border-x-0' : ''}`}
            >
              Botón{n}
              {i !== 4 && (
                <span className="absolute right-0 top-1/4 h-1/2 w-px bg-[#00000033]" />
              )}
              {i !== 0 && (
                <span className="absolute left-0 top-1/4 h-1/2 w-px bg-[#00000033]" />
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-0">
          <button className={`${styles.register} px-8 py-[0.4rem] rounded-l-[20px]`}>
            Registrarse
          </button>
          <button
            onClick={onLoginClick}
            className={`${styles.login} px-4 py-[0.4rem] rounded-r-[20px] active:scale-[0.97]`}
          >
            Iniciar Sesión
          </button>
        </div>
      </nav>
    </div>
  );
}