import styles from "./BadgeIcon.module.scss";

type BagdeIconProps = {
  icon: React.ReactNode;
  badgeContent: number | string;
  variant?: "default" | "dot";
  max?: number;
};

export default function BagdeIcon({
  icon,
  variant = "default",
  badgeContent,
  max,
}: BagdeIconProps) {
  const badgeFormated = () => {
    const numberFormat = parseInt(badgeContent.toString().trim());

    if (isNaN(numberFormat) || badgeContent.toString() === "") {
      return 0;
    }

    return numberFormat;
  };

  const badge = () => {
    if (max && badgeFormated() > max) {
      return max.toString().concat("+");
    } else if (badgeContent && badgeFormated() > 0) return badgeContent;
  };

  return (
    <div className={styles.container}>
      {icon}
      <span
        className={`
          ${badgeFormated() > 0 ? styles.badge : ""} ${
          variant === "dot" ? styles.bagde__dot : ""
        }   
        text-sm`}
      >
        {variant === "dot" ? "" : badge()}
      </span>
    </div>
  );
}
