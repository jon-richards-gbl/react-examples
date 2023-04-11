import React, { HTMLInputTypeAttribute } from "react";

interface TextInputProps {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  isRequired?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  type,
  label,
  isRequired,
}) => (
  <>
    <label htmlFor={name} className="block mb-2 text-neutral-500">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={isRequired}
      className="w-full rounded border-2 p-3 mb-4"
    />
  </>
);

export default TextInput;
