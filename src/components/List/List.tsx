import styles from "./List.module.scss";

export default function List({ children }: React.PropsWithChildren) {
  return <ul className={styles.list}>{children}</ul>;
}
