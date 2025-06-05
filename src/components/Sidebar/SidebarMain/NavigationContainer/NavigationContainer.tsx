import React from "react";
import styles from "./NavigationContainer.module.scss";

type NavigationContainerProps = {
  title: string;
  isCollapsed: boolean;
};

const NavigationContainer = ({
  title,
  isCollapsed,
  children,
}: React.PropsWithChildren<NavigationContainerProps>) => {
  return (
    <div className={styles.container}>
      <span
        className={`${styles.title} ${
          isCollapsed ? styles["title--collapsed"] : ""
        }`}
      >
        {title}
      </span>
      <nav className={styles.nav}>{children}</nav>
    </div>
  );
};

export default NavigationContainer;
