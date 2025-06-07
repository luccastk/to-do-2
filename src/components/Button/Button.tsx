import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Button.module.scss";

type ButtonProps = {
  icon?: React.ReactNode;
  label?: string;
  buttonColor?: string;
  variant: "default" | "save" | "delete" | "add";
  handleClick?: () => void;
};

export function Button({
  icon,
  label,
  variant = "default",
  handleClick,
}: ButtonProps) {
  function onClick(e: React.MouseEvent) {
    e.stopPropagation();
    handleClick?.();
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.container} ${variant && styles[`${variant}`]}`}
    >
      {icon && <Icon icon={icon} />}
      {label && <span className="t-b">{label}</span>}
    </button>
  );
}
