import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Button.module.scss";

type Variant = "default" | "primary" | "secundary" | "outlined";

type ButtonProps = {
  icon?: React.ReactNode;
  label?: string;
  buttonColor?: string;
  variant?: Variant;
  handleClick?: () => void;
} & React.ComponentProps<"button">;

export default function Button({
  icon,
  children,
  variant = "default",
  handleClick,
  ...rest
}: React.PropsWithChildren<ButtonProps>) {
  function onClick(e: React.MouseEvent) {
    e.stopPropagation();
    handleClick?.();
  }

  const classNames = [styles[variant]];

  if (variant !== "default") classNames.push(styles[`${variant}`]);

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${classNames}`}
      {...rest}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  );
}
