import clsx from "clsx";
import styles from "./Button.module.scss";
import type { ButtonProps } from "./Button.types";

export default function Button({
  label,
  loading,
  variant = "default",
  className,
  onClick,
  ...rest
}: ButtonProps) {
  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    onClick();
  }

  return (
    <button
      disabled={loading}
      className={clsx(
        styles.default,
        {
          [styles.save]: variant !== "default",
          [styles.loading]: loading,
        },
        className
      )}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </button>
  );
}
