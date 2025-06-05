import React from "react";
import { IconContext } from "react-icons";

const BaseIcon = ({ children }: React.PropsWithChildren) => {
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
      <div>{children}</div>
    </IconContext>
  );
};

export default BaseIcon;
