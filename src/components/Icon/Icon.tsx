import { IconContext } from "react-icons";
import type { IconProps } from "./Icon.types";

export default function Icon({ icon, className }: IconProps) {
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
      <div className={className}>{icon}</div>
    </IconContext>
  );
}
