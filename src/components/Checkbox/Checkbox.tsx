import React from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  handleChange: (e: boolean) => void;
} & React.ComponentProps<"input">;

const Checkbox = ({
  handleChange,
  children,
}: React.PropsWithChildren<CheckboxProps>) => {

  function onClick(e: React.MouseEvent) {
    e.stopPropagation()
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleChange(e.currentTarget.checked)
  }

  return (
    <div className={styles.container}>
      <label className={styles.content}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onClick={onClick}
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
