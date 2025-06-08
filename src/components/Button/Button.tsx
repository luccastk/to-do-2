import Icon from "../Icon/Icon";
import styles from "./Button.module.scss";
import type { ButtonProps } from "./Button.types";

export default function Button({
  icon,
  position = "default",
  className,
  onClick,
  children,
  ...rest
}: React.PropsWithChildren<ButtonProps>) {
  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    onClick();
  }

  const style: string[] = [];

  if (position !== "default") style.push(styles[`${position}`]);

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={`${styles.button} ${style.join(" ")} ${className ? className : ""}`}
    >
      <Icon icon={icon} />
      {children}
    </button>
  );
}
