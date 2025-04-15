import styles from "./RegisterModal.module.css";
import { useState } from "react";

export default function RegisterModal({ onClose }: { onClose: () => void }) {
  const [error, setError] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const [birthError, setBirthError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const getLabelColor = (hasError: boolean) =>
    hasError ? "#E30000" : "var(--azul-oscuro)";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const form = e.target as HTMLFormElement;

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

    const birthDay = (form.elements.namedItem("birthDay") as HTMLSelectElement)
      .value;
    const birthMonth = (
      form.elements.namedItem("birthMonth") as HTMLSelectElement
    ).value;
    const birthYear = (
      form.elements.namedItem("birthYear") as HTMLSelectElement
    ).value;

    //manejo de errores

    let hasErrors = false;

    //validaciones de nombre de usuario
    if (!name) {
      setNameError(true);
      hasErrors = true;
    } else {
      setNameError(false);
    }

    //validaciones de email

    if (!email.includes("@") || !email.includes(".") || email.length < 5) {
      setEmailError(true);
      hasErrors = true;
    } else {
      setEmailError(false);
    }

    //validaciones de passwrod

    if (password.trim() === "") {
      setPasswordMessage("La contraseña no puede estar vacía");
      setPasswordError(true);
      hasErrors = true;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordMessage("Debe contener al menos una letra mayúscula");
      setPasswordError(true);
      hasErrors = true;
    } else if (!/[a-z]/.test(password)) {
      setPasswordMessage("Debe contener al menos una letra minúscula");
      setPasswordError(true);
      hasErrors = true;
    } else if (!/[0-9]/.test(password)) {
      setPasswordMessage("Debe contener al menos un número");
      setPasswordError(true);
      hasErrors = true;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordMessage("Debe tener al menos un carácter especial (!@#$...)");
      setPasswordError(true);
      hasErrors = true;
    } else if (password.includes(" ")) {
      setPasswordMessage("No puede contener espacios");
      setPasswordError(true);
      hasErrors = true;
    } else if (password.length < 8) {
      setPasswordMessage("La contraseña debe tener al menos 8 caracteres");
      setPasswordError(true);
      hasErrors = true;
    } else if (password.length > 25) {
      setPasswordMessage("No puede tener más de 25 caracteres");
      setPasswordError(true);
      hasErrors = true;
    } else {
      setPasswordError(false);
      setPasswordMessage("");
    }

    // validacion de Confirmar contraseña
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError(true);
      setConfirmPasswordMessage("Debes confirmar la contraseña");
      hasErrors = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordMessage("Las contraseñas deben coincidir");
      hasErrors = true;
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordMessage("");
    }

    /*validacion de fecha*/

    const today = new Date();
    const selectedDate = new Date(
      Number(birthYear),
      Number(birthMonth) - 1,
      Number(birthDay)
    );
    const invalidBirth =
      !birthDay || !birthMonth || !birthYear || selectedDate > today;

    if (invalidBirth) {
      setBirthError(true);
      hasErrors = true;
    } else {
      setBirthError(false);
    }

    //validacion de telefono
    if (phone && !/^\d{8}$/.test(phone)) {
      setPhoneError(true);
      hasErrors = true;
    } else {
      setPhoneError(false);
    }

    //validacion de terminos y condiciones
    const terms = (form.elements.namedItem("terms") as HTMLInputElement)
      .checked;

    if (!terms) {
      setTermsError(true);
      hasErrors = true;
    } else {
      setTermsError(false);
    }

    if (hasErrors) return; // Si hay al menos un error, no continúa

    /*conexion con back end*/
    try {
      const fechaNacimiento = new Date(
        Number(birthYear),
        Number(birthMonth) - 1,
        Number(birthDay)
      ).toISOString();

      const user = {
        nombre_completo: name,
        email,
        contraseña: password,
        fecha_nacimiento: fechaNacimiento,
        telefono: phone ? parseInt(phone) : null,
      };

      const res = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        alert("¡Usuario registrado con éxito!");
        form.reset();
        onClose();
      } else {
        const data = await res.json();
        setError(
          data.message || "Hubo un error al registrar. Intenta nuevamente."
        );
      }
    } catch (error) {
      console.error(error);
      setError("No se pudo conectar al servidor.");
    }

    /* if (!name) {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    } */
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Registrarse</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div
            className={`${styles.halfInput} ${
              nameError ? styles.errorInput : ""
            }`}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.uIcon} ${nameError ? styles.errorIcon : ""}`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,8,8,0,0,1,1.79-5,2,2,0,0,1,2.67-.39,8.07,8.07,0,0,0,9.07,0,2,2,0,0,1,2.68.39A8,8,0,0,1,21,20Zm-9-6A6,6,0,1,0,6,8,6,6,0,0,0,12,14Z"
              ></path>
            </svg>

            <div className={styles.halfInput2}>
              <label
                htmlFor="name"
                style={{ color: getLabelColor(passwordError) }}
              >
                {nameError ? "Nombre completo" : "Nombre completo"}
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder={
                  nameError
                    ? "El campo no puede estar vacío"
                    : "Nombre completo"
                }
                className={`${styles.input} ${
                  nameError ? styles.errorInput : ""
                }`}
                /*className={styles.input}*/
                /*required*/
              />
            </div>
          </div>

          <div
            className={`${styles.halfInput} ${
              emailError ? styles.errorInput : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${styles.eicon} ${
                emailError ? styles.errorIcon : ""
              }`}
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>

            <div className={styles.halfInput2}>
              <label
                htmlFor="email"
                style={{ color: getLabelColor(emailError) }}
              >
                Correo electrónico
              </label>
              {/* <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                className={styles.input}
                required
              /> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder={
                  emailError ? "Correo inválido" : "Correo electrónico"
                }
                className={`${styles.input} ${
                  emailError ? styles.errorInput : ""
                }`}
              />
            </div>
          </div>
          <div className={styles.passwordRow}>
            <div
              className={`${styles.halfInputC1} ${
                passwordError ? styles.errorInput : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.iconollave} ${
                  passwordError ? styles.errorIcon : ""
                }`}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14.52 2c1.029 0 2.015 .409 2.742 1.136l3.602 3.602a3.877 3.877 0 0 1 0 5.483l-2.643 2.643a3.88 3.88 0 0 1 -4.941 .452l-.105 -.078l-5.882 5.883a3 3 0 0 1 -1.68 .843l-.22 .027l-.221 .009h-1.172c-1.014 0 -1.867 -.759 -1.991 -1.823l-.009 -.177v-1.172c0 -.704 .248 -1.386 .73 -1.96l.149 -.161l.414 -.414a1 1 0 0 1 .707 -.293h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h1v-1a1 1 0 0 1 .206 -.608l.087 -.1l1.468 -1.469l-.076 -.103a3.9 3.9 0 0 1 -.678 -1.963l-.007 -.236c0 -1.029 .409 -2.015 1.136 -2.742l2.643 -2.643a3.88 3.88 0 0 1 2.741 -1.136m.495 5h-.02a2 2 0 1 0 0 4h.02a2 2 0 1 0 0 -4" />
              </svg>
              <div className={styles.passwordInput}>
                <label
                  htmlFor="password"
                  style={{
                    color: getLabelColor(passwordError),
                  }}
                >
                  Contraseña
                </label>
                {/* <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  className={styles.input2}
                  required
                /> */}
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder={
                    passwordError ? "contraseña inválida" : "Contraseña"
                  }
                  className={`${styles.input2} ${
                    passwordError ? styles.errorInput : ""
                  }`}
                />
                {passwordError && (
                  <p
                    style={{
                      color: "#E30000",
                      fontSize: "0.75rem",
                      marginTop: "0.25rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {passwordMessage}
                  </p>
                )}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.ojito} ${
                  passwordError ? styles.errorIcon : ""
                }`}
              >
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path
                  fill-rule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div
              className={`${styles.halfInputC2} ${
                confirmPasswordError ? styles.errorInput : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.iconollave} ${
                  confirmPasswordError ? styles.errorIcon : ""
                }`}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14.52 2c1.029 0 2.015 .409 2.742 1.136l3.602 3.602a3.877 3.877 0 0 1 0 5.483l-2.643 2.643a3.88 3.88 0 0 1 -4.941 .452l-.105 -.078l-5.882 5.883a3 3 0 0 1 -1.68 .843l-.22 .027l-.221 .009h-1.172c-1.014 0 -1.867 -.759 -1.991 -1.823l-.009 -.177v-1.172c0 -.704 .248 -1.386 .73 -1.96l.149 -.161l.414 -.414a1 1 0 0 1 .707 -.293h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h1v-1a1 1 0 0 1 .206 -.608l.087 -.1l1.468 -1.469l-.076 -.103a3.9 3.9 0 0 1 -.678 -1.963l-.007 -.236c0 -1.029 .409 -2.015 1.136 -2.742l2.643 -2.643a3.88 3.88 0 0 1 2.741 -1.136m.495 5h-.02a2 2 0 1 0 0 4h.02a2 2 0 1 0 0 -4" />
              </svg>
              <div className={styles.passwordInput}>
                <label
                  htmlFor="confirmPassword"
                  style={{
                    color: getLabelColor(passwordError),
                  }}
                >
                  Confirmar Contraseña
                </label>
                {/* <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirme su contraseña"
                  className={styles.input2}
                  required
                /> */}
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder={
                    confirmPasswordError
                      ? "contraseña invalida"
                      : "Confirme su contraseña"
                  }
                  className={`${styles.input2} ${
                    confirmPasswordError ? styles.errorInput : ""
                  }`}
                />
                {confirmPasswordError && (
                  <p
                    style={{
                      color: "#E30000",
                      fontSize: "0.75rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    {confirmPasswordMessage}
                  </p>
                )}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.ojito} ${
                  confirmPasswordError ? styles.errorIcon : ""
                }`}
              >
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path
                  fill-rule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div
            className={`${styles.halfInput} ${
              birthError ? styles.errorInput : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${styles.cIcon} ${
                birthError ? styles.errorIcon : ""
              }`}
            >
              <path
                fill-rule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <div className={styles.birthRow}>
              <label style={{ color: getLabelColor(birthError) }}>
                Fecha de Nacimiento
              </label>

              <div className={styles.birthInputs}>
                {/* <select name="birthDay" required className={styles.select}> */}
                <select
                  name="birthDay"
                  className={`${styles.select} ${
                    birthError ? styles.errorInput : ""
                  }`}
                >
                  <option value="">DD</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                {/* <select name="birthMonth" required className={styles.select}> */}
                <select
                  name="birthMonth"
                  className={`${styles.select} ${
                    birthError ? styles.errorInput : ""
                  }`}
                >
                  <option value="">MM</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                {/* <select name="birthYear" required className={styles.select}> */}
                <select
                  name="birthYear"
                  className={`${styles.select} ${
                    birthError ? styles.errorInput : ""
                  }`}
                >
                  <option value="">AAAA</option>
                  {[...Array(100)].map((_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div
            className={`${styles.halfInput} ${
              phoneError ? styles.errorInput : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${styles.tIcon} ${
                phoneError ? styles.errorIcon : ""
              }`}
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <div className={styles.halfInput2}>
              <label
                htmlFor="phone"
                style={{ color: getLabelColor(phoneError) }}
              >
                Teléfono
              </label>
              {/* <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ingrese número de teléfono"
                pattern="[0-9]{8}"
                className={styles.input}
                required
              /> */}
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={
                  phoneError
                    ? "numero de telefono inválido"
                    : "Ingrese número de teléfono"
                }
                className={`${styles.input} ${
                  phoneError ? styles.errorInput : ""
                }`}
              />
            </div>
          </div>

          <div className={styles.terms}>
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">
              <span className={styles.termsText}>
                He leído y acepto los{" "}
                <a
                  href="/home/terminos"
                  
                  className={styles.termsLink}
                >
                  Términos y condiciones
                </a>{" "}
                de la página
              </span>
            </label>
          </div>

          {termsError && (
            <p
              style={{
                color: "#E30000",
                fontSize: "0.75rem",
                marginTop: "0.2rem",
              }}
            >
              Debes aceptar los términos y condiciones para continuar
            </p>
          )}

          {error && (
            <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
          )}

          <button type="submit" className={styles.button}>
            Registrarse
          </button>

          <p
            style={{
              textAlign: "center",
              fontSize: "0.9rem",
              marginTop: "1rem",
              color: "#000000",
            }}
          >
            ¿Ya tienes una cuenta?{" "}
            <a
              href="/login"
              style={{ color: "#FCA311", textDecoration: "none" }}
            >
              Iniciar Sesión
            </a>
          </p>
        </form>
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
