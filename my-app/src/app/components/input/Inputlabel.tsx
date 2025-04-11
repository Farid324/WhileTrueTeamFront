// components/input/Inputlabel.tsx
import React from "react";

const Inputlabel: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <h4
        className="text-[var(--azul-oscuro)] text-[0.8rem] font-[var(--tamaña-bold)] indent-[1rem] mt-2"
        style={{ fontFamily: "var(--fuente-principal)" }}
      >
        Correo
      </h4>
      <input
        type="text"
        placeholder="Ingrese correo electrónico"
        className="w-full h-4 text-[var(--azul-oscuro)] p-4 rounded-lg"
        style={{
          fontFamily: "var(--fuente-principal)",
          fontWeight: "var(--tamaña-bold)",
          outline: "none",
        }}
      />
    </div>
  );
};

export default Inputlabel;
