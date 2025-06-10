import clsx from "clsx";
import styles from "./Container.module.scss";

export default function Container({ children }: React.PropsWithChildren) {
  return <div className={clsx(styles.container)}>{children}</div>;
}
