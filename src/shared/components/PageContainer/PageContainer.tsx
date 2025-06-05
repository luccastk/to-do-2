import React from "react";
import styles from "./PageContainer.module.scss";

const PageContainer = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageContainer;
