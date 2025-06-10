import clsx from "clsx";
import { IconContext } from "react-icons";
import Progress from "../Progress/Progress";
import styles from "./IconButton.module.scss";
import type { IconButtonProps } from "./IconButton.types";

export default function IconButton({
  icon,
  position,
  loading,
  className,
  onClick,
}: IconButtonProps) {
  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    onClick();
  }

  return (
    <button
      disabled={loading}
      className={clsx(
        styles.default,
        {
          [styles.left]: position === "left",
          [styles.right]: position === "right",
        },
        className
      )}
      onClick={handleClick}
    >
      {loading ? (
        <Progress />
      ) : (
        <IconContext
          value={{
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            },
          }}
        >
          {icon}
        </IconContext>
      )}
    </button>
  );
}
