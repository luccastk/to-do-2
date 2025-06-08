import styles from "./Drawer.module.scss";

type Width = "default" | "medium";

type DrawerProps = {
  active?: boolean;
  width?: Width;
};

export default function Drawer({
  active,
  width,
  children,
}: React.PropsWithChildren<DrawerProps>) {
  return (
    <div
      className={`${styles.drawer} ${active ? "" : styles.close} ${
        width === "medium" ? styles.medium : ""
      }`}
    >
      {children}
    </div>
  );
}
