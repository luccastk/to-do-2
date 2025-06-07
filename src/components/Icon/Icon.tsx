import { IconContext } from "react-icons";
import styles from "./Icon.module.scss";

type IconProps = {
  icon?: React.ReactNode;
  color?: string;
};

export default function Icon({ icon, color }: IconProps) {
  return (
    <IconContext
      value={{
        size: "1rem",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <div className={styles.icon} style={{ backgroundColor: color }}>
        {icon ? icon : ""}
      </div>
    </IconContext>
  );
}
