import React from "react";

interface InputlabelProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  img?: string; // si piensas usar una imagen en el futuro
}

const Inputlabel: React.FC<InputlabelProps> = ({ id, label, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default Inputlabel;
