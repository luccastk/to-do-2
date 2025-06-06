import { BaseIcon } from "../Base";
import styles from "./Badge.module.scss";

type BagdeProps = {
  icon?: React.ReactNode;
  badgeContent: number | string;
  variant?: "dot";
  max?: number;
};

export default function Bagde({
  icon,
  variant,
  badgeContent,
  max,
}: BagdeProps) {
  const badFormated = parseInt(badgeContent.toString());
  

  let value;
  switch (badgeContent) {
    case "0":
      return (value = 0);
    case "":
      return (value = 0);
      return (value = 0);
  }

  return (
    <div className={styles.container}>
      {icon}
      <span className={`${variant && styles.bagde__dot} text-sm`}></span>
    </div>
  );
}
