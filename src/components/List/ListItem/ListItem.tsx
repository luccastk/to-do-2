import type React from "react";
import styles from "./ListItem.module.scss";

type ListItemProps = {
  active?: boolean;
  primaryColor?: string;
  secundaryColor?: string;
} & React.ComponentProps<"li">;

export default function ListItem({
  active,
  primaryColor,
  secundaryColor,
  children,
  ...rest
}: React.PropsWithChildren<ListItemProps>) {
  return (
    <li
      style={{ backgroundColor: `${active ? primaryColor : secundaryColor}` }}
      className={styles.item}
      {...rest}
    >
      {children}
    </li>
  );
}
