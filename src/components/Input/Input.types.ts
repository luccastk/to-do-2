import type { Direction } from "../types";

export type InputProps = {
  id: string;
  icon?: React.ReactNode;
  positionIcon?: Extract<Direction, "left" | "right">;
  placeholder?: string;
  value: string;
  className?: string;
} & React.ComponentProps<"input">;
