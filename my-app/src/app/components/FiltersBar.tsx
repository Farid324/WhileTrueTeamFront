import styles from './FiltersBar.module.css';

  export default function FiltersBar() {
    return (
      <div className={`${styles.wrapper} flex justify-center items-center px-4 py-2 shadow-sm`}>
        <div className="flex gap-16 overflow-x-auto scrollbar-hide text-[rgba(0,0,0,0.64)]">
          <span className={`${styles.active} cursor-pointer whitespace-nowrap`}>Filtro 1</span>
          <span className="cursor-pointer whitespace-nowrap">Filtro 1</span>
          <span className="cursor-pointer whitespace-nowrap">Filtro 1</span>
          <span className="cursor-pointer whitespace-nowrap">Filtro 1</span>
          <span className="cursor-pointer whitespace-nowrap">Filtro 1</span>
          <span className="cursor-pointer whitespace-nowrap">Filtro 1</span>
          <span className="cursor-pointer whitespace-nowrap">Filtro 1</span>
        </div>
        <div className="flex items-center gap-12">
          <button className={`${styles.arrow} border-2 border-[rgba(0,0,0,0.2)] rounded px-2 py-1 cursor-pointer`}>
            &gt;
          </button>
          <button className={`${styles.filtros} border-none rounded px-8 py-2 shadow cursor-pointer`}>
            Filtros
          </button>
        </div>
      </div>
    );
  }
  