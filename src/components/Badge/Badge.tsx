import styles from "./Badge.module.scss";

type BagdeProps = {
  icon?: React.ReactNode;
  badgeContent: number | string;
  variant?: "default" | "dot";
  max?: number;
};

export default function Bagde({
  icon,
  variant = "default",
  badgeContent,
  max,
}: BagdeProps) {
  function verifyIntegrity() {
    if (isNaN(parseInt(badgeContent.toString()))) {
      return 0;
    } else if (badgeContent.toString().trim() === "") {
      return 0;
    } else {
      return parseInt(badgeContent.toString());
    }
  }

  const badge = () => {
    if (max && verifyIntegrity() > max) {
      return max;
    } else if (badgeContent && verifyIntegrity() > 0) return badgeContent;
  };

  return (
    <div className={styles.container}>
      {icon}
      <span
        className={`
          ${verifyIntegrity() > 0 ? styles.badge : ""} ${
          variant === "dot" ? styles.bagde__dot : ""
        }   
        text-sm`}
      >
        {variant === "dot" ? "" : badge()}
      </span>
    </div>
  );
}
