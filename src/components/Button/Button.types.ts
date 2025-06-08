import type { Direction } from "../types";

export type ButtonProps = {
  icon: React.ReactNode;
  position?: Extract<Direction, "default" | "left" | "right">;
  className?: string;
  onClick: () => void;
} & React.ComponentProps<"button">;
