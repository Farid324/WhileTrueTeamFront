import styles from "./RegisterModal.module.css";
import { useState } from "react";

export default function RegisterModal({ onClose }: { onClose: () => void }) {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const form = e.target as HTMLFormElement;

    // Acceso seguro a los inputs
    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value.trim();
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    const password = (
      form.elements.namedItem("password") as HTMLInputElement
    ).value.trim();
    const confirmPassword = (
      form.elements.namedItem("confirmPassword") as HTMLInputElement
    ).value.trim();
    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value.trim();
    const terms = (form.elements.namedItem("terms") as HTMLInputElement)
      .checked;

    const birthDay = (form.elements.namedItem("birthDay") as HTMLSelectElement)
      .value;
    const birthMonth = (
      form.elements.namedItem("birthMonth") as HTMLSelectElement
    ).value;
    const birthYear = (
      form.elements.namedItem("birthYear") as HTMLSelectElement
    ).value;

    // Validaciones frontend
    if (!email.includes("@")) {
      setError("El correo debe contener un @");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (!terms) {
      setError("Debes aceptar los términos y condiciones");
      return;
    }

    try {
      // Verificar correo duplicado
      const existing = await fetch(
        `http://localhost:3002/users?email=${email}`
      );
      const existingUsers = await existing.json();

      if (existingUsers.length > 0) {
        setError("Este correo ya está registrado");
        return;
      }

      const user = {
        name,
        email,
        password,
        phone,
        birthDate: `${birthDay}/${birthMonth}/${birthYear}`,
      };

      const res = await fetch("http://localhost:3002/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        alert("¡Usuario registrado con éxito!");
        form.reset();
        onClose();
      } else {
        setError("Hubo un error al registrar. Intenta nuevamente.");
      }
    } catch (error) {
      setError("No se pudo conectar al servidor.");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Registrarse</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.halfInput}>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.uIcon}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,8,8,0,0,1,1.79-5,2,2,0,0,1,2.67-.39,8.07,8.07,0,0,0,9.07,0,2,2,0,0,1,2.68.39A8,8,0,0,1,21,20Zm-9-6A6,6,0,1,0,6,8,6,6,0,0,0,12,14Z"
              ></path>
            </svg>

            <div className={styles.halfInput2}>
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre completo"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.halfInput}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.eicon}
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>

            <div className={styles.halfInput2}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.terms}>
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              He leído y acepto los Términos y condiciones
            </label>
          </div>

          {error && (
            <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
          )}

          <button type="submit" className={styles.button}>
            Registrarse
          </button>
        </form>

        <button className={styles.close} onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
