/* import { backendip } from "@/libs/authServices"; */
import styles from "./RegisterModal.module.css";
import { useState } from "react";

export default function CompleteProfileModal({
  onComplete,
  onClose,
  onSuccess,
}: {
  onComplete: (data: { name: string; birthDate: string }) => void;
  onClose: () => void;
  onSuccess?: () => void;
}) {
  const [name, setName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const birthDate = new Date(
      Number(birthYear),
      Number(birthMonth) - 1,
      Number(birthDay)
    );

    onComplete({ name: name.trim(), birthDate: birthDate.toISOString() });
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>REGISTRARSE</h2>
        <p style={{ textAlign: "center", marginBottom: "1rem", fontWeight: 500, color: "blue" }}>
          ¡Ya casi acabas!
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Campo nombre completo */}
          <div className={styles.halfInput}>
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Ingrese su nombre completo"
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          {/* Fecha de nacimiento */}
          <div className={styles.halfInput}>
            <label>Fecha de nacimiento</label>
            <div className={styles.birthInputs}>
              <select value={birthDay} onChange={(e) => setBirthDay(e.target.value)} className={styles.select}>
                <option value="">DD</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)} className={styles.select}>
                <option value="">MM</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)} className={styles.select}>
                <option value="">AAAA</option>
                {[...Array(100)].map((_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year}>{year}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Teléfono */}
          <div className={styles.halfInput}>
            <label htmlFor="phone">Teléfono</label>
            <div className={styles.phoneWrapper}>
              <span className={styles.prefix}>+591</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                maxLength={8}
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Ingrese número de teléfono"
                className={styles.input3}
              />
            </div>
          </div>

          <button type="submit" className={styles.button}>
            ¡Registrarme!
          </button>
        </form>

        <button className={styles.close} onClick={onClose}>✕</button>
      </div>
    </div>
  );
}

