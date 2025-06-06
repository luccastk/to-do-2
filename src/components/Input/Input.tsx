import React from "react";
import styles from "./Input.module.scss";

type InputProps = {
  id: string;
  placeholder?: string;
  value: string;
  type?: string;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownEnter?: () => void;
} & React.ComponentProps<"input">;

export default function Input({
  id,
  placeholder,
  value,
  type = "text",
  required = false,
  handleChange,
  onKeyDownEnter,
}: InputProps) {
  function handleKeydDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      onKeyDownEnter?.();
    }
  }

  return (
    <div className={`t-ph ${styles.container}`}>
      {value.trim() === "" ? (
        <label htmlFor={id} className={styles.label}>
          {placeholder}
        </label>
      ) : (
        ""
      )}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        required={required}
        className="t-ph"
        onChange={(e) => handleChange(e)}
        onKeyDown={handleKeydDown}
      />
    </div>
  );
}
