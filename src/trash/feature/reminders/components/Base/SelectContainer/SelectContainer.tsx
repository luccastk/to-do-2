import React from "react";
import styles from "./SelectContainer.module.scss";

const SelectContainer = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default SelectContainer;
