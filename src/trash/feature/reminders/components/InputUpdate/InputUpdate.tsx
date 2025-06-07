import React from "react";
import { InputContainer } from "../Base";
import styles from "./InputUpdate.module.scss";

const InputUpdate = () => {
  return (
    <InputContainer>
      <input type="text" placeholder="New Reminder" className={styles.input} />
    </InputContainer>
  );
};

export default InputUpdate;
