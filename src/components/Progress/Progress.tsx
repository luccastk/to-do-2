import styles from "./Progress.module.scss";

export default function Progress() {
  return (
    <span className={styles.container}>
      <span className={styles.loader}></span>
    </span>
  );
}
