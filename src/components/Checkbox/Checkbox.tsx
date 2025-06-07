import React from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  handleChange: (checked: boolean) => void;
};

const Checkbox = ({ handleChange }: CheckboxProps) => {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
    handleChange(e.target.checked);
  }

  return (
    <label className={styles.container}>
      <input type="checkbox" className={styles.checkbox} onChange={onChange} />
      <span className={styles.checkmark}></span>
      <span className={styles.circle}></span>
    </label>
  );
};

export default Checkbox;
