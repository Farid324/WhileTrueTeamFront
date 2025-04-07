import styles from './FiltersBar.module.css';

export default function FiltersBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        <span className={styles.active}>Filtro 1</span>
        <span>Filtro 1</span>
        <span>Filtro 1</span>
        <span>Filtro 1</span>
        <span>Filtro 1</span>
        <span>Filtro 1</span>
        <span>Filtro 1</span>
        <span>Filtro 1</span>
      </div>
      <div className={styles.controls}>
        <button className={styles.arrow}>&gt;</button>
        <button className={styles.filtros}>Filtros</button>
      </div>
    </div>
  );
}