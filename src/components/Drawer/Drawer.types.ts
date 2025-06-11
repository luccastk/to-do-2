import type React from "react";

export type DrawerProps = {
  open: boolean;
} & React.ComponentProps<"div">;
