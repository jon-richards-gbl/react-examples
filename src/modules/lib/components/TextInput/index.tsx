import React, { HTMLInputTypeAttribute } from "react";

interface TextInputProps {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
}

const TextInput: React.FC<TextInputProps> = ({ name, type, label }) => (
  <>
    <label htmlFor={name} className="block mb-2 text-neutral-500">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      className="w-full rounded border-2 p-3 mb-4"
    />
  </>
);

export default TextInput;
