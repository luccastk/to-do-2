import type React from "react";
import styles from "./ListItem.module.scss";

type ListItemProps = {
  active?: boolean;
  primaryColor?: string;
  secundaryColor?: string;
};

export default function ListItem({
  active,
  primaryColor,
  secundaryColor,
  children,
}: React.PropsWithChildren<ListItemProps>) {
  return (
    <li
      style={{ backgroundColor: `${active ? primaryColor : secundaryColor}` }}
      className={styles.item}
    >
      {children}
    </li>
  );
}
