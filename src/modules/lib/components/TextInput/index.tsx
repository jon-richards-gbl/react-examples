import React, { HTMLInputTypeAttribute } from "react";

import "./styles.css";

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
    <label htmlFor={name} className="text-input--label">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={isRequired}
      className="text-input"
    />
  </>
);

export default TextInput;
