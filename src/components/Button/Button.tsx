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

  const classNames: string[] = [styles.button];

  if (position !== "default") classNames.push(styles[`${position}`]);
  if (className) classNames.push(className);

  return (
    <button {...rest} onClick={handleClick} className={classNames.join(" ")}>
      <Icon icon={icon} />
      {children}
    </button>
  );
}
