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
  const stylesContainer: string[] = [styles.container];
  const stylesLabel: string[] = [styles.font, styles.label];

  if (className) stylesContainer.push(className);

  return (
    <div className={stylesContainer.join(" ")}>
      {positionIcon === "left" && icon ? <Icon icon={icon} /> : ""}
      <div>
        {value.trim() === "" ? (
          <label htmlFor={id} className={stylesLabel.join(" ")}>
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
          {...rest}
          className={styles.font}
        />
      </div>
      {positionIcon === "right" && icon ? <Icon icon={icon} /> : ""}
    </div>
  );
}
