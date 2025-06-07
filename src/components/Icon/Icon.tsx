import { IconContext } from "react-icons";

type IconProps = {
  icon: React.ReactNode;
};

export default function Icon({ icon }: IconProps) {
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
      <div>{icon}</div>
    </IconContext>
  );
}
