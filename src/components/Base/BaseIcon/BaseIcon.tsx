import React from "react";
import { IconContext } from "react-icons";

type BaseIconProps = {
  icon: React.ReactNode;
};

const BaseIcon = ({ icon }: BaseIconProps) => {
  return (
    <IconContext
      value={{
        size: "1.5rem",
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
};

export default BaseIcon;
