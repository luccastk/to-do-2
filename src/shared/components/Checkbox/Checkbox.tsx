import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        {...props}
        className={styles.checkbox}
        onClick={(e) => e.stopPropagation()}
      />
      <span className={styles.checkmark}></span>
      <span className={styles.circle}></span>
    </label>
  );
};

export default Checkbox;
