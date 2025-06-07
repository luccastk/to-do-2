import React from "react";
import styles from "./Input.module.scss";
import Icon from "../Icon/Icon";

type Variant = "default" | "outlined";

type InputProps = {
  id: string;
  icon?: React.ReactNode;
  variant?: Variant;
  placeholder?: string;
  value: string;
  type?: string;
  required?: boolean;
  handleChange: (value: string) => void;
  onKeyDownEnter?: () => void;
} & React.ComponentProps<"input">;

export default function Input({
  id,
  icon,
  variant = "default",
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
    <div
      className={`${styles.default} ${
        variant === "outlined" ? styles.outlined : ""
      }`}
    >
      {icon && <Icon icon={icon} />}
      <div style={{flex: "1"}}>
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
          onChange={(e) => handleChange(e.currentTarget.value)}
          onKeyDown={handleKeydDown}
          className={styles.input}
        />
      </div>
    </div>
  );
}
