import React from "react";
import styles from "./InputContainer.module.scss";

const InputContainer = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default InputContainer;
