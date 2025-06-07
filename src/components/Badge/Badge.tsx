import styles from "./Badge.module.scss";

type Variant = "default" | "large";

type BadgeProps = {
  badgeContent: string | number;
  variant?: Variant;
  backgrounColor?: string;
};

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
