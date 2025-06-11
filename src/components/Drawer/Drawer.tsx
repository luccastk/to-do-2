import clsx from "clsx";
import styles from "./Drawer.module.scss";
import type { DrawerProps } from "./Drawer.types";

export default function Drawer({ open, children, ...rest }: DrawerProps) {
  return (
    <div
      className={clsx(styles.drawer, {
        [styles["drawer--active"]]: open,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
