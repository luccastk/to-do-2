import type { Position } from "../types";

export type InputProps = {
  id: string;
  icon?: React.ReactNode;
  positionIcon?: Extract<Position, "left" | "right">;
  placeholder?: string;
  value: string;
  className?: string;
} & React.ComponentProps<"input">;
