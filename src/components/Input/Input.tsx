import clsx from "clsx";
import Icon from "../Icon/Icon";
import styles from "./Input.module.scss";
import type { InputProps } from "./Input.types";

export default function Input({
  id,
  icon,
  positionIcon = "left",
  placeholder,
  value,
  className,
  ...rest
}: InputProps) {
  return (
    <div className={clsx(styles.container, className)}>
      {positionIcon === "left" && icon ? <Icon icon={icon} /> : ""}
      <div style={{ width: "100%" }}>
        {value.trim() === "" ? (
          <label htmlFor={id} className={clsx(styles.font, styles.label)}>
            {placeholder}
          </label>
        ) : (
          ""
        )}
        <input
          type="text"
          id={id}
          name={id}
          value={value}
          className={styles.font}
          {...rest}
        />
      </div>
      {positionIcon === "right" && icon ? <Icon icon={icon} /> : ""}
    </div>
  );
}
