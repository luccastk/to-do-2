import React from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  handleChange: () => void;
} & React.ComponentProps<"input">;

const Checkbox = ({
  handleChange,
  children,
}: React.PropsWithChildren<CheckboxProps>) => {
  function onChange(e: React.MouseEvent) {
    e.stopPropagation();
    handleChange();
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
