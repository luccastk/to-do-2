import type { Position } from "../types";

export type ButtonProps = {
  icon: React.ReactNode;
  position?: Extract<Position, "default" | "left" | "right">;
  className?: string;
  onClick: () => void;
} & React.ComponentProps<"button">;
