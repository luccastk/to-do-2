import styles from "./Badge.module.scss";
import type { BadgeProps } from "./Badge.types";

export default function Badge({
  badgeContent,
  variant = "default",
  backgrounColor,
}: BadgeProps) {
  const badgeFormated = () => {
    const numberFormat = parseInt(badgeContent.toString().trim());

    if (isNaN(numberFormat) || badgeContent.toString() === "") {
      return 0;
    }

    return numberFormat;
  };

  return badgeFormated() > 0 ? (
    <span
      style={{ backgroundColor: backgrounColor }}
      className={`${styles.default} ${variant === "large" ? styles.large : ""}`}
    >
      {badgeFormated()}
    </span>
  ) : (
    ""
  );
}
