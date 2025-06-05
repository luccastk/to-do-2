import React from "react";
import { ButtonCreate } from "../../Buttons";
import styles from "./ReminderInputCreate.module.scss";

type ReminderInputCreateProps = {
  placeholder: string;
  variant?: "default" | "withButton";
};

const ReminderInputCreate = ({
  placeholder,
  variant = "default",
}: ReminderInputCreateProps) => {
  const [value, setValue] = React.useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  return (
    <div className={styles.container}>
      {variant === "withButton" && (
        <ButtonCreate handleCreate={() => console.log("criou")} />
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ReminderInputCreate;
