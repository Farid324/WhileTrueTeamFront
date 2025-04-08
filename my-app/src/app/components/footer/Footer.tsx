import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} p-8 text-right`}>
      <a
        href="#"
        className={`${styles.terms} underline cursor-pointer`}
      >
        Términos y condiciones
      </a>
    </footer>
  );
}