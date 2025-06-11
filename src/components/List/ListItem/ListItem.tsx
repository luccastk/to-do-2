import clsx from "clsx";
import styles from "./ListItem.module.scss";
import type { ListItemProps } from "./ListItem.types";

export default function ListItem({
  className,
  children,
  ...rest
}: ListItemProps) {
  return (
    <li className={clsx(styles.item, className)} {...rest}>
      {children}
    </li>
  );
}
