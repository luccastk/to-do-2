import React from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  handleChange: (checked: boolean) => void;
};

const Checkbox = ({
  handleChange,
  children,
}: React.PropsWithChildren<CheckboxProps>) => {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
    handleChange(e.target.checked);
  }

  return (
    <div className={styles.container}>
      <label className={styles.content}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={onChange}
        />
        <span className={styles.checkmark}></span>
        <span className={styles.circle}></span>
      </label>
      {children}
    </div>
  );
};

export default Checkbox;
