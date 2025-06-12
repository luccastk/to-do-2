import type React from "react";

export type DrawerProps = {
  open: boolean;
  className?: string;
} & React.ComponentProps<"div">;
