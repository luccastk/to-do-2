import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Button.module.scss";

type Variant = "primary" | "secundary" | "outlined";

type ButtonProps = {
  icon?: React.ReactNode;
  label?: string;
  buttonColor?: string;
  variant?: Variant;
  handleClick?: () => void;
};

export default function Button({
  icon,
  children,
  variant = "primary",
  handleClick,
}: React.PropsWithChildren<ButtonProps>) {
  function onClick(e: React.MouseEvent) {
    e.stopPropagation();
    handleClick?.();
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${variant && styles[`${variant}`]}`}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  );
}
